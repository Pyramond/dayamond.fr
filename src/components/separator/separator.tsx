import styles from "./separator.module.css"

interface SeparatorProps {
    className?: string;
}

export default function Separator({ className }: SeparatorProps) {
    return (
        <div className={`${styles.separator} ${className ? className : ''}`} />
    );
}