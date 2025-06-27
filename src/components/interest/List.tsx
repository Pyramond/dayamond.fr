"use client"

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./interest.module.css"
import {useRouter} from "next/navigation";

interface Props {
    items: Array<string>
    title: string,
    type: string,
    direction?: "right" | "left",
    height: number,
    width: number,
    url?: string
}

export default function GamesList({ items, title, direction, type, width, height, url }: Props) {

    const MotionImage = motion(Image);
    const router = useRouter()

    const handleClick = (): void => {
        if(url) router.push(url)
    }

    return <div>

        <h2 className={[styles.subtitle, url ? styles.hovTitle : ""].join(" ")} onClick={handleClick}>{title}</h2>

        <Marquee
            pauseOnHover={true}
            speed={30}
            direction={direction ? direction : "right"}
            style={{ width: '100%', height: `${height}px` }}
        >
            {items.map((item, index) => (
                <MotionImage
                    src={`/images/${type}/${item}.jpg`}
                    width={width}
                    height={height}
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