import { NextResponse } from "next/server"; // Import NextResponse for API routes
import connect from "@/lib/connection"; // Your MongoDB connection utility
import Contact from "@/model/contact"; // Contact model

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 422 }
      );
    }
    await connect();

    await Contact.create({ name, email, message });

    // Return success response
    return NextResponse.json(
      { message: "Contact created successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
