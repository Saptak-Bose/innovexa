import ContainerScroll from "@/components/global/container-scroll-animation";
import { Button } from "@/components/ui/button";

type Props = object;

export default function LandingPage({}: Props) {
  return (
    <main>
      <section className="h-screen w-full bg-background rounded-md !overflow-visible relative flex flex-col items-center antialiased">
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#09090B_35%,#EFB100_100%)]" />
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center justify-center flex-col">
                <Button
                  size="lg"
                  className="relative inline-flex overflow-hidden rounded-full p-[3px] focus:ring-2 focus:ring-offset-2 focus:ring-ring focus:ring-offset-ring/[8%] h-20"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFF2CB_0%,#EFB100_50%,#FFF2CB_100%)]" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-background px-5 py-1 font-semibold text-secondary-foreground backdrop-blur-3xl text-2xl">
                    Get Started for ₹0
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-secondary-foreground to-border font-sans font-bold">
                  Press Less.
                  <br />
                  Do More.
                </h1>
              </div>
            }
          ></ContainerScroll>
        </div>
      </section>
    </main>
  );
}
