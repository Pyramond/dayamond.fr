import styles from "./switch.module.css"
import Button from "@/components/switch/button";

export default function Switch() {

    return (
        <div className={styles.switch}>
            <Button image={"avatar"} n={0} />
            <Button image={"book"} n={1} />
            <Button image={"box"} n={2} />
        </div>
    )
}