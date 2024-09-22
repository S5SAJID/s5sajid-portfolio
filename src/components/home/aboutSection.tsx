import RevealText from "../global/revealText";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";
import Reveal from "../global/reveal";
import { Global, I3DCubeScan, Message, Wallet } from "iconsax-react";

export default function AboutSection() {
    return (
        <section id='about' className="services container relative container-lg h-full py-60">
            <h2 className="text-4xl md:text-5xl exp text-center font-semibold">
                <RevealText text="About Me" />
            </h2>
            <p className="text-muted-foreground text-center">
                <RevealText text="Let me introduce myself." durationEach={.03} />
            </p>

            <Reveal>
                <div className="cards mt-16 grid md:grid-cols-4 gap-4 md:grid-rows-4">
                    <Card className="row-span-2 col-span-2 border border-foreground/10 bg-card/10 backdrop-blur-lg relative p-6">
                        <img src="/classic.jpg" alt="My picture" className="w-full h-full rounded-lg object-cover" />
                    </Card>
                    <Card className="border border-foreground/10 bg-card/10 col-span-2 backdrop-blur-lg relative rounded-lg">
                        <CardHeader>
                            <CardTitle>
                                Web and Apps Developer
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="px-6 py-0 pb-6">
                            <p>I am Sajid Ullah Shah also known as S5SAJID. I am a Web Devoloper and Designer. <br /><br /> I have spent most of the time in designing and developing websites from initial concept to final, polished deliverable.</p>
                            <ul className="mt-4">
                                <li className="list_item mt-2 flex gap-2">
                                    <span className="text-muted-foreground flex gap-2 items-center">
                                        <Global color="hsl(47.9 95.8% 53.1%)" className="size-5" variant="TwoTone"/>
                                        {" "}Country: {" "}
                                    </span>
                                    Pakistan
                                </li>
                                <li className="list_item mt-2 flex gap-2">
                                    <span className="text-muted-foreground flex gap-2 items-center">
                                        <I3DCubeScan color="hsl(47.9 95.8% 53.1%)" className="size-5" variant="TwoTone"/>
                                        {" "}Region: {" "}
                                    </span>
                                    Swat, KPK
                                </li>
                                <li className="list_item mt-2 flex gap-2">
                                    <span className="text-muted-foreground flex gap-2 items-center">
                                        <Wallet color="hsl(47.9 95.8% 53.1%)" className="size-5" variant="TwoTone"/>
                                        {" "}Freelance: {" "}
                                    </span>
                                    Available
                                </li>
                                <li className="list_item mt-2 flex gap-2">
                                    <span className="text-muted-foreground flex gap-2 items-center">
                                        <Message color="hsl(47.9 95.8% 53.1%)" className="size-5" variant="TwoTone"/>
                                        {" "}Email: {" "}
                                    </span>
                                    <a href="mailto:s5sajidyt@gmail.com" className="hover:underline hover:decoration-primary">s5sajidyt@gmail.com</a>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border border-foreground/10 bg-card/10 backdrop-blur-lg relative">
                        <CardHeader>
                            <CardTitle>Projects</CardTitle>
                            <CardContent>
                                <p className="text-8xl exp inline-block mt-4">
                                    70<span className="text-primary [text-shadow:0_0_10px_hsl(var(--primary))]">+</span>
                                </p>
                            </CardContent>
                        </CardHeader>
                    </Card>

                    <Card className="border border-foreground/10 bg-card/10 backdrop-blur-lg relative">
                        <CardHeader>
                            <CardTitle>Experience</CardTitle>
                            <CardContent>
                                <p className="text-8xl exp inline-block mt-4">
                                    3<span className="text-primary [text-shadow:0_0_10px_hsl(var(--primary))]">+</span>
                                </p>
                            </CardContent>
                        </CardHeader>
                    </Card>
                </div>
            </Reveal>
        </section>
    );
}