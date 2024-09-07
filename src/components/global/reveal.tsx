"use client"
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type revealProps = {
  children: JSX.Element,
}

export default function Reveal(props: revealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    } 
  }, [isInView])

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, translateY: 10 },
        visible: { 
          opacity: 1, 
          translateY: 0
        }
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: .4, delay: .2}}
    >
      {props.children}
    </motion.div>
  );
}