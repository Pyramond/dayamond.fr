import styles from "./presentation.module.css";

interface Presentation {
    presentation: string;
}

async function getPresentation(): Promise<Presentation> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/presentation.json`, { cache: "no-store" });
    const data = await res.json();
    return data || {};
}

export default async function Presentation() {

    const data: Presentation = await getPresentation();

    return (
        <div className={styles.presentation}>
            <h1 className={styles.title}>Presentation</h1>
            <p className={styles.content}>{data ? data.presentation : "chargement..."}</p>
        </div>
    );
}