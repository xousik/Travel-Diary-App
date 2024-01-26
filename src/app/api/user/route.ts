import { prisma } from "@/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
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
    return NextResponse.json({ message: "New user created" }, { status: 200 });
  } else {
    return NextResponse.json(
      { message: "The user already exists" },
      { status: 409 }
    );
  }
}
