import globalStyles from "@/components/about/about.module.css"
import styles from "./contact.module.css"
import Image from "next/image"
import path from "path";
import {promises as fs} from "fs";

interface ContactType {
    icon: string;
    value: string;
    link: string;
}

async function getData(): Promise<Array<ContactType>> {
    const filePath = path.join(process.cwd(), "public", "contact.json");
    const file = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(file);
    return data || [];
}

export default async function Contact() {

    const SIZE: number = 40;
    const data = await getData();

    return <div>
        <h2 className={globalStyles.subtitle}> Me contacter </h2>

        <div className={styles.contactList}>
            {data.map((item, index) => (
                <div key={index} className={styles.contactItem}>
                    <a href={item.link}>
                        <Image
                            src={`/images/${item.icon}.svg`}
                            alt={`${item.icon} icon`}
                            width={SIZE}
                            height={SIZE}
                        />
                    </a>

                    <p className={styles.contactValue}> {item.value} </p>
                </div>
            ))}
        </div>
    </div>
}