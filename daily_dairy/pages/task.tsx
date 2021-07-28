import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import { project } from "../config/project";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{project.name} | Features</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header heading="Features" />
    </div>
  );
}
