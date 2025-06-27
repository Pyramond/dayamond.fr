"use client"
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./interest.module.css"

interface Props {
    items: Array<string>
    title: string,
    type: string,
    direction?: "right" | "left"
}

export default function GamesList({ items, title, direction, type }: Props) {

    const SIZE = 300;
    const MotionImage = motion(Image);

    return <div>

        <h2 className={styles.subtitle}>{title}</h2>


        <Marquee pauseOnHover={true} speed={50} style={{ marginTop: "-3em" }} direction={direction ? direction : "right"}>
            {items.map((item, index) => (
                <MotionImage
                    src={`/images/${type}/${item}.jpg`}
                    width={SIZE}
                    height={SIZE}
                    alt={item}
                    key={index}
                    className={styles.item}
                    whileHover={{
                        scale: 1.03,
                        transition: { duration: 0.3 }
                    }}
                />
            ))}
        </Marquee>
    </div>
}