import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";

export async function POST(req: NextRequest) {
  const data = await req.json();

  try {
    await prisma.diary.delete({
      where: {
        id: data.id,
      },
    });
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({
    message: `Successfuly deleted Diary: ${data.id}`,
    status: 200,
  });
}
