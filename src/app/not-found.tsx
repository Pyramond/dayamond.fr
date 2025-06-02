'use client'

import styles from "./not-found.module.css"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {

    const MotionImage = motion(Image);

    return (
        <div className={styles.notFound}>
            <div className={styles.content}>
                <h1 className={styles.title}> 404 </h1>
                <div className={styles.container}>
                    <p className={styles.message}>Page non trouvée. Retourner a l'accueil</p>
                    <Link href="/">
                        <MotionImage
                            src={"/images/external.svg"}
                            alt={"external logo"}
                            height={40}
                            width={40}
                            className={styles.home}
                            whileHover={{ scale: 1.2 }}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}