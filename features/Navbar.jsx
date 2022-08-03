import React from "react";
import Link from "next/link";
import NavLink from "../components/NavLink";
import NavStyles from "../styles/Navbar.module.css";
import Image from "next/dist/client/image";
import logo from "../assets/logo.jpg";
const Navbar = () => {
  return (
    <header className="flex flex-col-reverse justify-between items-stretch shadow-2xl rounded-3xl px-3 fixed z-10 bg-black top-[13%] w-[87px] h-[56%] right-[0.2%] sm:top-2 sm:left-[0.5%] sm:w-[99%] sm:flex-row sm:h-20 select-none">
      <Link href="/">
        <a
          className={`${NavStyles.logo}  relative navbar-logo bg-accent w-16 h-16 my-1 flex justify-center block items-center text-white rounded-full font-semibold duration-300 hover:opacity-80 hover:h-28 sm:flex-col sm:hover:w-32 sm:hover:h-16 `}
        >
          <Image
            src={logo}
            className={`${NavStyles["logo-image"]} sm:opacity-0 rounded-full duration-300`}
            alt=""
            width={100}
            height={100}
          />
          <h2
            className={`${NavStyles["logo-text"]} text-black font-thin text-sm sm:opacity-100 absolute duration-300`}
          >
            Youssef
          </h2>
        </a>
      </Link>
      <nav className="flex flex-col gap-2 sm:flex-row">
        <NavLink text={"contact"} href="/contact" />
        <NavLink text={"skills"} href="/skills" />
        <NavLink text={"projects"} href="/projects" />
        <a
          href="/Youssef-Resume.pdf"
          download
          className={`${NavStyles["nav-link"]} text-sm flex justify-center items-center  px-4 py-6 capitalize relative text-accent font-medium duration-300 rounded-3xl after:bg-white hover:bg-gradient-to-tr from-accent to-prime hover:text-black hover:opacity-60 `}
        >
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
