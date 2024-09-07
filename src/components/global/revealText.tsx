import { useInView, useAnimation, Variant, motion } from "framer-motion";
import { useRef, useEffect } from "react";

type revealTextProps = {
  text: string,
  durationEach?: number
};

export default function RevealText({durationEach=.02, text}: revealTextProps) {
  const splittedText = splitStringsUsingRegex(text);

  const charVariants: Record<string, Variant> = {
    hidden: { opacity: 0, },
    reveal: { opacity: 1,  },
  };

  return (
    <motion.span
     initial="hidden"
     whileInView="reveal"
     transition={{staggerChildren: durationEach}}
    >
      {splittedText.map((char, i) => (
        <motion.span key={i} variants={charVariants} transition={{ duration: 0.5 }}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function splitStringsUsingRegex(inputString: string): string[] {
  const characters: string[] = [];
  const regex = /[\s\S]/g;
  let match;
  while ((match = regex.exec(inputString)) != null) {
    characters.push(match[0]);
  }
  return characters;
}
