'use client'

import styles from "./presentation.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";

interface Props {
    presentation: string;
}

export function PresentationText({ presentation }: Props) {
    const presentationRef = useRef(null);

    useGSAP(() => {
        if (!presentationRef.current) return;

        gsap.registerPlugin(SplitText);

        const split = new SplitText(presentationRef.current, { type: "lines" });

        gsap.from(split.lines, {
            y: 20,
            autoAlpha: 0,
            stagger: 0.05,
            duration: 0.8,
        });

        return () => split.revert();

    }, [presentation]);

    return (
        <p className={styles.content} ref={presentationRef}>
            {presentation}
        </p>
    );
}
