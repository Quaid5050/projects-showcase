import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time, players, package: pkg, message } = body;

    if (!name || !email || !date) {
      return NextResponse.json(
        { error: "Name, email, and date are required." },
        { status: 400 }
      );
    }

    // In production, connect to your booking system / CRM
    console.log("Booking request:", { name, email, phone, date, time, players, pkg, message });

    // TODO: Send confirmation email
    // TODO: Create booking in CRM
    // TODO: Integrate with payment gateway

    return NextResponse.json(
      { success: true, message: "Booking request received." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
