"use client";
import { useRef } from "react";


import {SplitText} from "gsap/SplitText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ReactLenis from "lenis/react";


gsap.registerPlugin(useGSAP);

export default function Home() {
    const container = useRef(null);

    useGSAP(
        () => {
            const heroText = new SplitText(".home h1", { types: "chars" });
            gsap.set(heroText.chars, { y: 400 });

            gsap.to(heroText.chars, {
                y: 0,
                duration: 1,
                stagger: 0.075,
                ease: "power4.out",
                delay: 1,
            });
        },
        { scope: container }
    );

    return (
        <ReactLenis root>
            <div className="home" ref={container}>
                <h1>Kaelon</h1>
            </div>
        </ReactLenis>
    );
}
