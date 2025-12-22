import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const reportsDir = path.join(process.cwd(), 'data', 'reports');

    if (!fs.existsSync(reportsDir)) {
      return NextResponse.json([]);
    }

    const files = fs.readdirSync(reportsDir);

    const reports = files
      .filter((file) => file.endsWith('.md'))
      .map((file) => {
        const filePath = path.join(reportsDir, file);
        const stats = fs.statSync(filePath);
        return {
          id: file.replace('.md', ''),
          filePath,
          mtime: stats.mtime.getTime(),
        };
      })
      .sort((a, b) => b.mtime - a.mtime) // Sort by most recent
      .slice(0, 10); // Get top 10

    const results = reports.map((report) => {
      try {
        const content = fs.readFileSync(report.filePath, 'utf-8');
        // Extract title from the first line that starts with #
        const match = content.match(/^#+\s+(.*)$/m);
        const title = match ? match[1].trim() : 'Untitled Report';
        return {
          id: report.id,
          title: title,
        };
      } catch (err) {
        console.error(`Error reading file ${report.id}:`, err);
        return {
          id: report.id,
          title: 'Error loading title',
        };
      }
    });

    return NextResponse.json(results);
  } catch (error) {
    console.error('Error fetching recent reports:', error);
    return NextResponse.json({ error: 'Failed to fetch reports' }, { status: 500 });
  }
}
