import {
  useScroll,
  useSpring,
  useTransform,
  motion,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function SmoothScroll({ children }: { children: JSX.Element }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current != null) {
        setContentHeight(contentRef.current.scrollHeight);
      }
      setWindowHeight(window.innerHeight);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [contentRef]);

  // interpret normal scroll behaviour
  let { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });
  const y = useTransform(smoothProgress, (value) => {
    return value * -(contentHeight - windowHeight);
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (latest === 0) {
      setIsLoading(false);
    }
  });

  return (
    <>
      <div style={{ height: contentHeight }} />
      {/* Scroll Progress Bar */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 h-2 w-60 bg-accent rounded-xl overflow-hidden transition-opacity duration-200 ease-in-out " >
            <motion.div 
                className="h-full bg-white origin-left" 
                style={{ scaleX: smoothProgress }}
              ></motion.div>
        </div>
      <motion.div
        className="fixed top-0 w-screen"
        ref={contentRef}
        style={{ y: isLoading ? 0: y, opacity: isLoading ? 0 : 1 }}
      >
        {children}
      </motion.div>
    </>
  );
}
