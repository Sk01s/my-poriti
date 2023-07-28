import React from "react";
import projectStyles from "../../styles/projects.module.css";
import { motion } from "framer-motion";
const Projects = ({ projects }) => {
  return (
    <motion.main
      exit={{ opacity: 0 }}
      initial={{ y: -1000 }}
      animate={{ y: 100 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <main className=" ml-2 mr-32  sm:mr-2  grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-12">
        {projects.map(
          ({ fork, name, id, livePage, codePage, description, languages }) => {
            if (fork) return;
            if (
              name === "youssef portifolio" ||
              name === "Sk01s" ||
              name === "Rebar backend"
            )
              return;
            return (
              <motion.div
                key={id}
                whileHover={{ y: -2 }}
                className={`${projectStyles.project} cursor-pointer p-12 text-center border-solid border-y-2 border-t-prime border-b-accent rounded-xl relative max-w-[90vw]`}
              >
                <h2 className="text-xl font-bold text-prime my-4">{name}</h2>
                <p className=" text-[#CBD5E1]">{description}</p>
                <motion.a
                  href={livePage}
                  whileTap={{ scale: 0.8 }}
                  target="_blank"
                  className={`${projectStyles.link} ${projectStyles["link-left"]} duration-300 p-2 mt-4 text-black bg-accent rounded-xl absolute top-1 left-4 `}
                >
                  View app
                </motion.a>
                <motion.a
                  href={codePage}
                  whileTap={{ scale: 0.8 }}
                  target="_blank"
                  className={`${projectStyles.link} ${projectStyles["link-right"]} duration-300 p-2 mt-4 text-black bg-accent rounded-xl absolute top-1 right-4 `}
                >
                  View code
                </motion.a>
              </motion.div>
            );
          }
        )}
      </main>
    </motion.main>
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
  } catch (error) {
    throw error;
  }
};

export default Projects;
