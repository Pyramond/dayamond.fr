import styles from "./switch.module.css"
import Button from "@/components/switch/button";

export default function Switch() {

    return (
        <div className={styles.switch}>
            <Button image={"avatar"} page={"/"} />
            <Button image={"book"} page={"/stack"} />
            <Button image={"box"} page={"/projects"} />
            <Button image={"controller"} page={"/interest"} />
            <Button image={"globe"} page={"/about"} />
        </div>
    )
}