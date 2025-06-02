'use client'

import styles from "./stack.module.css"
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
    type: string;
    size: number;
    items: Array<string>;
}

export default function List({ type, size, items }: Props) {

    const MotionImage = motion(Image);

    return (
        <div className={styles.skillList}>
            {items.map((item, index) => (
                <MotionImage
                    src={`/images/${type}/${item}.svg`}
                    width={size}
                    height={size}
                    alt={item}
                    key={index}
                    whileHover={{
                        scale: 1.10,
                        rotate: -3,
                        zIndex: 1,
                        transition: { type: "spring", stiffness: 300 }
                    }}
                />
            ))}
        </div>
    );
}
