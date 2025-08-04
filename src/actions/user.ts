"use server";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export const onAuthenticateUser = async () => {
  try {
    const user = await currentUser();

    if (!user) return { status: 403 };

    const userExists = await db.user.findUnique({
      where: {
        clerkId: user.id,
      },
    });

    if (userExists)
      return {
        status: 200,
        user: userExists,
      };

    const newUser = await db.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        name: user.fullName!,
        image: user.imageUrl,
      },
    });

    if (newUser)
      return {
        status: 201,
        user: newUser,
      };

    return { status: 400 };
  } catch (error) {
    return {
      status: 500,
      error,
    };
  }
};
