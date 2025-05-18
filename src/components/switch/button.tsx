import { PageContext } from "@/context/page-context";
import styles from "./switch.module.css"
import Image from "next/image";
import {useContext} from "react";

interface Props {
    n: number,
    image: string
}

export default function Button({ n, image }: Props) {

    const SIZE: number = 30;
    const { value, setValue } = useContext(PageContext);

    function handleClick() {
        setValue(n);
    }

    return (
        <div className={styles.button} onClick={handleClick} style={{ opacity: n == value ? 0.5 : 1 }}>
            <Image
                src={`/${image}.svg`}
                width={SIZE}
                height={SIZE}
                alt={image}
                className={styles.image}
            />
        </div>
    )
};