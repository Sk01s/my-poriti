import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NavLink = ({ href, text }) => {
  return (
    <Link href={href}>
      <motion.a
        className=" text-sm flex justify-center items-center px-4 py-6 capitalize  rounded-3xl cursor-pointer"
        animate={{
          color: "var(--accent)",
        }}
        whileHover={{
          backgroundColor: "var(--accent)",
          color: "var(--black)",
          y: -5,
          boxShadow: "0 -5px 0 0 var(--black)",
        }}
      >
        {text}
      </motion.a>
    </Link>
  );
};

export default NavLink;
