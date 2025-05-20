import styles from "./stack.module.css";
import List from "@/components/stack/list";

export default function Stack() {

    const SIZE: number = 50;

    return (
        <div className={styles.stack}>
            <h1 className={styles.title}>skills</h1>

            <h2 className={styles.subtitle}>langages</h2>
            <List type={"languages"} size={SIZE} />


            <h2 className={styles.subtitle}>Library + Framework</h2>
            <List type={"libs"} size={SIZE} />


            <h2 className={styles.subtitle}>Autres</h2>
            <List type={"others"} size={SIZE} />
        </div>
    );
}