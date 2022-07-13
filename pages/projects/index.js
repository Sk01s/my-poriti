import React from "react";
import Head from "next/dist/shared/lib/head";
import Navbar from "../../features/Navbar";
const projects = () => {
  return (
    <>
      <Head>
        <title>Youssef Projects</title>
        <meta name="desctription" content="Youssef Sarakibi projects" />
      </Head>
      <Navbar />
    </>
  );
};

export default projects;
