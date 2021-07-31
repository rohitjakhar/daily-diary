import Head from "next/head";
import Hero from "../components/Home";
import { project } from "../config/project";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{project.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
}
