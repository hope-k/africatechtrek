

import { NextResponse } from 'next/server'
import connectDb from '../../../../db/dbConfig'
import Newsletter from '../../../../models/Newsletter';
import CustomError from '../../../../utils/CustomError';
import Joi from 'joi';
import withErrorHandler from '../../../../utils/withErrorHandler';




export async function POST(req) {
  try {
    await connectDb();
    const body = await req.json();
    const { email } = body
    if (!email) {
      throw new CustomError('Email is required');
    }
    const schema = Joi.object({
      email: Joi.string().email().required(),
    });
    const { error } = schema.validate({ email });
    if (error) {
      throw new CustomError(error.message, 400);
    }

    const newsletterEmailExist = await Newsletter.findOne({ email });
    if (newsletterEmailExist) {
      return NextResponse.json({
        message: 'You have successfully subscribed to our newsletter---',
      });
    } else {
      Newsletter.create({ email });
      return NextResponse.json({
        message: 'You have successfully subscribed to our newsletter',
      },
        {
          status: 201,
        }
      );
    }




  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: error.statusCode });
  }

}


