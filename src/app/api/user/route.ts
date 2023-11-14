import { prisma } from "@/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(`User data recived by api: ${data.email}`);

  const doesUserExist = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
  });

  if (!doesUserExist) {
    const newUser = await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
      },
    });
    console.log(`New user just created: ${newUser}`);
    return NextResponse.json({ message: "New user created" }, { status: 200 });
  } else {
    return NextResponse.json(
      { message: "The user already exists" },
      { status: 409 }
    );
  }
}
