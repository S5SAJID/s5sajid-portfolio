"use client";
import Navbar from "@/components/global/navbar";
import AboutSection from "@/components/home/aboutSection";
import HeroSection from "@/components/home/heroSection";
import ProjectsSections from "@/components/home/projectsSections";
import MouseCursorEffect from "@/components/ui/MouseCursorEffect";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import { CardDescription, Card, CardHeader, CardTitle, CardContent } from "@/ui/card";
import { useScroll, useSpring } from "framer-motion";
import Lenis from 'lenis'
import { useEffect } from "react";
import 'lenis/dist/lenis.css'

export default function Page() {
  const { scrollYProgress } = useScroll()
  const scrollProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Smooth Scrolling
    const lenis = new Lenis({
      lerp: 0.1
    })
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className="w-full  min-h-screen">

      {/* Main Sections */}
      <HeroSection />
      <AboutSection />
      <ProjectsSections />

      {/* Scroll Progress Bar */}
      <ScrollProgressBar scrollProgress={scrollProgress} />
      <MouseCursorEffect />

    </main>
  );
}