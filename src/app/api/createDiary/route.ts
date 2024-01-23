import { prisma } from "@/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  console.log(`User data recived by api: ${(data.title, data.description)}`);

  // TODO: Save new diary into database

  return NextResponse.json({
    msg:
      "Successfuly created new Diary: " + data.title + " " + data.description,
    status: 200,
  });
}
