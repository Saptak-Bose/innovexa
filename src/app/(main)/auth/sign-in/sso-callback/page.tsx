import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

type Props = object;

export default function SSOPage({}: Props) {
  return <AuthenticateWithRedirectCallback />;
}
