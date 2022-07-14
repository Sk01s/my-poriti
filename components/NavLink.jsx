import React from "react";
import NavStyles from "../styles/Navbar.module.css";
import Link from "next/link";

const NavLink = ({ href, text }) => {
  return (
    <Link href={href}>
      <a
        className={`${NavStyles["nav-link"]} flex justify-center items-center p-4 my-1 nav-link  capitalize  relative text-prime font-medium duration-300 rounded-3xl after:bg-white hover:bg-prime hover:text-white hover:opacity-80 `}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavLink;
