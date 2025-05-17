import styles from "./presentation.module.css";

export default async function Presentation() {

    const res = await fetch("http://localhost:3000/presentation.json", {
        cache: "no-store",
    });
    const data = await res.json();

    return (
        <div className={styles.presentation}>

            <h1 className={styles.title}>Presentation</h1>
            <p className={styles.content}>
                {data.presentation}
            </p>

        </div>
    )
}