"use client";

import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  EmailCodeFactor,
  OAuthStrategy,
  SignInFirstFactor,
} from "@clerk/types";
import GlobalCard from "@/components/global/global-card";
import { Label } from "@/components/ui/label";
import OtpInput from "@/components/global/otp-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Loader from "@/components/global/loader";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

type Props = object;

export const metadata: Metadata = {
  title: "Sign In — Inno𝒱exa",
  description:
    "Inno𝒱exa — Sign in to access saved MarX profiles, customize builds, and manage membership.",
  openGraph: {
    title: "Sign In • Inno𝒱exa",
    description:
      "Sign in to access saved MarX profiles, customize builds, and manage membership.",
  },
};

export default function SignInPage({}: Props) {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [verifying, setVerifying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    setLoading(true);
    e.preventDefault();

    if (!isLoaded && !signIn) return null;

    try {
      const { supportedFirstFactors } = await signIn.create({
        identifier: email,
      });

      const isEmailCodeFactor = (
        factor: SignInFirstFactor
      ): factor is EmailCodeFactor => factor.strategy === "email_code";
      const emailCodeFactor = supportedFirstFactors?.find(isEmailCodeFactor);

      if (emailCodeFactor) {
        const { emailAddressId } = emailCodeFactor;

        await signIn.prepareFirstFactor({
          strategy: "email_code",
          emailAddressId,
        });

        setVerifying(true);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  const handleVerification = async (e: FormEvent) => {
    setLoading(true);
    e.preventDefault();

    if (!isLoaded && !signIn) return null;

    try {
      const signInAttempt = await signIn.attemptFirstFactor({
        strategy: "email_code",
        code,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        setLoading(false);
        router.push("/auth/callback");
      } else {
        console.error("Verification failed:", signInAttempt);
      }
    } catch (error) {
      console.error("Error during sign-in verification:", error);
    }
  };

  const signInWith = (strategy: OAuthStrategy) => {
    return signIn!
      .authenticateWithRedirect({
        strategy,
        redirectUrl: "/auth/sign-in/sso-callback",
        redirectUrlComplete: "/auth/callback",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log("Error during sign-in:", error);
      });
  };

  return (
    <main className="flex items-center justify-center min-h-screen w-full">
      {verifying ? (
        <GlobalCard
          title="Enter Your Verification Code"
          description="For quick, secure access we’ve sent a one-time 6-digit sign-in code to your email — enter it now to authenticate without a password (the code expires in 10 minutes) — if you didn’t request this, cancel and contact support."
        >
          <form onSubmit={handleVerification}>
            <Label
              htmlFor="clerk-captcha"
              className="flex flex-col gap-1 text-secondary-foreground items-start mx-2"
            >
              <span className="font-semibold ml-0.5 mb-1">
                Enter the 6-digit code
              </span>
              <OtpInput otp={code} setOtp={setCode} />
            </Label>
            <Button
              className="flex items-center justify-center w-[98%] mt-2 mb-3 mx-auto font-bold text-background"
              type="submit"
            >
              <Loader loading={loading}>Verify →</Loader>
            </Button>
          </form>
        </GlobalCard>
      ) : (
        <GlobalCard
          title="Welcome Back to Inno𝒱exa"
          description="Welcome back — sign in to access your saved MarX profiles, continue custom builds, manage orders and memberships, and pick up where you left off; opt for a secure one-time email code for passwordless sign-in for faster access on trusted devices."
        >
          <form onSubmit={handleSubmit}>
            <Label
              htmlFor="email"
              className="flex flex-col gap-1 text-secondary-foreground items-start mx-2"
            >
              <span className="font-semibold ml-0.5 mb-1">Email Address</span>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                placeholder="Enter your email address..."
                className="bg-input border border-border text-foreground placeholder-muted-foreground rounded-md p-2 focus:outline-none focus-visible:ring focus-visible:ring-ring focus-visible:border-primary"
              />
            </Label>
            <div id="clerk-captcha" />
            <Button
              className="flex items-center justify-center w-[98%] mt-2 mb-3 mx-auto font-bold text-background"
              type="submit"
            >
              <Loader loading={loading}>Next →</Loader>
            </Button>
          </form>
          <div className="flex items-center justify-center text-muted-foreground">
            <Separator />
            <h1 className="text-sm flex items-center justify-center">OR</h1>
            <Separator />
          </div>
          <div className="flex flex-col items-center my-1" id="clerk-captcha">
            <Button
              onClick={() => signInWith("oauth_google")}
              className="flex items-center justify-center mx-auto font-bold text-background w-[50%] my-1"
            >
              <Image
                src="/Google.svg"
                height={20}
                width={20}
                alt="Google Icon"
              />
              Sign In with Google
            </Button>
            <Button
              onClick={() => signInWith("oauth_apple")}
              className="flex items-center justify-center mx-auto font-bold text-background w-[50%] my-1"
            >
              <Image src="/Apple.svg" height={20} width={20} alt="Apple Icon" />
              Sign In with Apple
            </Button>
          </div>
          <div className="flex items-center justify-center text-muted-foreground">
            <Separator />
            <h1 className="text-sm flex items-center justify-center">OR</h1>
            <Separator />
          </div>
          <span className="flex items-center justify-center text-muted-foreground text-sm">
            New to Inno𝒱exa?
            <Link
              className="ml-0.5 text-xs hover:underline text-secondary-foreground font-semibold"
              href="/auth/sign-up"
            >
              SIGN UP
            </Link>
          </span>
        </GlobalCard>
      )}
    </main>
  );
}
