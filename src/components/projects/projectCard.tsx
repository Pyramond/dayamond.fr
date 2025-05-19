import styles from "./projects.module.css"
import Image from "next/image"
import Project from "./project.interface"

export default function ProjectCard({ title, description, year, source }: Project) {

    function handleClick() {
        window.open(source?.url, '_blank')
    }

    return (
        <div className={styles.projectCard}>

            <div className={styles.cardHeader}>

                <div className={styles.headerTitle}>
                    <h2 className={styles.cardTitle}> {title} </h2>
                    <p className={`${styles.text} ${styles.year}`}> {year} </p>
                </div>

                {
                    source ?
                        <div className={styles.openProject} onClick={handleClick}>
                        <Image
                            src={source.title === "github" ? "/GitHub_dark.svg" : "/link.svg"}
                            height={40}
                            width={40}
                            alt={"GitHub"}
                            className={styles.projectLink}
                        />
                    </div>
                        :
                        null
                }

            </div>

            <p className={`${styles.text} ${styles.desc}`}> {description} </p>

        </div>
    )
}