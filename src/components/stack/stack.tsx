import styles from "./stack.module.css";
import List from "@/components/stack/list";

async function getData(): Promise<Record<string, string[]>> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/skills.json`, { cache: "no-store" });
    const data = await res.json();
    return data || [];
}

export default async function Stack() {

    const SIZE: number = 50;
    const data: Record<string, string[]> = await getData();


    return (
        <div className={styles.stack}>
            <h1 className={styles.title}>skills</h1>

            <h2 className={styles.subtitle}>langages</h2>
            <List type={"languages"} size={SIZE} items={data["languages"]} />


            <h2 className={styles.subtitle}>Library + Framework</h2>
            <List type={"libs"} size={SIZE} items={data["libs"]} />


            <h2 className={styles.subtitle}>Autres</h2>
            <List type={"others"} size={SIZE} items={data["others"]} />
        </div>
    );
}