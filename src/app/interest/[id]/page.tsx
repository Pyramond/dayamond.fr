import PageTransition from "@/components/PageTransition/PageTransition";
import Grid from "@/components/interest/grid/Grid";


type Props = {
    params: {
        id: string
    }
}

export default function GridPage({ params }: Props) {
    const { id } = params;

    return <PageTransition>
        {id && <Grid id={id?.toString()} />}
    </PageTransition>
}