'use client'

import Image from "next/image";
import styles from "./profile.module.css"
import Switch from "../switch/switch";
import {useEffect, useState} from "react";
import Infos from "@/components/profile/infos.interface";
import calculateAge from "@/utils/calculateAge";

export default function profile() {

    const PROFILE_PICTURE = "/images/profile-picture.png";
    const [data, setData] = useState<Infos | null>(null);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_URL}/infos.json`, { cache: "no-store" })
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

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
                <h2 className={styles.info}> {data?.pseudo} </h2>
                <h2 className={styles.info}> {data?.name} </h2>
                <h2 className={styles.info}> {data ? `${calculateAge(data?.birth)} ANS` : undefined} </h2>
                <h2 className={styles.info}> {data?.city} </h2>
                <h2 className={styles.info}> {data?.school} </h2>
            </div>

            <Switch />

            <div className={styles.socials}>

                <Image
                    src={"/images/github.svg"}
                    width={50}
                    height={50}
                    alt={"Github"}
                    onClick={() => { window.open(data?.github, '_blank') }}
                    className={styles.social}
                />

            </div>

        </div>
    )
}