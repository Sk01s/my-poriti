import React, { useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [respond, setRespond] = useState("");
  return (
    <div className="px-10 sm:translate-y-20 h-[100vh] flex flex-col gap-10 justify-center items-center">
      <form
        className=" flex flex-col gap-6 justify-center  bg-paragraph p-12 rounded-3xl text-prime "
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target);
          emailjs
            .sendForm(
              "service_sprvwi7",
              "template_kj9mcbw",
              e.target,
              process.env.EMAIL_JS
            )
            .then(
              (result) => {
                setRespond(
                  "Thank for your message, will respond as soon as possible"
                );
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
        <button className=" rounded-xl hover:bg-gradient-to-tr from-accent to-prime hover:text-black border-2 max-w-[50%] duration-300 ">
          submit
        </button>
        <div className="text-prime">{respond}</div>
      </form>
    </div>
  );
};

export default Contact;
