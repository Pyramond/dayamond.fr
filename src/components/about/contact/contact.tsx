import globalStyles from "@/components/about/about.module.css"
import styles from "./contact.module.css"
import path from "path";
import { promises as fs } from "fs";
import ContactType from "@/components/about/contact/ContactType.interface";
import ContactItem from "@/components/about/contact/contactItem";

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
                <ContactItem key={index} contact={item} SIZE={SIZE} />
            ))}
        </div>
    </div>
}