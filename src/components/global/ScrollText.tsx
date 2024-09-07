import { MotionValue, useScroll, useTransform,motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { splitStringsUsingRegex } from "./revealText";

export default function ScrollText({text}: {text: string}) {
    const element = useRef(null);
    const {scrollYProgress} = useScroll({
        target: element,
        offset: ["start 0.9", "start 0.25"]
    })
    const chars = splitStringsUsingRegex(text)
    return (
      <p ref={element} className="container text-7xl pb-40 pt-72">
        {
            chars.map((char, index) => {
                const start = index / chars.length;
                const end = start + (1 / chars.length);
                
                return <ScrollCharacter range={[start, end]} progress={scrollYProgress} char={char} key={index}/>
            })
        }
      </p>
    );
}

type ScrollCharacterProps = {
    range: number[],
    progress: MotionValue<number>,
    char: string
}

const ScrollCharacter = (props: ScrollCharacterProps) => {
    const opacity = useTransform(props.progress, props.range, [0.1,1]);
    return <motion.span style={{opacity}}>{props.char}</motion.span>
}