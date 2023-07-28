import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NavLink = ({ href, text }) => {
  return (
    <Link href={href}>
      <motion.a
        className=" text-sm flex justify-center items-center px-4 py-5 capitalize  rounded-3xl cursor-pointer sm:px-0 sm:py-2 sm:text-[10px]"
        animate={{
          color: "var(--accent)",
        }}
        whileHover={{
          backgroundColor: "var(--accent)",
          color: "var(--black)",
        }}
      >
        {text}
      </motion.a>
    </Link>
  );
};

export default NavLink;
