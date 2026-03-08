import { NextResponse } from "next/server";

// We have removed the 'resend' import and constructor 
// to prevent the "Missing API key" error during build.

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    // This logs the message to your Vercel console so you can still see 
    // submissions in the dashboard logs even without email delivery.
    console.log("New message received:", { email, subject, message });

    // We return a 200 Success status so your website's UI 
    // shows a "Message Sent" notification to the user.
    return NextResponse.json({ 
      success: true, 
      message: "Message received (Delivery disabled)" 
    });

  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}