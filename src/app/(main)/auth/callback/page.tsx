import { createUser, getUser } from "@/actions/user";
import { redirect } from "next/navigation";

type Props = object;

export default async function AuthCallbackPage({}: Props) {
  const presentUser = await getUser();
  let redirectUserId;

  if (presentUser.user) {
    redirectUserId = presentUser.user.id;
  } else {
    await createUser();
    const newUser = await getUser();
    redirectUserId = newUser.user!.id;
  }

  return redirect(`/${redirectUserId}`);
}
