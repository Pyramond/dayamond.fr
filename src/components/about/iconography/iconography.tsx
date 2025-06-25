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

            <table className={styles.iconList}>
                <thead>
                <tr>
                    <th className={styles.item}>Usage</th>
                    <th className={styles.item}>Source</th>
                </tr>
                </thead>
                <tbody>
                    {data.map((icon: iconType, index: number) => (
                        <tr key={index}>
                            <td className={styles.item}>{icon.name}</td>
                            <td className={styles.item}>{icon.url}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}