import styles from "./presentation.module.css";
import { promises as fs } from "fs";
import path from "path";
import { PresentationText } from "@/components/presentation/presentation-text";


interface Presentation {
    presentation: string;
}

async function getPresentation(): Promise<string> {

    const filePath = path.join(process.cwd(), "public", "presentation.txt");
    const file = await fs.readFile(filePath, "utf-8");
    return file.toString();
}

export default async function Presentation() {

    const data: string = await getPresentation();

    return (
        <div className={styles.presentation}>
            <h1 className={styles.title}>Presentation</h1>
            <PresentationText presentation={data ? data : "chargement..."} />
        </div>
    );
}