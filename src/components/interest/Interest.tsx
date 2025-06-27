import styles from "./interest.module.css"
import path from "path";
import {promises as fs} from "fs";
import List from "./List";

export default async function Interest() {

    const filePath = path.join(process.cwd(), "public", "games.json");
    const file = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(file);
    const games = data["games"] || [];


    return (
        <div className={styles.interest}>
            <h1 className={styles.title}>centres d'interêts</h1>

            <List items={games} title={"Jeux"} type={"games"} />
        </div>
    )
}