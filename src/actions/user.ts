"use server";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const createUser = async () => {
  try {
    const authUser = await currentUser();

    if (!authUser) return redirect("/auth/sign-in");

    await db.user.create({
      data: {
        clerkId: authUser.id,
        email: authUser.emailAddresses[0].emailAddress,
        name: authUser.fullName || "",
        image: authUser.imageUrl || "",
      },
    });

    return { status: 201 };
  } catch (error) {
    console.error(error);

    return {
      status: 500,
      error,
    };
  }
};

export const getUser = async () => {
  try {
    const authUser = await currentUser();

    if (!authUser)
      return {
        status: 404,
        user: null,
      };

    const user = await db.user.findUnique({
      where: {
        clerkId: authUser.id,
      },
      select: {
        email: true,
        name: true,
        image: true,
        plan: true,
        role: true,
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return {
      status: 200,
      user,
    };
  } catch (error) {
    console.error(error);

    return {
      status: 500,
      error,
    };
  }
};
