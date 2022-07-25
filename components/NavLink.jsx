import React from "react";
import NavStyles from "../styles/Navbar.module.css";
import Link from "next/link";

const NavLink = ({ href, text }) => {
  return (
    <Link href={href}>
      <a
        className={`${NavStyles["nav-link"]} text-sm flex justify-center items-center p-4 my-1 capitalize  relative text-accent  font-medium duration-300 rounded-3xl after:bg-white hover:bg-gradient-to-tr from-accent to-prime hover:text-black hover:opacity-60 `}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavLink;
