import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import project1 from "../assets/images/proj9.png";
import project2 from "../assets/images/proj11.png";
import project3 from "../assets/images/proj12.png";
import { FiChevronDown } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "E-Commerce digital store",
    description:
      "This a fullstack e-commerce digital store built using React, Node.js, Express, and MongoDB.",
    devstack: "React, Node.js, Express, MongoDB",
    link: "0",
    git: "0",
    src: project1,
    type: "fullstack",
  },
  {
    id: 2,
    title: "E-Learning platform",
    description:
      "This project is an e-learning platform built using React, Node.js, Express, and MongoDB.",
    devstack: "Next.js, Node.js, Express, MongoDB",
    link: "0",
    git: "0",
    src: project2,
    type: "fullstack",
  },
  {
    id: 3,
    title: "Ticket booking system",
    description:
      "Ticket booking system built using React, Node.js, Express, and MongoDB.",
    devstack: "React, Node.js, Express, MongoDB",
    link: "0",
    git: "0",
    src: project3,
    type: "fullstack",
  },
];

export default function Portfolio() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <div className="text-white py-24 md:py-64" id="portfolio">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-6xl font-bold text-center mb-16">
          Selected <span className="text-emerald-300">Projects</span>
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white/10 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div
                className="p-6 flex justify-between items-center cursor-pointer bg-black/20 border border-white/10"
                onClick={() => toggleExpand(index)}
              >
                <h3 className="text-4xl font-semibold">{project.title}</h3>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-light text-emerald-300">
                    0{index + 1}
                  </span>
                  <FiChevronDown
                    className={`w-6 h-6 transform transition-transform ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 bg-black/20 border border-white/10"
                  >
                    <div className="flex flex-col md:flex-row gap-8 pt-3">
                      <img
                        src={project.src}
                        alt={project.title}
                        className="w-full md:w-1/2 h-64 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="text-white/70 mb-4">{project.description}</p>
                        <p className="text-emerald-300 font-medium mb-2">
                          Stack: {project.devstack}
                        </p>
                        <p className="text-emerald-400/60 font-medium mb-4 capitalize">
                          Type: {project.type}
                        </p>
                        <div className="flex justify-start items-center space-x-4">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-emerald-400 hover:text-blue-300 transition-colors"
                          >
                            <HiOutlineExternalLink />
                            <span>Live</span>
                          </a>
                          <a
                            href={project.git}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center space-x-2 text-white/70 hover:text-white"
                          >
                            <FaGithub />
                            <span>GitHub</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
