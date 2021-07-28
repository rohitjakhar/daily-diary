import Head from "next/head";
import DevelopersBody from "../components/Developers/DevelopersBody";
import { project } from "../config/project";

export default function Developers() {
    return (
        <div>
            <Head>
                <title>{project.name} | Our Developers</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DevelopersBody />
        </div>
    );
}
