import React from "react";
import homeStyles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Typist from "../features/text-typist";
const Landing = () => {
  return (
    <main className={`${homeStyles.landing} w-[100vw] h-[100vh]`}>
      <div className=" absolute z-10 top-[35%] max-w-[70%] left-[50%] sm:left-[45%] translate-x-[-55%] translate-y-[-50%] ">
        <h3 className="text-accent font-thin mb-2">My name is</h3>
        <h1 className="text-black text-4xl font-bold mb-3 whitespace-nowrap max-w-[90vw] sm:text-2xl">
          Youssef Sarakibi
        </h1>
        <Typist
          sentences={["Frontend Developer", "Software Engineer"]}
          typingSpeed="100"
          className="font-thin text-3xl text-black whitespace-nowrap w-[300px] sm:text-2xl "
        ></Typist>
        <p className="text-paragraph text-sm opacity-80 my-5  w-[300px] max-w-[90vw]">
          I love to build an incredible and appealing web application with the
          newest Technology
        </p>
        <Link href="/contact">
          <motion.a
            className={`${homeStyles.btn} text-black  bg-accent pl-6 pr-10 py-2 rounded-xl relative cursor-pointer whitespace-nowrap max-w-[100vw] sm:px-8 sm:text-sm`}
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
                className={`${homeStyles["cross-1"]} duration-300 stroke-black`}
              >
                <path d="M8 0.755556L13.675 6.45876" />
                <path d="M14.0624 6.17677L8.39143 12.6296" />
              </g>
              <g className={`${homeStyles["cross-2"]} stroke-black`}>
                <path d="M8 0.755556L13.675 6.45876" />
                <path d="M14.0624 6.17677L8.39143 12.6296" />
              </g>
              <line
                className="duration-300 stroke-black"
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
