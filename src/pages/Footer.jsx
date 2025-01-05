import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className=" py-8" id="footer">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div className="p-5">
            <h2 className="md:text-7xl text-4xl font-bold mb-10 text-white/50">
              Get in <span className="text-gray-400">touch</span>
            </h2>
            <a
              className="md:text-5xl text-2xl font-semibold text-white 
              underline decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-200 transition duration-200"
              href="mailto:chamikaravinda@gmail.com"
            >
              chamikaravinda
              <br/>@gmail.com
            </a>
          </div>
          <div className="text-white/50 mt-12 p-5">
            <div className="mb-8">
              <p className="text-lg mb-1">Phone</p>
              <a
                href="+94713612818"
                className="text-2xl font-semibold underline decoration-gray-400 decoration-2
                underline-offset-4 hover:decoration-gray-400 transition duration-300"
              >
                +94 (0) 71 361 2818
              </a>
            </div>
            <div className="text-lg mb-8">
              <p className="font-bold">Office</p>
              <p>55A, Srimath Anagarika Dharmapala Mawatha</p>
              <p>Colombo 03</p>
              <p>Sri Lanka</p>
            </div>
          </div>
        </div>
        <div className="relative z-10 text-center mt-8 py-12 overflow-hidden">
          <h1 className="hidden md:block text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold text-white opacity-10 text-justify">
            Chamika Jayathilaka
          </h1>
          <h1 className="md:hidden relative text-9xl md:text-[12rem] lg:text-[15rem] font-bold text-white opacity-10">
            Chamika
            <br />
            Jayathilaka
          </h1>
        </div>
        <div className="relative mt-12 container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
          <p className="text-gray-200 caption text-n-4 lg:block">
            @ 2025. All rights reserved.
          </p>
          <ul className="flex gap-5 flex-wrap">
            <a
              href="https://github.com/chamikaravinda"
              aria-label="GitHub"
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
            >
              <AiFillGithub size={30} />
            </a>
            <a
              href="https://twitter.com/chamikaravinda"
              aria-label="X (Twitter)"
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
            >
              <AiOutlineTwitter size={30} />
            </a>
            <a
              href="https://facebook.com/chamikaravinda"
              aria-label="Facebook"
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
            >
              <AiFillFacebook size={30} />
            </a>
            <a
              href="https://instagram.com/chamikaravinda"
              aria-label="Instagram"
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full"
            >
              <AiFillInstagram size={30} />
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}
