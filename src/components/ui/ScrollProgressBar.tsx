import { motion, MotionValue } from "framer-motion";

export default function ScrollProgressBar({scrollProgress}: {scrollProgress: MotionValue}) {
    return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 h-2 w-60 bg-accent rounded-xl overflow-hidden transition-opacity duration-200 ease-in-out " >
        <motion.div
          className="h-full bg-foreground origin-left"
          style={{ scaleX: scrollProgress }}
        ></motion.div>
      </div>
    );
}