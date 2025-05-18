import styles from "./projects.module.css"

interface Props {
    title: string;
    description: string;
    year: number;
}

export default function ProjectCard({ title, description, year }: Props) {

    return (
        <div className={styles.projectCard}>

        </div>
    )
}