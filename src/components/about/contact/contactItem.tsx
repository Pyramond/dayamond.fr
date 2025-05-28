"use client"

import ContactType from "./ContactType.interface";
import styles from "@/components/about/contact/contact.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
    contact: ContactType;
    SIZE: number;
}

export default function ContactItem({ contact, SIZE }: Props) {

    const MotionImage = motion(Image);

    return (
        <div className={styles.contactItem}>
            <a href={contact.link}>
                <MotionImage
                    src={`/images/${contact.icon}.svg`}
                    alt={`${contact.icon} icon`}
                    width={SIZE}
                    height={SIZE}
                    whileHover={{
                        scale: 1.1,
                        transition: { type: "spring", stiffness: 300 }
                    }}
                    whileTap={{
                        scale: 0.8,
                        transition: { type: "spring", stiffness: 300 }
                    }}
                />
            </a>

            <p className={styles.contactValue}> {contact.value} </p>
        </div>
    )
}