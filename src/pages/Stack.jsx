import { th } from "framer-motion/client";
import React,{useEffect} from "react";
import { SiFigma, SiFramer, SiNodedotjs, SiReact } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stackItems = [
  {
    id: 1,
    name: "Framer",
    icon: <SiFramer size={100} />,
    color: "text-emerald-200",
  },
  {
    id: 2,
    name: "Figma",
    icon: <SiFigma size={100} />,
    color: "text-emerald-200",
  },
  {
    id: 3,
    name: "React",
    icon: <SiReact size={100} />,
    color: "text-emerald-200",
  },
  {
    id: 4,
    name: "Node.js",
    icon: <SiNodedotjs size={100} />,
    color: "text-emerald-200",
  },
];

export default function Stack() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section
      id="stack"
      className="py-24 md:py-64 max-w-[1200px] mx-auto text-center"
    >
      <h2 className="text-7xl text-gray-100 font-bold mb-20">My Stack</h2>
      <div className="flex flex-wrap justify-center gap-8" ref={ref}>
        {stackItems.map((item, index) => (
          <motion.div
            key={item.id}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: (index) => ({
                opacity: 0,
                y: index % 2 === 0 ? -100 : 100,
              }),
              visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
            }}
            className="bg-white/10 flex flex-col items-center justify-center w-[200px] h-[200px] rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className={`mb-4 ${item.color}`}>{item.icon}</div>
            <h3 className="text-3xl font-bold">{item.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
