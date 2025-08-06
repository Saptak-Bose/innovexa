import { onAuthenticateUser } from "@/actions/user";
import { redirect } from "next/navigation";

type Props = object;

export default async function UserIdPage({}: Props) {
  const auth = await onAuthenticateUser();

  return redirect(`/${auth.user?.id}/profile`);
}
