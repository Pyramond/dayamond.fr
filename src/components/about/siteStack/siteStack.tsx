import styles from "./siteStack.module.css";
import path from "path";
import {promises as fs} from "fs";
import Image from "next/image";

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
    const size: number = 50;

    return (
        <div>
            <h2 className={styles.subtitle}> Stack </h2>

            <div className={styles.stackList}>
                <p>Liste des librairies / framework utilisés pour la création de ce site web : </p>
                <div className={styles.iconList}>
                    {data.map((item: StackItem, index) => (
                        <a href={item.url} key={index}>
                            <Image
                                src={"/images/libs/" + item.name + ".svg"}
                                width={size}
                                height={size}
                                alt={item.name}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}