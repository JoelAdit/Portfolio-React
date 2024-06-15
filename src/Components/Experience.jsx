import { EXPERIENCES } from "../Note/Note";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-24 text-white mb-20 mx-8">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center mx-10"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.7 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2  ">
                {experience.role} -{" "}
                <span className="text-sm text-red ">{experience.company}</span>{" "}
              </h6>
              <p className="text-neutral-400 ">{experience.description}</p>
            </motion.div>
          </div>
        ))}
      </div>

      {/* <div className=" flex justify-center gap-20 pb-20 -b border-b border-neutral-700 ">
        <div>
          <p>2018-2020</p>
          <p>Role</p>
        </div>
        <div>
          <p>Associate at Cognizant Technology Solutions</p>
          <p>'Member EnrollMent'</p>
          <ul>
            <li>
              • Updating of Provider information and provider hospitals and
              group’s data in the client software
            </li>

            <li>• Pilot batch to handle the process</li>

            <li>• Got appreciated from the leads </li>

            <li>• Have good rapport with the clients </li>

            <li>• Handling of Emails from clients</li>

            <li>• Holding good production and quality report </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
}

export default Experience;
