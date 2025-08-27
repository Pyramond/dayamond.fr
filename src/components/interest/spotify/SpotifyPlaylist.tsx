import styles from "./spotifyPlaylist.module.css"
import path from "path";
import {promises as fs} from "fs";

const SpotifyPlaylist: React.FC = async () => {

    const filePath = path.join(process.cwd(), "public", "spotify.json");
    const file = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(file);
    const url: string = data["url"];

    return <div className={styles.spotifyPlaylist}>
        <h2 className={styles.title}>Musique</h2>
        <iframe className={styles.playlist} src={url} width="100%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
}

export default SpotifyPlaylist;