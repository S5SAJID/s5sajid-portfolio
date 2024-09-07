import Reveal from "../global/reveal";
import RevealText from "../global/revealText";

export default function HeroSection() {
    return (
        <div id="home" className="w-full h-screen overflow-hidden flex-col container mx-auto flex  text-center items-center justify-center">
        <>
          <div className="mb-10 mt-10">
            <h1 className="text-4xl exp font-bold md:text-7xl">
              <RevealText text="I am Sajid"/><span className="text-primary">.</span>
            </h1>
            <p className="max-w-lg text-muted-foreground">
              <RevealText text="Full Stack Web Developer" durationEach={.03}/>
            </p>
          </div>
          <Reveal>
            <img
              src="/butterfly.jpg"
              alt="My Picture"
              className="h-[60vh] object-cover rounded-[4rem] md:rounded-[10rem]"
            />
          </Reveal>
        </>
      </div>
    );
}