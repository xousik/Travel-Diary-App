import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const getCurrentUser = async () => {
  const session = await getServerSession(authOptions);
  const currentUser = await prisma.user.findFirst({
    where: {
      email: session!.user?.email,
    },
  });
  return currentUser;
};

// Create new diary

export async function POST(req: NextRequest) {
  const data = await req.json();

  const currentUser = await getCurrentUser();

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

// Get all current user diaries

export async function GET(req: NextRequest) {
  const currentUser = await getCurrentUser();

  try {
    const allUserDiaries = await prisma.diary.findMany({
      where: {
        userId: currentUser!.id,
      },
    });
    return NextResponse.json(allUserDiaries);
  } catch (error) {
    console.error(error);
  }
}
