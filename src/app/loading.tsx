"use client"

import { motion } from "framer-motion";
import style from "./loading.module.css"

export default function Loading() {
    return (
        <div className={style.frame}>
            <motion.div
                className={style.component}
                animate={{ scale: 1.5 }}
                initial={{ scale: 1 }}
                transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
            />
        </div>
    );
}