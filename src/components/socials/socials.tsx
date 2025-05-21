import styles from "./socials.module.css"
import Image from "next/image";
import {useEffect, useState} from "react";

interface SocialType {
    name: string;
    url: string;
}

interface Props {
    size: number;
}

export default function Socials({ size }: Props) {

    const [socials, setSocials] = useState<Array<SocialType>>([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_URL}/socials.json`, { cache: "no-store" })
            .then(res => res.json())
            .then(data => setSocials(data));
    }, [])

    return (
        <div className={styles.socials}>
            {socials.map((social: SocialType, index: number) => (
                <Image
                    src={`/images/${social.name}.svg`}
                    width={size}
                    height={size}
                    alt={social.name}
                    key={index}
                    onClick={() => { window.open(social.url, '_blank') }}
                    className={styles.social}
                />
            ))}
        </div>
    )
}