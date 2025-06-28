"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./grid.module.css";

interface Props {
    list: Array<string>
    type: string
}

export default function GridDisplay({ list, type }: Props) {

    const SIZE = 400;
    const MotionImage = motion(Image);


    return (
        <div className={styles.games}>
            <h1 className={styles.title}>Mes jeux favoris</h1>
            <div className={styles.listGames}>
                {list.map((item, index) => (
                    <MotionImage
                        src={`/images/${type}/${item}.jpg`}
                        width={SIZE}
                        height={SIZE}
                        alt={item}
                        key={index}
                        className={styles.gameItem}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.3 }
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
