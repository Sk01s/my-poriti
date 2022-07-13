import React from "react";
import Link from "next/link";
import NavLink from "../components/NavLink";
import NavStyles from "../styles/Navbar.module.css";
import Image from "next/dist/client/image";
import logo from "../public/logo.jpg";
const Navbar = () => {
  return (
    <header className=" flex flex-col-reverse justify-between items-stretch shadow-lg rounded-3xl px-3 absolute top-[25%] w-[75px] h-[50%] right-[0.5%] ">
      <Link href="/">
        <a
          className={`${NavStyles.logo}  relative navbar-logo bg-prime w-16 h-16 my-1 flex justify-center block items-center text-white rounded-full font-semibold duration-300 hover:opacity-80 hover:h-28`}
        >
          <Image
            src={logo}
            className={`${NavStyles["logo-image"]} rounded-full duration-300`}
            alt=""
            width={100}
            height={100}
          />
          <h2 className={`${NavStyles["logo-text"]} absolute duration-300`}>
            Youssef
          </h2>
        </a>
      </Link>
      <nav className="flex flex-col gap-2">
        <NavLink text={"contact"} href="/contact" />
        <NavLink text={"skills"} href="/skills" />
        <NavLink text={"projects"} href="/projects" />
      </nav>
    </header>
  );
};

export default Navbar;
