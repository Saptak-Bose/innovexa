"use client";

import GlobalCard from "@/components/global/global-card";
import Loader from "@/components/global/loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { OAuthStrategy } from "@clerk/types";
import Image from "next/image";
import Link from "next/link";
import OtpInput from "@/components/global/otp-input";

type Props = object;

export default function SignUpPage({}: Props) {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [verifying, setVerifying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    setLoading(true);
    e.preventDefault();

    if (!isLoaded && !signUp) return null;

    try {
      await signUp.create({
        emailAddress: email,
      });
      await signUp.prepareEmailAddressVerification();

      setVerifying(true);
      setLoading(false);
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  };

  const handleVerification = async (e: FormEvent) => {
    setLoading(true);
    e.preventDefault();

    if (!isLoaded && !signUp) return null;

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        setLoading(false);
        router.push("/auth/callback");
      } else {
        console.error("Verification failed:", signUpAttempt);
      }
    } catch (error) {
      console.error("Error during sign-up verification:", error);
    }
  };

  const signUpWith = (strategy: OAuthStrategy) => {
    return signUp!
      .authenticateWithRedirect({
        strategy,
        redirectUrl: "/auth/sign-up/sso-callback",
        redirectUrlComplete: "/auth/callback",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log("Error during sign-up:", error);
      });
  };

  return (
    <main className="flex items-center justify-center min-h-screen w-full">
      {verifying ? (
        <GlobalCard
          title="Verify Your Email to Secure Your Inno𝒱exa Account"
          description="We’ve emailed a one-time 6-digit code to the address you provided — enter it here to confirm your email and complete account creation; this step secures your Inno𝒱exa account so you can immediately save profiles, access preorder perks and keep your Marx builds safe. (Didn’t get it? Check spam.)"
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
          title="Get Started with Inno𝒱exa"
          description="Create your Inno𝒱exa account to unlock the full MarX experience — save and sync custom layouts to the cloud, preview and build MarX configurations, join early-access drops and firmware betas, and get member perks; it only takes a minute to sign up, verify your email, and start designing one-press workflows that speed up your work."
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
              onClick={() => signUpWith("oauth_google")}
              className="flex items-center justify-center mx-auto font-bold text-background w-[50%] my-1"
            >
              <Image
                src="/Google.svg"
                height={20}
                width={20}
                alt="Google Icon"
              />
              Sign Up with Google
            </Button>
            <Button
              onClick={() => signUpWith("oauth_apple")}
              className="flex items-center justify-center mx-auto font-bold text-background w-[50%] my-1"
            >
              <Image src="/Apple.svg" height={20} width={20} alt="Apple Icon" />
              Sign Up with Apple
            </Button>
          </div>
          <div className="flex items-center justify-center text-muted-foreground">
            <Separator />
            <h1 className="text-sm flex items-center justify-center">OR</h1>
            <Separator />
          </div>
          <span className="flex items-center justify-center text-muted-foreground text-sm">
            Already have an account at Inno𝒱exa?
            <Link
              className="ml-0.5 text-xs hover:underline text-secondary-foreground font-semibold"
              href="/auth/sign-in"
            >
              SIGN IN
            </Link>
          </span>
        </GlobalCard>
      )}
    </main>
  );
}
