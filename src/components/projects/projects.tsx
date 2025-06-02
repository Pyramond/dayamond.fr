'use client'

import styles from "./projects.module.css"
import ProjectCard from "@/components/projects/projectCard";
import {useEffect, useState} from "react";
import Project from "./project.interface"

export default function Projects() {

    const [data, setData] = useState<Array<Project>>([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_URL}/projects.json`, { cache: "no-store" })
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    return (
        <div className={styles.projects}>
            <h1 className={styles.title}>mes projets</h1>

            <div className={styles.projectsList}>
                {data?.map((project, index) => (
                    <ProjectCard key={index} source={project.source} title={project.title} description={project.description} year={project.year} />
                ))}
            </div>
        </div>
    )
}