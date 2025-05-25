import styles from "./siteStack.module.css";
import path from "path";
import {promises as fs} from "fs";

interface StackItem {
    name: string;
    url: string;
}

async function getData(): Promise<Array<StackItem>> {
    const filePath = path.join(process.cwd(), "public", "site_stack.json");
    const file = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(file);
    return data || [];
}

export default async function SiteStack() {

    const data: Array<StackItem> = await getData();

    return (
        <div>
            <h2 className={styles.subtitle}> Stack </h2>

            <div className={styles.stackList}>
                {data.map((item: StackItem, index) => (
                    <a href={item.url} key={index}>{item.name}</a>
                ))}
            </div>
        </div>
    )
}