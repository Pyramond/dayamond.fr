import styles from "./about.module.css"
import Contact from "./contact/contact"
import Iconography from "@/components/about/iconography/iconography";

export default function About() {
    return (
        <div className={styles.about}>
            <h1 className={styles.title}>A propos</h1>
            <Contact />

            <div className={styles.site}>
                <h2 className={styles.subtitle}>Site</h2>
                <Iconography />
            </div>
        </div>
    )
}