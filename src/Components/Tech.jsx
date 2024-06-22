import {  motion } from "framer-motion";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAutodeskmaya } from "react-icons/si";
import { FaUnity } from "react-icons/fa";

const iconAll = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <div
      className="border-b border-neutral-900 pb-24 text-white  mx-5 "
      id="Tech"
      border
      border-white
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className=" my-20 text-center text-4xl font-medium pb-7 "
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex justify-center items-center flex-wrap gap-5"
      >
        <motion.div
          variants={iconAll(2.5)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-700 rounded-2xl p-2"
        >
          <FaHtml5 className="text-6xl text-orange-500" />
        </motion.div>

        <motion.div
          variants={iconAll(3)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-700 rounded-2xl p-2"
        >
          <FaCss3Alt className="text-6xl text-blue-500" />
        </motion.div>

        <motion.div
          variants={iconAll(4)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-700 rounded-2xl p-2"
        >
          <RiJavascriptFill className="text-6xl text-yellow-500" />
        </motion.div>

        <motion.div
          variants={iconAll(3.5)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-700 rounded-2xl p-2"
        >
          <RiReactjsLine className="text-6xl text-cyan-500" />
        </motion.div>

        <motion.div
          variants={iconAll(2)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-700 rounded-2xl p-2"
        >
          <SiMongodb className="text-6xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconAll(3.3)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-700 rounded-2xl p-2"
        >
          <RiTailwindCssFill className="text-6xl text-cyan-500" />
        </motion.div>

        <motion.div
          variants={iconAll(5)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-700 rounded-2xl p-2"
        >
          <SiExpress className="text-6xl text-white-500" />
        </motion.div>

        <motion.div
          variants={iconAll(2.5)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-700 rounded-2xl p-2"
        >
          <FaNodeJs className="text-6xl text-green-700" />
        </motion.div>

        <motion.div
          variants={iconAll(4)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-700 rounded-2xl p-2"
        >
          <SiAdobephotoshop className="text-6xl text-blue-900" />
        </motion.div>

        <motion.div
          variants={iconAll(3)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-700 rounded-2xl p-2"
        >
          <SiAdobepremierepro className="text-6xl text-cyan-600" />
        </motion.div>

        <motion.div
          variants={iconAll(5)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-700 rounded-2xl p-2"
        >
          <FaUnity className="text-6xl text-gray-300" />
        </motion.div>

        <motion.div
          variants={iconAll(2)}
          initial="initial"
          animate="animate"
          className="border-4 border-neutral-700 rounded-2xl p-2"
        >
          <SiAutodeskmaya className="text-6xl text-cyan-300" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
