import stripe from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const public_domain = process.env.NEXT_PUBLIC_DOMAIN;

    const { email } = await req.json();

    const isExistingCustomer = await stripe.customers.list({ email });

    let customer;

    if (isExistingCustomer.data.length) {
      customer = isExistingCustomer.data[0];
      const portal = await stripe.billingPortal.sessions.create({
        customer: customer.id,
        return_url: `${public_domain}/documents`,
      });
      return NextResponse.json({ status: true, url: portal.url });
    } else {
      return NextResponse.json({ status: false, message: "No customer found" });
    }
  } catch (error) {
    return NextResponse.json(
      `Something went wrong. Please try again - ${error}`,
      {
        status: 500,
      }
    );
  }
}
