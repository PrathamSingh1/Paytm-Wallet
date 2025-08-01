import { NextResponse } from "next/server"
import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();

export const GET = async () => {
  await client.user.upsert({
    where: { email: "asd" },  // If you want to upsert on email, adjust as needed
    update: {},               // No fields to update
    create: {
      email: "asd",
      name: "adsads",
      number: "1234567890",
      password: "yourHashedPassword"
    }
  });

  return NextResponse.json({ message: "user inserted or already existed" });
}
