import React from "react";
import Link from "next/link";
import NavLink from "../components/NavLink";
import NavStyles from "../styles/Navbar.module.css";
import Image from "next/dist/client/image";
import logo from "../assens/logo.jpg";
const Navbar = () => {
  return (
    <header className="flex flex-col-reverse justify-between items-stretch shadow-2xl rounded-3xl px-3 fixed z-10 bg-white top-[22%] w-[85px] h-[53%] right-[0.5%] sm:top-2 sm:left-[0.5%] sm:w-[99%] sm:flex-row sm:h-20">
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
            className={`${NavStyles["logo-text"]} sm:opacity-100 absolute duration-300`}
          >
            Youssef
          </h2>
        </a>
      </Link>
      <nav className="flex flex-col gap-2 sm:flex-row">
        <NavLink text={"contact"} href="/contact" />
        <NavLink text={"skills"} href="/skills" />
        <NavLink text={"projects"} href="/projects" />
      </nav>
    </header>
  );
};

export default Navbar;
