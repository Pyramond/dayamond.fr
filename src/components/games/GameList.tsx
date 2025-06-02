// app/games/GamesList.jsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./games.module.css";

interface Props {
    games: Array<string>
}

export default function GamesList({ games }: Props) {

    const SIZE = 400;
    const MotionImage = motion(Image);


    return (
        <div className={styles.games}>
            <h1 className={styles.title}>Mes jeux favoris</h1>
            <div className={styles.listGames}>
                {games.map((game, index) => (
                    <MotionImage
                        src={`/images/games/${game}.jpg`}
                        width={SIZE}
                        height={SIZE}
                        alt={game}
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
