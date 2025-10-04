import PageTransition from "@/components/PageTransition/PageTransition";
import Grid from "@/components/interest/grid/Grid";

export default async function GridPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <PageTransition>
            {id && <Grid id={id?.toString()} />}
        </PageTransition>
    );
}
