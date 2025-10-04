import Interest from "@/components/interest/Interest";
import PageTransition from "@/components/PageTransition/PageTransition";
import SpotifyPlaylist from "@/components/interest/spotify/SpotifyPlaylist";
import styles from "./interest.module.css"

export default function InterestPage() {
    return <PageTransition>
        <Interest/>

        <div className={styles.footer}>
            <SpotifyPlaylist />
        </div>
    </PageTransition>
}