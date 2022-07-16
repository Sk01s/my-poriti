import React from "react";
import Head from "next/dist/shared/lib/head";
const projects = ({ projects, readme }) => {
  console.log(readme);
  return (
    <>
      <Head>
        <title>Youssef Projects</title>
        <meta name="desctription" content="Youssef Sarakibi projects" />
      </Head>
    </>
  );
};
export async function getStaticProps() {
  const projectsData = await fetch(
    "https://api.github.com/users/Sk01s/repos/content"
  );
  const projects = await projectsData.json();
  const readmeData = await fetch(
    "https://raw.githubusercontent.com/Sk01s/Tech-Mode/main/README.md"
  );
  const readme = await readmeData.text();
  return {
    props: { projects, readme },
  };
}

export default projects;
