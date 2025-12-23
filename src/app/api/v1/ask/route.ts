import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const { message, language } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const apiKey = process.env.GOOGLE_API_KEY;

    if (!apiKey) {
      console.error("GOOGLE_API_KEY is not set.");
      return NextResponse.json(
        { error: 'Service temporarily unavailable. (Missing configuration)' },
        { status: 503 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    const context = `
You are an expert AI analyst for the "Ascent GX10" and iSunCloud ecosystem.
Product details:
- Compute Power: 1P FLOPS
- Memory: 128GB High-speed Unified Memory
- Storage: 1TB PCIe 5.0 NVMe SSD
- Network: 10GbE LAN & Wi-Fi 7
- Features: Decentralized supercomputer connection, AI-optimized, maximizes earning potential.

User Query: ${message}

Instructions:
1. Analyze the user's query as a request for a detailed technical or market report.
2. Generate a comprehensive report in Markdown format.
3. Use headers (##, ###), bullet points, bold text, and code blocks where appropriate.
4. If the query is just a keyword (e.g., "ROI"), infer the intent and generate a full report on that topic (e.g., "Return on Investment Analysis for Ascent GX10").
5. Structure the report with:
   - **Executive Summary**
   - **Detailed Analysis**
   - **Technical Specifications (if relevant)**
   - **Conclusion/Recommendation**
6. Refuse to answer questions unrelated to the product or iSunCloud.
7. **LANGUAGE REQUIREMENT**: Output the report strictly in the language code: "${language || 'en'}". 
   - If 'zh-TW', use Traditional Chinese (繁體中文).
   - If 'zh-CN', use Simplified Chinese (简体中文).
   - If 'ja', use Japanese.
   - If 'ko', use Korean.
    `;

    const result = await model.generateContent(context);
    const response = await result.response;
    const text = response.text();

    // Clean up the text (remove outer markdown code blocks if present)
    let cleanText = text.trim();
    if (cleanText.startsWith('```')) {
      cleanText = cleanText.replace(/^```[a-zA-Z-]+/, '').replace(/```$/, '');
    }
    let finalContent = cleanText.trim();

    // Prepend the question as the title
    if (message) {
      finalContent = `# ${message}\n\n${finalContent}`;
    }

    // Generate ID and Save Report
    const id = crypto.randomUUID();
    const reportsDir = path.join(process.cwd(), 'data', 'reports');

    // Ensure directory exists (redundant safety)
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }

    const filePath = path.join(reportsDir, `${id}.md`);

    // Save metadata + content? Or just content. User said "save as [id].md".
    // I will save just the markdown content for simplicity as requested.
    fs.writeFileSync(filePath, finalContent);

    return NextResponse.json({ reply: finalContent, id: id });

  } catch (error) {
    console.error('Error generating AI response:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: `Failed to process request: ${errorMessage}` }, { status: 500 });
  }
}
