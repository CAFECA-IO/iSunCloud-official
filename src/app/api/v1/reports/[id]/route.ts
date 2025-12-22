import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: 'Report ID is required' }, { status: 400 });
    }

    const reportsDir = path.join(process.cwd(), 'data', 'reports');
    const filePath = path.join(reportsDir, `${id}.md`);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'Report not found' }, { status: 404 });
    }

    const content = fs.readFileSync(filePath, 'utf-8');

    return NextResponse.json({ content });

  } catch (error) {
    console.error('Error reading report:', error);
    return NextResponse.json({ error: 'Failed to retrieve report' }, { status: 500 });
  }
}
