import { prisma } from "@/src/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log(req);
  const data = await req.json();
  console.log(data);

  const newUser = await prisma.user.create({
    data: {
      email: data.email,
      name: data.name,
    },
  });

  console.log(newUser);

  return NextResponse.json(data);
}
