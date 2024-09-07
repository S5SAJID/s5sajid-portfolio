import { projects } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/card";
import Image from "next/image";
import StickyProjectCards from "../ui/StickyProjectCards";
import RevealText from "../global/revealText";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import ScrollText from "../global/ScrollText";

export default function ProjectsSections() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <section id="projects" className="container relative mb-[20vh]">
      <div className="text-center translate-y-52">
        <h2 className="text-4xl md:text-5xl exp text-center font-semibold">
          <RevealText text="Projects" />
        </h2>
        <p className="text-muted-foreground text-center">
          <RevealText text="Some of the Projects I have created." durationEach={.03} />
        </p>
      </div>
      {
        projects.map((project, index) => {
          const targetScale = 1 - ((projects.length - 1) * .04)
          return (
            <StickyProjectCards key={index} {...project} index={index} progress={scrollYProgress} range={[index * 0.25, 1]} targetScale={targetScale} />
          );
        })
      }
    </section>
  );
}