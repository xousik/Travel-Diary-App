import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/authOptions";
import { prisma } from "@/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/src/lib/cloudinary";

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
  const imagesId = [];

  const currentUser = await getCurrentUser();

  try {
    // Upload the image
    for (let i = 0; i < data.selectedImages.length; i++) {
      const result = await cloudinary.uploader.upload(data.selectedImages[i], {
        folder: `TravelDiaryApp/${currentUser!.name}  ${currentUser!.id}/${
          data.title
        }`,
      });
      imagesId.push(result.public_id);
    }
    // return result.public_id;
    await prisma.diary.create({
      data: {
        userId: currentUser!.id,
        title: data.title,
        description: data.description,
        date: data.date,
        icon: data.choosenIcon,
        imagesId,
      },
    });
  } catch (error) {
    console.error(error);
  }

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
