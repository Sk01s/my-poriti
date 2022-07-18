import React from "react";
import homeStyles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Typist from "react-text-typist";
const Landing = () => {
  return (
    <main className={`${homeStyles.landing} w-[100vw] h-[100vh]`}>
      <div className=" absolute z-10 top-[35%] max-w-[70%] left-[50%] sm:left-[45%] translate-x-[-55%] translate-y-[-50%] ">
        <h3 className="text-accent font-thin mb-2">My name is</h3>
        <h1 className="text-white text-4xl font-thin mb-3 whitespace-nowrap">
          Youssef Sarakibi
        </h1>
        <Typist
          sentences={["Frontend Developer", "Software Engineer" ]}
          typingSpeed="100"
          className="font-bold text-3xl text-white whitespace-nowrap max-w-[300px] "
        ></Typist>
        <p className="text-paragraph text-sm my-5  w-[300px]">
          I love to build an incredible and appealing web application with the
          newest Technology
        </p>
        <Link href="/contact">
          <motion.a
            className={`${homeStyles.btn} text-white bg-accent px-6 pr-10 py-2 rounded-xl relative cursor-pointer`}
            whileHover={{
              boxShadow: "4px 8px 2px rgba(255,255,255,0.3)",
            }}
            initial={{
              boxShadow: "1px 4px 0px rgba(255,255,255,0.2)",
            }}
          >
            Let&apos;s work together
            <svg
              className="absolute top-[50%] right-4 translate-y-[-35%]"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                className={`${homeStyles["cross-1"]} duration-300 stroke-white`}
              >
                <path d="M8 0.755556L13.675 6.45876" />
                <path d="M14.0624 6.17677L8.39143 12.6296" />
              </g>
              <g className={`${homeStyles["cross-2"]} stroke-white`}>
                <path d="M8 0.755556L13.675 6.45876" />
                <path d="M14.0624 6.17677L8.39143 12.6296" />
              </g>
              <line
                className="duration-300 stroke-white"
                x1="2"
                y1="6.5"
                x2="13"
                y2="6.5"
              />
            </svg>
          </motion.a>
        </Link>
      </div>
    </main>
  );
};

export default Landing;
