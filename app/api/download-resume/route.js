import { NextResponse } from "next/server";
import { join } from "path";
import { readFileSync } from "fs";

export async function GET() {
  try {
    const filePath = join(
      process.cwd(),
      "public",
      "assets",
      "resume",
      "latest_resume.pdf"
    );
    const fileBuffer = readFileSync(filePath);

    // Return as ArrayBuffer in a NextResponse
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="Khuzaima-Pishori_SDE1_2025.pdf"',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "File not found" }, { status: 500 });
  }
}
