import React from "react";
import { motion } from "framer-motion";
import project1 from "../assets/images/proj1.jpg";
import project2 from "../assets/images/proj2.jpg";

export default function About() {
  return (
    <section id="about" className="text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-6xl font-bold mb-8">
          About <span className="text-emerald-300"> Me</span>
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">01.Background</h3>
          <p className="text-white/50 mb-6">
            I am a full stack developer based in Sri Lanka. I have been working
            in the tech industry for over 4 years, working for the world's
            largest food distributor on the warehouse domain.
          </p>
          <div>
            <code className="text-emerald-200/50">
              const skills = [<br />
              &nbsp;&nbsp;"JavaScript",
              <br /> &nbsp;&nbsp;"React",
              <br /> &nbsp;&nbsp;"Node.js",
              <br />
              &nbsp;&nbsp;"Express",
              <br />
              &nbsp;&nbsp;"MongoDB",
              <br /> ];
            </code>
          </div>
        </div>
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">02. Expertise</h3>
          <p className="text-white/50">
            I'm a full stack developer with experience in building web
            applications using modern technologies.My Expertise includes
            building web applications using React, Node.js, Express, and
            MongoDB.
          </p>
          <div className="mt-4 relative border-t border-white/20 rounded p-4 h-[220px] overflow-hidden">
            <img
              src={project1}
              alt="project1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">03. Skills</h3>
          <p className="text-white/50 mb-4">
            I'm proficient in JavaScript, React, Node.js, Express, and MongoDB
            and have experience in building web applications using these
            technologies.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-xl font-bold mb-2">Frontend</h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li>React/Next.js</li>
                <li>JavaScript</li>
                <li>Tailwind css</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            <div className="border border-white/20 rounded-lg p-3">
              <h4 className="text-emerald-300 font-medium mb-2">Backend</h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="border border-white/20 rounded-lg p-6">
          <div className="space-y-4">
            <div>
              <label className="block font-medium text-sm mb-1">
                Front-end
              </label>
              <div className="w-full bg-white/10 rounded-full h-2">
                <motion.div
                  initial={{ width: "10%", opacity: 0 }}
                  whileInView={{ width: "85%", opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  className="bg-emerald-300 h-2 rounded-full"
                ></motion.div>
              </div>
            </div>
            <div>
              <label className="block font-medium text-sm mb-1">Back-end</label>
              <div className="w-full bg-white/10 rounded-full h-2">
                <motion.div
                  initial={{ width: "10%", opacity: 0 }}
                  whileInView={{ width: "90%", opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  className="bg-emerald-300 h-2 rounded-full"
                ></motion.div>
              </div>
            </div>
            <div>
              <label className="block font-medium text-sm mb-1">Dev-Ops</label>
              <div className="w-full bg-white/10 rounded-full h-2">
                <motion.div
                  initial={{ width: "10%", opacity: 0 }}
                  whileInView={{ width: "85%", opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  className="bg-emerald-300 h-2 rounded-full"
                ></motion.div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mt-4 mb-2">04. Approach</h3>
            <p className="text-white/50">
              I am passionate about building web applications and always strive
              to build applications that are fast, responsive, and
              user-friendly.
            </p>
          </div>
        </div>
        <div className="border border-white/20 rounded-lg p-6 flex flex-col justify-between">
          <div className="relative border border-white/20 rounded-lg p-4 h-[220px] overflow-hidden">
            <img
              src={project2}
              alt="Project 2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold mb-2"> 05.Goals</h3>
            <p className="text-white/50">
              My goal is to work on challenging projects that will help me grow
              as a developer and learn new technologies.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
