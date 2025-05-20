import styles from "./stack.module.css"
import Image from "next/image";

interface Props {
    type: string;
    size: number;
}

async function getImages(type: string): Promise<Array<string>> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/skills.json`, { cache: "no-store" });
    const data = await res.json();
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
