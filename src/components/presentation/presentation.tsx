'use client'
import { useEffect, useState } from "react";
import styles from "./presentation.module.css";

export default function Presentation() {
    const [data, setData] = useState<{presentation?: string} | null>(null);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_URL}/presentation.json`, { cache: "no-store" })
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return (
        <div className={styles.presentation}>
            <h1 className={styles.title}>Presentation</h1>
            <p className={styles.content}>{data ? data.presentation : "chargement..."}</p>
        </div>
    );
}