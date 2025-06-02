export default interface Project {
    title: string;
    description: string;
    year: string
    source?: {
        title: "github" | "other";
        url: string;
    }
}