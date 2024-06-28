import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <div className="  text-center text-white ">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="text-3xl font-bold md:text-4xl"
        >
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-purple-500 tracking-wide tracking-wide ">
            Get in Touch
          </span>
        </motion.h1>
        <div className="text-sm tracking-wide font-light  my-10 py-4 text-gray-400">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            Phone No : 9551926550
          </motion.p>{" "}
          <br />
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.7 }}
          >
            Email id : adithya649@gmail.com
          </motion.p>{" "}
          <br />
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7 }}
          >
            Address : No:55 Lock Street Kilapuk Chennai : 600010
          </motion.p>
        </div>
      </div>
    </>
  );
}

export default Contact;
