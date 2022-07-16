import React from "react";
import { motion } from "framer-motion";
const Loading = () => {
  return (
    <motion.div
      animate={{
        opacity: 0.9,
        borderBottomRightRadius: ["60%", "0%"],
        borderBottomLeftRadius: ["60%", "0%"],
        y: ["0vh", "-99.5vh","-99vh", "-99.9vh"],
        transition: {
          stiffness: 600,
          damping: 20,
          delay: 0.5,
        },
      }}
      initial={{
        borderBottomRightRadius: "20%",
        borderBottomLeftRadius: "20%",
      }}
      className="absolute top-[0%] left-0 w-full h-full bg-prime z-[99999]"
    ></motion.div>
  );
};

export default Loading;
