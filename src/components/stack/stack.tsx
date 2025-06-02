import styles from "./stack.module.css";
import List from "@/components/stack/list";
import path from "path";
import {promises as fs} from "fs";

async function getData(): Promise<Record<string, string[]>> {
    const filePath = path.join(process.cwd(), "public", "skills.json");
    const file = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(file);
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