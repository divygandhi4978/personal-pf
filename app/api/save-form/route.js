import connect from "@/utils/Connect";
import Form from "@/models/Form";
import { NextResponse } from "next/server";
import email from "@/utils/sendEmail";

export async function POST(req) {
  await connect();
  const body = await req.json();
  email(body.email);
  await Form.insertOne(body);

  return NextResponse.json({ message: "Form submitted successfully" });
}
