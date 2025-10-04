import styles from "./spotifyPlaylist.module.css"
import path from "path";
import {promises as fs} from "fs";

const SpotifyPlaylist: React.FC = async () => {

    const filePath = path.join(process.cwd(), "public", "spotify.json");
    const file = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(file);
    const playlist1: string = data["playlist1"];
    const playlist2: string = data["playlist2"];

    return <div>
        <h2 className={styles.title}>Musique</h2>
        <div className={styles.spotifyPlaylist}>
            <iframe className={styles.playlist} src={playlist1} width="90%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
            <iframe className={styles.playlist} src={playlist2} width="90%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
        </div>
    </div>
}

export default SpotifyPlaylist;