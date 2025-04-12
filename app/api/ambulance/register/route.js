import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import AmbulanceDriver from "@/app/models/AmbulanceDriver";

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();

    const existingUser = await AmbulanceDriver.findOne({ email: data.email });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const newUser = new AmbulanceDriver(data);
    await newUser.save();

    return NextResponse.json({ message: "Registered successfully" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
