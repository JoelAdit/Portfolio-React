import propic from "../Assets/img_jo_.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { FaLinkedin } from "react-icons/fa";
// import { SiIndeed } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

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
      <div
        className="px-15 md:px-20 md:pb-20 md:mx-10  text-white my-10 pt-5 border-transparent   "
        id="Home"
      >
        <div className="flex  flex-wrap justify-center">
          <div className="w-full lg:w-1/2 pl-5">
            <div className="flex flex-col items-center lg:items-start  ">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className=" text-3xl md:text-4xl pb-16  md:-tracking-tighter lg:mt-16 pr-5 "
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
              <button className=" border border-purple-500  p-2 px-5 rounded-lg  font-medium hover:bg-gradient-to-br from-pink-300 via-slate-500 to-purple-500 hover:-translate-y-1 duration-500 ">
                <a href="https://drive.google.com/file/d/1euKHjkizrfg_m5btEsYE8c-g856zxU-1/view?usp=sharing">
                  Look My CV
                </a>
              </button>
              <button
                className=" border border-purple-500  p-2 px-5 rounded-lg  font-medium
               hover:-translate-y-1  duration-300 "
              >
                <Link to={"/letstalk"}>Let's Talk</Link>
              </button>
            </motion.div>
            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className=" flex flex-warp gap-4"
            >
              <div className=" p-2 my-10 ">
                <a href="https://www.linkedin.com/in/josephadithya/">
                  <FaLinkedin className="text-3xl  text-blue-500  bg-white border rounded-md hover:-translate-y-1 hover:scale-110 duration-500" />
                </a>
              </div>

              {/* <div className=" p-2 my-10 ">
                <a href="">
                  <SiIndeed className="text-3xl  text-blue-400 bg-white  rounded-lg p-0.5 " />
                </a>
              </div> */}

              <div className=" p-2 my-10 ">
                <a href="https://github.com/JoelAdit">
                  <FaGithub className="text-3xl text-yellow-200  hover:-translate-y-1 hover:scale-110 duration-500" />
                </a>
              </div>

              <div className="  p-2 my-10 ">
                <a href="">
                  <FaInstagram className="text-3xl rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:-translate-y-1 hover:scale-110 duration-500" />
                </a>
              </div>

              <div className=" p-2 my-10 ">
                <a href="https://vercel.com/joeladits-projects">
                  <IoLogoVercel className="text-3xl text-white hover:-translate-y-1 hover:scale-110 duration-500" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className=" w-full lg:w-1/2 lg:p-8 flex justify-center ">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="rounded-3xl p-5"
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
