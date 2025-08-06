import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

type Props = object;

export default function SSOPage({}: Props) {
  return (
    <div id="clerk-captcha">
      <AuthenticateWithRedirectCallback />;
    </div>
  );
}
