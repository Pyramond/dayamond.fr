import Projects from "@/components/projects/projects";
import PageTransition from "@/components/PageTransition/PageTransition";

export default function Home() {

    return <PageTransition>
        <Projects />
    </PageTransition>
}