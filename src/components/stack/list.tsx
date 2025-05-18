import {useEffect, useState} from "react";
import styles from "./stack.module.css"
import Image from "next/image";


interface Props {
    type: string;
    size: number;
}

export default function List({ type, size }: Props) {

    const [items, setItems] = useState<Array<string> | null>(null);

    useEffect(() => {
        fetch("http://localhost:3000/skills.json", { cache: "no-store" })
            .then(res => res.json())
            .then(data => setItems(data[type]));
    }, []);

    return (
        <div className={styles.skillList}>
            {items?.map((item, index) => (
                <Image
                    src={`/${type}/${item}.svg`}
                    width={size}
                    height={size}
                    alt={item}
                    key={index}
                />
            ))}
        </div>
    )
};