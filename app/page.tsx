"use client";
import { useRef } from "react";
import Copy from "@/app/components/Copy";
import ReactLenis from "lenis/react";

export default function Home() {
    const container = useRef(null);

    return (
        <ReactLenis root>
            <div className="home" ref={container}>
                <Copy>
                <h1>Kaelon</h1>
                </Copy>
            </div>
        </ReactLenis>
    );
}
