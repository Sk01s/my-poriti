import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
const Contact = () => {
  const [respond, setRespond] = useState("");
  return (
    <motion.main
      initial={{ y: -1000 }}
      animate={{ y: -16 }}
      className="px-10 sm:translate-y-20 h-[100vh] flex flex-col gap-10 justify-center items-center"
    >
      <form
        className=" flex flex-col gap-6 justify-center  bg-paragraph p-12 rounded-3xl text-prime "
        onSubmit={(e) => {
          e.preventDefault();
          emailjs
            .sendForm(
              "service_sprvwi7",
              "template_kj9mcbw",
              e.target,
              process.env.EMAIL_JS
            )
            .then(
              (result) => {
                console.log(e);
                setRespond(
                  "Thank for your message, will respond as soon as possible"
                );
                e.target.email.value = "";
                e.target.name.value = "";
                e.target.message.value = "";
              },
              (error) => {
                setRespond(error.message);
              }
            );
        }}
      >
        <label htmlFor="email" className="font-semibold text-xl">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="rounded-2xl font-semibold p-1"
        />
        <label htmlFor="text" className="text-xl font-semibold">
          name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="rounded-2xl font-semibold p-1"
        />
        <label htmlFor="message" className="text-xl font-semibold">
          messege
        </label>
        <textarea
          className="rounded-xl "
          type="text"
          id="message"
          name="message"
        />
        <button className=" rounded-xl hover:bg-gradient-to-tr px-6 py-2 mx-auto from-accent to-prime hover:text-black border-2 max-w-[60%] duration-300 ">
          submit
        </button>
        <div className="text-prime bg-accent">{respond}</div>
      </form>
    </motion.main>
  );
};

export default Contact;
