import { Project } from "@/lib/data";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/ui/card";
import { useScroll, motion, useTransform } from "framer-motion";
import { Icon } from "iconsax-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface StickyProjectCardsProps extends Project {
  index: number,
  progress: any,
  range: number[],
  targetScale: number,
}

export default function StickyProjectCards(props: StickyProjectCardsProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"]
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(props.progress, props.range, [1, props.targetScale])
  return (
    <div ref={container} className="card-container flex flex-col items-center justify-center h-screen sticky" style={{ top: `calc(-10% + ${25 * props.index}px)` }}>
      <motion.div style={{ scale }} className="border-border rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col-reverse md:flex-row  justify-between py-6 px-6 md:pr-6 relative top-5 md:-top-3">
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription className="max-w-xl">{props.description}</CardDescription>

          {props.listItems?.length != 0 && (
            <ul className="pt-6">
              {props.listItems?.map((item, index) => (
                <ListItem key={index} title={item.title} icon={item.icon} value={item.value} />
              ))}
            </ul>
          )}
        </CardHeader>
        <CardContent className={cn("relative rounded-xl  bg-gradient-to-br overflow-hidden h-full w-full md:w-1/2", props.className)}>
          <motion.img style={{ scale: imageScale }} src={props.imgSrc} className="rounded-lg [filter:drop-shadow(0_2px_10px_#1112)] h-full object-cover" alt={props.title} width={600} height={400} />
        </CardContent>
      </motion.div>
    </div>
  );
}

export function ListItem(props: { icon: Icon, title: string, value: string }) {
  return (
    <li className="flex gap-1 items-center mb-1">
      {<props.icon className="size-[18px]" color="hsl(47.9 95.8% 53.1%)" variant="TwoTone" />}
      <div></div>
      <span className="text-muted-foreground">{props.title}</span>
      <span>{props.value}</span>
    </li>
  );
}