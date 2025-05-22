import styles from "./presentation.module.css";
import { promises as fs } from "fs";
import path from "path";
import { PresentationText } from "@/components/presentation/presentation-text";


interface Presentation {
    presentation: string;
}

async function getPresentation(): Promise<Presentation> {

    const filePath = path.join(process.cwd(), "public", "presentation.json");
    const file = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(file);
    return data || {};
}

export default async function Presentation() {

    const data: Presentation = await getPresentation();

    return (
        <div className={styles.presentation}>
            <h1 className={styles.title}>Presentation</h1>
            <PresentationText presentation={data ? data.presentation : "chargement..."} />
        </div>
    );
}