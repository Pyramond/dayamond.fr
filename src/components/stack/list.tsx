'use client'

import styles from "./stack.module.css"
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
    type: string;
    size: number;
}

export default function List({ type, size }: Props) {

    const [items, setItems] = useState<Array<string>>([]);
    const MotionImage = motion(Image);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_URL}/skills.json`, { cache: "no-store" })
            .then(res => res.json())
            .then(data => setItems(data[type]));
    }, []);

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
