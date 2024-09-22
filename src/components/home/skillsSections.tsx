import { Card } from "iconsax-react";
import RevealText from "../global/revealText";
import { CardSpotlight } from "../ui/SpotlightCard";
import { CardHeader, CardTitle } from "@/ui/card";

export default function SkillsSections() {
  return (
    <section className="container mx-auto">
      <h2 className="text-4xl md:text-5xl exp text-center font-semibold">
        <RevealText text="Skills" />
      </h2>
      <p className="text-muted-foreground text-center">
        <RevealText text="Skills I am blessed with." durationEach={.03} />
      </p>

      <div className="grid grid-cols-3 container gap-4 mt-16">
        
      </div>
    </section>
  );
}