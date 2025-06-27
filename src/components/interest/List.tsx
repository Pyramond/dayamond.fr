"use client"
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./interest.module.css"

interface Props {
    items: Array<string>
    title: string,
    type: string,
    direction?: "right" | "left",
    SIZE: number,
}

export default function GamesList({ items, title, direction, type, SIZE }: Props) {

    const MotionImage = motion(Image);

    return <div>

        <h2 className={styles.subtitle}>{title}</h2>

            <Marquee
                pauseOnHover={true}
                speed={30}
                direction={direction ? direction : "right"}
                style={{ overflow: 'visible' }}
            >
                {items.map((item, index) => (
                    <MotionImage
                        src={`/images/${type}/${item}.jpg`}
                        width={SIZE}
                        height={1}
                        style={{ width: `${SIZE}px`, height: "auto" }}
                        alt={item}
                        key={index}
                        className={styles.item}
                        whileHover={{
                            scale: 1.03,
                            zIndex: 10,
                            transition: { duration: 0.3 }
                        }}
                    />
                ))}
            </Marquee>

    </div>
}