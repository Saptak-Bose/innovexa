import { getUser } from "@/actions/user";
import { redirect } from "next/navigation";

type Props = object;

export default async function UserIdPage({}: Props) {
  const user = await getUser();

  return redirect(`/${user.user?.id}/profile`);
}
