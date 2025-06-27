import styles from "./interest.module.css"
import path from "path";
import {promises as fs} from "fs";
import List from "./List";

export default async function Interest() {

    let filePath = path.join(process.cwd(), "public", "games.json");
    let file = await fs.readFile(filePath, "utf-8");
    let data = JSON.parse(file);
    const games = data["games"] || [];

    filePath = path.join(process.cwd(), "public", "movies.json");
    file = await fs.readFile(filePath, "utf-8");
    data = JSON.parse(file);
    const movies = data["movies"] || [];



    return (
        <div className={styles.interest}>
            <h1 className={styles.title}>centres d'interêts</h1>

            <List items={games} title={"Jeux"} type={"games"} width={300} height={150} />
            <List items={movies} title={"Films"} type={"movies"} width={150} height={230} direction={"left"} />
        </div>
    )
}