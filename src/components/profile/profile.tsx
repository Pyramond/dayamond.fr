import Image from "next/image";
import styles from "./profile.module.css"

export default function profile() {

    const PROFILE_PICTURE = "/profile-picture.png";

    return (
        <div className={styles.profile}>

            <Image
                src={PROFILE_PICTURE}
                width={300}
                height={300}
                alt={"profile picture"}
                className={styles.profile_picture}
            />

            <div>
                <h2 className={styles.info}> Dayamond </h2>
                <h2 className={styles.info}> Quentin T'JAMPENS </h2>
                <h2 className={styles.info}> 19 ANS </h2>
                <h2 className={styles.info}> BUT INFO, LYON 1 </h2>
            </div>

        </div>
    )
}