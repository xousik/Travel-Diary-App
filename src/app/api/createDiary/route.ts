import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { prisma } from "@/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const session = await getServerSession(authOptions);
  const currentUser = await prisma.user.findFirst({
    where: {
      email: session!.user?.email,
    },
  });

  await prisma.diary.create({
    data: {
      userId: currentUser!.id,
      title: data.title,
      description: data.description,
    },
  });
  return NextResponse.json({
    msg: `Successfuly created new Diary: ${data.title}`,
    status: 200,
  });
}
