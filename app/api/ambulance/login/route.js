import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import AmbulanceDriver from "@/app/models/AmbulanceDriver";

export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    const user = await AmbulanceDriver.findOne({ email });

    if (!user || user.password !== password) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login successful" }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
