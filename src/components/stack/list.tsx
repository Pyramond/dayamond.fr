import styles from "./stack.module.css"
import Image from "next/image";
import { promises as fs } from "fs";
import path from "path";

interface Props {
    type: string;
    size: number;
}

async function getImages(type: string): Promise<Array<string>> {
    const filePath = path.join(process.cwd(), "public", "skills.json");
    const file = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(file);
    return data[type] || [];
}

export default async function List({ type, size }: Props) {
    const items = await getImages(type);

    return (
        <div className={styles.skillList}>
            {items.map((item, index) => (
                <Image
                    src={`/images/${type}/${item}.svg`}
                    width={size}
                    height={size}
                    alt={item}
                    key={index}
                />
            ))}
        </div>
    );
}
