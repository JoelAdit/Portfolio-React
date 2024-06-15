import { motion } from "framer-motion";

function Contact() {
  return (
    <>
      <div className=" text-white text-3xl text-center my-8">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
        >
          {" "}
          Get in Touch
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
