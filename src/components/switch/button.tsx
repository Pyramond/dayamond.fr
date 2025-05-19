import styles from "./switch.module.css"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname} from "next/navigation";

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
        <div className={styles.button} onClick={handleClick} style={{ opacity: pathname == page ? 0.5 : 1 }}>
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