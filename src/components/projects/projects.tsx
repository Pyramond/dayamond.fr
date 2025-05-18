import styles from "./projects.module.css"
import ProjectCard from "@/components/projects/projectCard";

export default function Projects() {

    return (
        <div className={styles.projects}>
            <h1 className={styles.title}>mes projets</h1>

            <div className={styles.projectsList}>

            </div>
        </div>
    )
}