import connect from "@/utils/Connect";
import Waitlist from "@/models/Waitlist";
import { NextResponse } from "next/server";
import sendMail from "@/utils/sendEmail";

export async function POST(req) {

  try {

    await connect();

    const body =
      await req.json();

    const { email } =
      body;

    /* Validate */

    if (
      !email ||
      !email.includes("@")
    ) {

      return NextResponse.json(
        { message: "Invalid email" },
        { status: 400 }
      );

    }

    /* Prevent duplicate */

    const exists =
      await Waitlist.findOne({
        email,
      });

    if (exists) {

      return NextResponse.json({
        message:
          "Already registered",
      });

    }

    /* Save to Mongo */

    await Waitlist.create({

      email,

    });

    /* Send email using your existing styled system */

    await sendMail({

      senderName:
        "Waitlist User",

      senderEmail:
        email,

      senderOrg:
        "Carvion Waitlist",

      senderMsg:
        "User joined the Carvion early access waitlist.",

    });

    return NextResponse.json({

      message:
        "Waitlist registration successful",

    });

  }

  catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        message:
          "Server error",
      },
      { status: 500 }
    );

  }

}