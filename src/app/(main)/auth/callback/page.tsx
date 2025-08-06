import { onAuthenticateUser } from "@/actions/user";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

type Props = object;

export default async function AuthCallbackPage({}: Props) {
  const user = (await onAuthenticateUser()).user;
  let newUser;
  const authUser = await currentUser();

  if (!user) {
    newUser = await db.user.create({
      data: {
        clerkId: authUser!.id,
        email: authUser!.emailAddresses[0].emailAddress,
        name: authUser!.fullName || "",
        image: authUser!.imageUrl || "",
      },
    });
  } else {
    newUser = user;
  }

  return redirect(`/${newUser.id}`);
}
