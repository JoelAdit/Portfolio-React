import aboutpic from "../Assets/about.jpg";
import { motion } from "framer-motion";

function About() {
  return (
    <div className=" text-white mb-16 mx-5  ">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className=" my-12 text-3xl text-center font-medium) {
          
        }"
        id="About"
      >
        About Me
      </motion.h1>

      <div className=" flex  flex-wrap justify-center gap-10 ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/3 p-10 "
        >
          <img className="rounded-2xl" src={aboutpic} alt="pic" />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="min-w-10 flex px-10  "
        >
          <p className="my-5 py-5 font-extralight  max-w-xl mr-4  ">
            I am a dedicated and versatile full stack developer with a passion
            for creating efficient and user-friendly web site. With 6 month of
            professional learning, I have worked with a some project. including
            React, JavaScript, Node.js, MongoDB, Express.js and Tailwind. My
            journey in web development began with a deep curiosity for how
            things work, and it has evolved into a career where I continuously
            strive to learn and adapt to new challenges. I thrive in
            collaborative environments and enjoy solving complex problems to
            deliver high-quality solutions. Outside of coding, I enjoy staying
            active, exploring new technologies, and contributing to open-source
            projects.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
