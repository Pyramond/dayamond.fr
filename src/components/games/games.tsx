import path from "path";
import { promises as fs } from "fs";
import GamesList from "./GameList";

export default async function Games() {
    const filePath = path.join(process.cwd(), "public", "games.json");
    const file = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(file);
    const games = data["games"] || [];
    return <GamesList games={games} />;
}
