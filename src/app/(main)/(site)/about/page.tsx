import { CardBody, CardContainer, CardItem } from "@/components/global/3d-card";
import Lamp from "@/components/global/lamp";
import { Separator } from "@/components/ui/separator";
import { aboutQns, team } from "@/lib/constants";
import { Github, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function AboutPage({}: Props) {
  return (
    <main className="mt-[200px]">
      <section className="h-fit w-full bg-background rounded-md !overflow-visible relative flex flex-col items-center antialiased">
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-secondary-foreground to-border font-sans font-bold">
              About Inno𝒱exa
            </h1>
          </div>
        </div>
      </section>
      <section className="mt-[350px]">
        {aboutQns.map(({ qn, desc, id, main }) => (
          <div
            key={id}
            className="h-fit mt-[-575px] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
          >
            <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
              <h1 className="text-2xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-secondary-foreground to-secondary-foreground/85">
                {qn}
              </h1>
              <p className="max-w-6xl text-base md:text-xl mt-8 text-secondary-foreground/85">
                <span className="font-bold">{main}</span>
                <br /> <br />
                {desc}
              </p>
            </div>
          </div>
        ))}
      </section>
      <section id="team" className="mt-[-250px]">
        <Lamp
          title={
            <>
              Introducing
              <br /> Who are we?
            </>
          }
        />
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
          {team.map(({ name, bio, img, insta, role, iId, gId, github }, i) => (
            <CardContainer key={i} className="inter-var">
              <CardBody className="relative group/card hover:shadow-2xl hover:shadow-primary/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border border-primary">
                <CardItem
                  translateZ="45"
                  className="flex items-center justify-center mx-auto"
                >
                  <Image
                    src={img}
                    className="object-cover rounded-full"
                    height={120}
                    width={120}
                    alt={name}
                  />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-secondary-foreground flex items-center justify-center mx-auto mt-2"
                >
                  {name}
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="flex items-center justify-center mx-auto text-secondary-foreground/90 font-semibold text-lg space-x-1"
                >
                  {role.map((r, i) => (
                    <span key={i}>{r}</span>
                  ))}
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="flex flex-col items-center justify-center text-secondary-foreground/80 font-semibold text-sm mt-3"
                >
                  {bio.map((b, i) => (
                    <span className="mb-4" key={i}>
                      • {b}
                    </span>
                  ))}
                </CardItem>
                <Link href={insta}>
                  <CardItem
                    translateZ="60"
                    className="flex items-center justify-center mx-auto text-primary font-semibold text-lg space-x-2"
                  >
                    <Instagram />
                    <span>{iId}</span>
                  </CardItem>
                </Link>
                {github && gId ? (
                  <Link href={github}>
                    <CardItem
                      translateZ="60"
                      className="flex items-center justify-center mx-auto text-primary font-semibold text-lg space-x-2"
                    >
                      <Github />
                      <span>{gId}</span>
                    </CardItem>
                  </Link>
                ) : null}
              </CardBody>
            </CardContainer>
          ))}
        </div>
        <div className="max-w-7xl relative mx-auto px-4 w-full left-0 top-0">
          <p className="max-w-7xl text-base md:text-xl mt-8 text-secondary-foreground/80 font-semibold">
            We’re a small team of students from{" "}
            <span className="font-extrabold underline underline-offset-2">
              Auxilium Convent School, Siliguri — Class 9A
            </span>
            . Inno𝒱exa started as a classroom idea and last-bench conversations:
            a simple want to reduce repetitive work and make tools that feel
            joyful to use. From those beginnings came{" "}
            <span className="font-extrabold underline underline-offset-2">
              MarX
            </span>
            , our flagship Macropad — a device that combines studio-grade
            switches, hot-swap hardware, and cloud-backed profiles so creators
            can compress repetitive tasks into a single satisfying press.
            <br /> <br />
            Our ambition goes beyond building one product. We want Inno𝒱exa to
            be a proudly Indian product studio — designing and manufacturing
            thoughtfully engineered hardware and elegant software in India, for
            India and the world. That means learning real production skills,
            partnering with local suppliers, cultivating a community that shares
            layouts and ideas, and creating opportunities for fellow students
            and makers along the way. We believe students can ship meaningful
            products; we believe local manufacturing plus modern software can
            produce global-quality experiences; and we believe the best tools
            are those that return time and focus to the people who use them.
            MarX is our first step. We’ll keep building, iterating, and putting
            better tools into people’s hands.
          </p>
        </div>
      </section>
      <Separator className="mt-10 max-w-7xl mx-auto mb-[85px]" />
      <section className="h-fit w-full bg-background rounded-md !overflow-visible relative flex flex-col items-center antialiased">
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-secondary-foreground to-border font-sans font-bold">
              Work with Us
            </h1>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="max-w-7xl relative mx-auto px-4 w-full left-0 top-0">
          <p className="max-w-7xl text-base md:text-xl mt-8 text-secondary-foreground/80 font-semibold">
            Inno𝒱exa is open to all — whether you’re a student, maker, designer,
            or just curious about what we’re building. If you want to
            collaborate, contribute, or simply say hello, reach out to us! We’re
            always excited to connect with fellow innovators and dreamers.
            <br /> <br />
            We welcome partnerships, feedback, and fresh ideas from anyone
            passionate about technology, creativity, or education. If you have a
            project in mind, want to join our team, or are interested in
            supporting our mission, don’t hesitate to get in touch.
            <br /> <br />
            You can contact us via email, follow our journey on social media,
            and DM us on Instagram. Together, we can build tools and experiences
            that empower people and make a real difference. Let’s shape the
            future — one idea at a time.
          </p>
          <div className="flex items-center justify-center gap-2 mx-auto mt-5 mb-8">
            <Link href="https://www.instagram.com/innovexa.tech_official/">
              <div className="flex items-center justify-center text-primary font-bold text-xl space-x-2">
                <Instagram />
                <span>@innovexa.tech_official</span>
              </div>
            </Link>
            <span className="text-primary font-bold text-xl">|</span>
            <Link href="mailto:cunningsap002+innovexasupport@gmail.com">
              <div className="flex items-center justify-center text-primary font-bold text-xl space-x-2">
                <Mail />
                <span>Inno𝒱exa Support</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
