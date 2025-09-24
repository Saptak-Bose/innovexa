import { getUser } from "@/actions/user";
import { CardBody, CardContainer, CardItem } from "@/components/global/3d-card";
import HeroParallax from "@/components/global/connect-parallax";
import ContainerScroll from "@/components/global/container-scroll-animation";
import InfiniteMovingCards from "@/components/global/infinite-moving-cards";
import Lamp from "@/components/global/lamp";
import { Button } from "@/components/ui/button";
import { clients, plans, products } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import Link from "next/link";

type Props = object;

export default async function LandingPage({}: Props) {
  const user = await getUser();

  return (
    <main>
      <section className="h-screen w-full bg-background rounded-md !overflow-visible relative flex flex-col items-center antialiased">
        <div className="absolute h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#09090B_35%,#EFB100_100%)]" />
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center justify-center flex-col">
                <Link href={user.user ? `/${user.user.id}` : "/auth/sign-up"}>
                  <Button
                    size="lg"
                    className="relative inline-flex overflow-hidden rounded-full p-[3px] focus:ring-2 focus:ring-offset-2 focus:ring-ring focus:ring-offset-ring/[8%] h-20"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFF2CB_0%,#EFB100_50%,#FFF2CB_100%)]" />
                    <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-background px-5 py-1 font-semibold text-secondary-foreground backdrop-blur-3xl text-2xl">
                      Get Started for ₹0
                    </span>
                  </Button>
                </Link>
                <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-secondary-foreground to-border font-sans font-bold">
                  Introducing — MarX.
                  <br />
                  Craft instant macros.
                </h1>
              </div>
            }
          />
        </div>
      </section>
      <div className="absolute h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_90%,#09090B_35%,#EFB100_100%)] z-[-10]" />
      <InfiniteMovingCards
        className="md:mt-[18rem] mt-[-100px] min-w-full"
        items={clients}
        direction="right"
        speed="slow"
      />
      <section>
        <HeroParallax products={products} />
      </section>
      <section id="pricing" className="mt-[-500px] mb-20">
        <Lamp
          title={
            <>
              Plans That
              <br /> Fit You Best
            </>
          }
        />
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
          {plans.map(({ description, features, price, title, imp }, i) => (
            <CardContainer key={i} className="inter-var">
              <CardBody
                className={cn(
                  "relative group/card hover:shadow-2xl hover:shadow-primary/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border",
                  imp ? "border-primary" : "border-secondary-foreground/[0.2]"
                )}
              >
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-secondary-foreground"
                >
                  {title}
                  <h2 className="text-6xl">{price}</h2>
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="text-sm text-secondary-foreground/80 max-w-sm mt-2"
                >
                  {description}
                  <ul className="flex flex-col my-4 gap-2">
                    {features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckIcon />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardItem>
                <div className="flex items-center justify-between mt-8">
                  {user.user?.plan === title.toUpperCase() ? (
                    <CardItem
                      translateZ="20"
                      as="button"
                      className="px-4 py-2 rounded-xl bg-primary relative inline-flex overflow-hidden p-[3px] focus:ring-2 focus:ring-offset-2 focus:ring-ring focus:ring-offset-ring/[8%] h-11 cursor-not-allowed w-full"
                    >
                      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFF2CB_0%,#EFB100_50%,#FFF2CB_100%)]" />
                      <span className="inline-flex h-full w-full items-center justify-center rounded-xl bg-background px-4 py-1 font-bold text-secondary-foreground backdrop-blur-3xl text-xs">
                        ACTIVE
                      </span>
                    </CardItem>
                  ) : (
                    <>
                      <CardItem
                        translateZ="20"
                        as="button"
                        className="px-4 py-2 rounded-xl text-xs font-semibold text-primary cursor-pointer"
                      >
                        Try Now →
                      </CardItem>
                      <CardItem
                        translateZ="20"
                        as="button"
                        className="px-4 py-2 rounded-xl bg-primary relative inline-flex overflow-hidden p-[3px] focus:ring-2 focus:ring-offset-2 focus:ring-ring focus:ring-offset-ring/[8%] h-8 cursor-pointer"
                      >
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFF2CB_0%,#EFB100_50%,#FFF2CB_100%)]" />
                        <span className="inline-flex h-full w-full items-center justify-center rounded-xl bg-background px-4 py-1 font-bold text-secondary-foreground backdrop-blur-3xl text-xs">
                          Get Started →
                        </span>
                      </CardItem>
                    </>
                  )}
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </section>
    </main>
  );
}
