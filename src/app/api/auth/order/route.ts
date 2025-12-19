import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Forward to SheetBest (or any backend service)
    const response = await axios.post(
      "https://api.sheetbest.com/sheets/efe335b0-0875-4525-9d21-c28da47e3e43",
      body
    );

    return NextResponse.json({ success: true, data: response.data });
  } catch (error: any) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}