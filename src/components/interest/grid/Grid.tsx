import path from "path";
import { promises as fs } from "fs";
import GridDisplay from "@/components/interest/grid/GridDisplay";
import { notFound } from "next/navigation";

interface Props {
    id: string;
}

export default async function Grid({ id }: Props) {

    try {
        const filePath = path.join(process.cwd(), "public", `${id}.json`);
        const file = await fs.readFile(filePath, "utf-8");
        const data = JSON.parse(file);
        const list = data[id] || [];
        return <GridDisplay list={list} type={id} />
    } catch (e) {
        console.log(e);
        notFound();
    }
}
