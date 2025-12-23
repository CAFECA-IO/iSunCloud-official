import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';

import { DEFAULT_GOOGLE_MODEL_NAME } from '@/constants/default/ai';
import { getRandomErrorMessage } from '@/constants/chat_errors';

export async function POST(req: NextRequest) {
  let errorLanguage = 'en';
  try {
    const { message, language } = await req.json();
    errorLanguage = language;

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
    const modelName = process.env.GOOGLE_MODEL_NAME || DEFAULT_GOOGLE_MODEL_NAME;
    const model = genAI.getGenerativeModel({ model: modelName });

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
    // Extract language from request if possible, otherwise default to 'en'
    // Since we can't easily access req.json() again here if it was already read, 
    // we might need to rely on the scope. 
    // However, `language` is defined inside the try block. 
    // We can try to parse it again or default to 'en'.
    // A safer way is to declare language outside try or just default to en.
    // For simplicity, we'll default to 'en' or try to reuse if we handle scope better, 
    // but here we simply assume 'en' if not available, OR 
    // actually providing a fallback mechanism.

    // Let's assume we want to support the requested language if we reached that point.
    // Since we cannot access `language` from the catch block due to block scope,
    // we will default to 'en' for now, but to be better we could move the declaration up.
    // For this implementation, I will just call getRandomErrorMessage('en') 
    // unless I refactor the scope. 

    // Refactoring scope:
    // let language = 'en'; ... try { const body = ... language = body.language ... }

    // Implementing the refactor in this replacement:

    return NextResponse.json({ error: getRandomErrorMessage(errorLanguage) }, { status: 500 });
  }
}
