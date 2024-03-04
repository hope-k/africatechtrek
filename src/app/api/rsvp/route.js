import Rsvp from "../../../../models/Rsvp";
import CustomError from "../../../../utils/CustomError";
import connect from "../../../../db/dbConfig";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connect();
    const body = await req.json();
    const { name, email, phone } = body;

    if (!name || !email || !phone) {
      throw new CustomError("All fields are required");
    }

    const rsvpExist = await Rsvp.findOne({ email });

    if (rsvpExist) {
      return NextResponse.json(
        { message: "You already sign up for the event! " },
        { status: 201 }
      );
    }

    const newRsvp = new Rsvp({
      name,
      email,
      phone,
    });

    console.log(newRsvp, "newRsvp------>");
    await newRsvp.save();

    return NextResponse.json(
      { message:   "You have successfully signed up for the event!"},
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
