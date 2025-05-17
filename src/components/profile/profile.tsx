'use client'

import Image from "next/image";
import styles from "./profile.module.css"

export default function profile() {

    const PROFILE_PICTURE = "/profile-picture.png";
    const GITHUB_LINK = "https://github.com/Pyramond"

    return (
        <div className={styles.profile}>

            <Image
                src={PROFILE_PICTURE}
                width={300}
                height={300}
                alt={"profile picture"}
                className={styles.profile_picture}
            />

            <div className={styles.infos}>
                <h2 className={styles.info}> Dayamond </h2>
                <h2 className={styles.info}> Quentin T'JAMPENS </h2>
                <h2 className={styles.info}> 19 ANS </h2>
                <h2 className={styles.info}> BUT INFO, LYON 1 </h2>
            </div>

            <div className={styles.socials}>

                <Image
                    src={"/GitHub_dark.svg"}
                    width={50}
                    height={50}
                    alt={"GutHub dark"}
                    onClick={() => { window.open(GITHUB_LINK, '_blank') }}
                    className={styles.social}
                />

            </div>

        </div>
    )
}