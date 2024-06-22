import { PROJECTS } from "../Note/Note";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className=" border-b border-neutral-900 pb-24 mx-5 text-white ">
      <div>
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="text-4xl text-center mb-20"
        >
          Projects
        </motion.h1>
      </div>
      {PROJECTS.map(function (project, index) {
        return (
          <div key={index} className="flex flex-wrap justify-center my-8">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.7 }}
              className="w-full lg:w-1/4 "
            >
              <img
                src={project.image}
                width={200}
                height={150}
                alt={project.title}
                className="rounded-lg ml-4 mb-5"
              />
              <p className=" text-2xl ml-24 w-fit text-cyan-400 animate-bounce">
                {project.Link}
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.7 }}
              className="w-full max-w-xl w-3/4 px-4 "
            >
              <h5>{project.title} </h5>
              <h6 className="my-2  text-neutral-500">{project.description}</h6>

              {project.technologies.map(function (tech, index) {
                return (
                  <span
                    key={index}
                    className="mr-2 rounded-md bg-neutral-800 text-black text-sm p-1 text-purple-800"
                  >
                    {tech}
                  </span>
                );
              })}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;

//<p className="text-sm pb-1 bg-gradient-to-r from-pink-400 via-slate-400 to-purple-500 animate-bounce bg-clip-text text-transparent "></p>
