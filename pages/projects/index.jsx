import React from "react";
import Head from "next/dist/shared/lib/head";
import Link from "next/link";
import projectStyles from "../../styles/projects.module.css";
import { motion } from "framer-motion";
const projects = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Youssef Projects</title>
        <meta name="desctription" content="Youssef Sarakibi projects" />
      </Head>
      <main className=" mx-2 mr-32 my-32 sm:mr-2  grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-12">
        {projects.map((project) => {
          if (project.fork) return;
          if (project.name === "youssef portifolio" || project.name === "Sk01s")
            return;
          return (
            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              className={`${projectStyles.project} cursor-pointer p-12 text-center border-solid border-y-2 border-y-prime rounded-3xl relative `}
            >
              <h2 className="text-xl text-prime my-4">{project.name}</h2>
              <p>{project.description}</p>
              <motion.a
                href={project.livePage}
                whileTap={{ scale: 0.8 }}
                target="_blank"
                className={`${projectStyles.link} ${projectStyles["link-left"]} duration-300 p-2 mt-4 text-white bg-accent rounded-xl absolute top-1 left-4 `}
              >
                view app
              </motion.a>
              <motion.a
                href={project.codePage}
                whileTap={{ scale: 0.8 }}
                target="_blank"
                className={`${projectStyles.link} ${projectStyles["link-right"]} duration-300 p-2 mt-4 text-white bg-accent rounded-xl absolute top-1 right-4 `}
              >
                view code
              </motion.a>
            </motion.div>
          );
        })}
      </main>
    </>
  );
};
const origizeProjects = (projects) => {
  return projects.map(({ fork, name, html_url, homepage, id, description }) => {
    return {
      fork,
      id,
      name: name.replaceAll("-", " "),
      livePage: homepage || `https://sk01s.github.io/${name}`,
      codePage: html_url,
      description,
    };
  });
};
export const getServerSideProps = async () => {
  try {
    const projectsData = await fetch(
      "https://api.github.com/users/Sk01s/repos",
      {
        authorization: process.env.GITHUB_API_KEY,
      }
    );
    const projects = await projectsData.json();

    return {
      props: { projects: origizeProjects(projects) },
    };
  } catch {
    throw console.error("no left tires");
  }
};

export default projects;
