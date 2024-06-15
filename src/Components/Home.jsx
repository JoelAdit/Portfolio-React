import propic from "../Assets/kevinRushProfile.jpg";
import { motion } from "framer-motion";

import { FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Home() {
  return (
    <>
      <div className="p-5 px-10 border-b border-neutral-900 pb-24 text-white mb-20 mx-6  my-24 ">
        <div className="flex  flex-wrap justify-center">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start ">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className=" text-4xl pb-16 font-light tracking-tighter lg:mt-16"
              >
                Hi, I'm Joseph Adithya
              </motion.h1>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="font-medium text-3xl bg-gradient-to-r from-pink-400 via-slate-400 to-purple-500 bg-clip-text -tracking-tighter  text-transparent"
              >
                Frontend Developer
              </motion.span>
              <motion.p
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className=" my-2 py-5 font-extralight  max-w-xl "
              >
                I am a passionate and detail-oriented frontend developer seeking
                an entry-level position to leverage I have honed my skills in
                front-end technologies like HTML, CSS, JavaScript, React, and
                frontend frameworks Tailwind, Bootstrap. to contribute
                effectively to web development projects. Eager to learn, grow,
                and make meaningful contributions to innovative projects. My
                goal is to leverage my expertise to create innovative user
                experiences..
              </motion.p>
            </div>

            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="flex gap-5 "
            >
              <button className=" border border-purple-500  p-2 px-5 rounded-lg  font-medium hover:bg-gradient-to-br from-pink-300 via-slate-500 to-purple-500">
                Hire Me
              </button>
              <button className=" border border-purple-500  p-2 px-5 rounded-lg  font-medium ">
                Let's Talk
              </button>
            </motion.div>
            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className=" flex flex-warp gap-4"
            >
              <div className=" p-2 my-10 ">
                <a href="">
                  <FaLinkedin className="text-3xl  text-blue-500  bg-white border rounded-md " />
                </a>
              </div>

              <div className=" p-2 my-10 ">
                <a href="">
                  <SiIndeed className="text-3xl  text-blue-400 bg-white  rounded-lg p-0.5 " />
                </a>
              </div>

              <div className=" p-2 my-10 ">
                <a href="">
                  <FaGithub className="text-3xl text-yellow-200" />
                </a>
              </div>

              <div className="  p-2 my-10 ">
                <a href="">
                  <FaInstagram className="text-3xl rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500" />
                </a>
              </div>

              <div className=" p-2 my-10 ">
                <a href="">
                  <FaFacebook className="text-3xl text-blue-400" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className=" w-full lg:w-1/2 lg:p-8 flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="rounded-lg"
              src={propic}
              alt="profile"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
