'use client'

import styles from "./switch.module.css"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname} from "next/navigation";
import { motion } from "framer-motion";

interface Props {
    image: string,
    page: string,
}

export default function Button({ image, page }: Props) {

    const SIZE: number = 30;
    const pathname = usePathname();
    const router = useRouter();


    function handleClick() {
        router.replace(page)
    }

    return (
        <motion.div
            className={styles.button}
            onClick={handleClick}
            style={{ opacity: pathname == page ? 0.5 : 1 }}
            whileHover={{
                scale: 1.2,
                y: -5
            }}
            whileTap={{
                scale: 0.8,
                y: 0,
            }}
        >
            <Image
                src={`/images/${image}.svg`}
                width={SIZE}
                height={SIZE}
                alt={image}
                className={styles.image}
            />
        </motion.div>
    )
};