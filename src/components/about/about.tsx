import styles from "./about.module.css"
import Contact from "./contact/contact"

export default function About() {
    return (
        <div className={styles.about}>
            <h1 className={styles.title}>A propos</h1>
            <Contact />
        </div>
    )
}