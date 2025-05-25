import styles from "./iconography.module.css"
import path from "path";
import {promises as fs} from "fs";


interface iconType {
    name: string;
    url: string;
}

async function getData(): Promise<Array<iconType>> {
    const filePath = path.join(process.cwd(), "public", "iconography.json");
    const file = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(file);
    return data || [];
}

export default async function Iconography() {

    const data: Array<iconType> = await getData();

    return (
        <div>
            <h2 className={styles.subtitle}>Iconographie</h2>

            <div className={styles.iconList}>
                {data.map((icon: iconType, index: number) => (
                    <div key={index} className={styles.iconItem}>
                        <p>{icon.name}: </p>
                        <a href={icon.url}> {icon.url} </a>
                    </div>
                ))}
            </div>
        </div>
    )
}