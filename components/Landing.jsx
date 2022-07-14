import React from "react";
import homeStyles from "../styles/Home.module.css";
import Link from "next/link";
const Landing = () => {
  return (
    <main className={`${homeStyles.landing} w-[100vw] h-[100vh] max-w-full`}>
      <div className=" absolute z-10  top-[35%] left-[50%] translate-x-[-55%] translate-y-[-50%] ">
        <h3 className="text-accent font-thin mb-2">my name is</h3>
        <h1 className="text-white text-4xl font-thin mb-3 whitespace-nowrap">
          Youssef Sarakibi
        </h1>
        <h2 className="font-bold text-4xl text-white whitespace-nowrap mb-6">
          Frontend Developer
        </h2>
        <p className="text-paragraph text-sm mb-8 max-w-[350px]">
          I love to build an incredible and appealing web application with the
          newest Technology
        </p>
        <Link href="/contact">
          <a
            className={` text-white bg-accent px-5 py-2 rounded-xl relative hover:shadow-lg`}
          >
            Let&apos;s work together
          </a>
        </Link>
      </div>
    </main>
  );
};

export default Landing;
