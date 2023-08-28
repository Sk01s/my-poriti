import React from "react";
import Link from "next/link";
import NavLink from "../components/NavLink";
import NavStyles from "../styles/Navbar.module.css";
import Image from "next/dist/client/image";
import logo from "../assets/logo.jpg";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <header className="flex flex-col-reverse justify-between items-stretch shadow-2xl rounded-3xl px-3 fixed z-10 bg-black top-[13%] w-[87px] h-[70%] right-[0.2%] sm:top-1 sm:left-[0.5%] sm:w-[100%] sm:flex-row sm:h-16 select-none sm:items-center">
      <Link href="/">
        <a
          className={`${NavStyles.logo}  relative navbar-logo bg-accent w-16 h-12 my-1 flex justify-center  items-center text-white rounded-full font-semibold duration-300 hover:opacity-80 hover:h-28 sm:flex-col sm:hover:w-32 sm:hover:h-12 `}
        >
          <Image
            src={logo}
            className={`${NavStyles["logo-image"]} sm:opacity-0 rounded-full duration-300`}
            alt="logo"
            width={100}
            height={100}
          />
          <h2
            className={`${NavStyles["logo-text"]} text-black font-thin text-sm sm:opacity-100 absolute duration-300 sm:text-[1rem]`}
          >
            Youssef
          </h2>
        </a>
      </Link>
      <nav className="flex flex-col gap-2 py-1 sm:flex-row">
        <NavLink text={"contact"} href="/contact" />
        <NavLink text={"skills"} href="/skills" />
        <NavLink text={"projects"} href="/projects" />
        <motion.a
          href="/Youssef-Resume.pdf"
          download
          className=" text-sm flex justify-center items-center px-4 py-6 capitalize  rounded-3xl cursor-pointer sm:px-0 sm:py-1 sm:text-[10px]"
          animate={{
            color: "var(--accent)",
          }}
          whileHover={{
            backgroundColor: "var(--accent)",
            color: "var(--black)",
          }}
        >
          Resume
        </motion.a>
      </nav>
    </header>
  );
};

export default Navbar;
