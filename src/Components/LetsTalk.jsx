import { IoIosMail } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RiHome7Fill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

function LetsTalk() {
  const [sidenav, setsidenav] = useState(false);

  function sidenavHandle() {
    setsidenav(!sidenav);
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5d5652c0-12bf-4c46-a9a4-b3ac6cbc5d36");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message send successfully!",
        icon: "Success",
      });
    }
  };

  return (
    <div className="mx-5">
      <div className="flex flex-wrap justify-between p-5 text-xl font-medium  text-white md:mx-40 ">
        <h1>Adith.</h1>

        <button onClick={sidenavHandle}>
          <CiMenuKebab className=" md:hidden " />

          {/* SIDENAV-BAR */}
          {sidenav && (
            <div className="md:hidden  text-white z-50  fixed top-10 right-4 p-2 pt-5 h-1/2 text-2xl  ">
              <ul>
                <li className="  border-2 p-2 rounded-full border-stone-500 my-4 hover:scale-75  duration-700 hover:bg-gradient-to-t from-pink-600 to-purple-600">
                  <Link to={"/"}>
                    <RiHome7Fill />
                  </Link>
                </li>

                <li className="border-2 p-2 rounded-full border-stone-500 my-4 hover:scale-75  duration-700 hover:bg-gradient-to-t from-pink-600 to-purple-600">
                  <Link to={"/letstalk"}>
                    <IoMdContact />
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </button>

        <ul className="flex gap-5 font-medium text-lg text-gray-500  hidden md:flex ">
          <li className="hover:text-cyan-400 ">
            <Link to={"/"}>Home</Link>
          </li>

          <li className="hover:text-cyan-400 ">
            <Link to={"/letstalk"}>Contact</Link>
          </li>
        </ul>
      </div>

      {/*    */}
      <div className=" text-white w-1-2 md:flex flex-wrap justify-center gap-32 ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="py-20 p-10 flex flex-col gap-10 "
        >
          <h1 className="text-3xl font-medium bg-gradient-to-r from-pink-400 via-orange-400 to-purple-500 bg-clip-text -tracking-tighter  text-transparent ">
            Hello..! Contact ME
          </h1>
          <p className="text-xl font text-amber-100">
            Let us Know more about you
          </p>

          <form onSubmit={onSubmit} className="flex flex-col ">
            <input
              type="text"
              placeholder="Your Name "
              className="p-3 border-2  border-amber-300 text-sm font-semibold rounded-lg w-96  bg-transparent focus:outline-fuchsia-400  "
              name="name"
              required
            />
            <input
              type="text"
              placeholder="Your Email id "
              className="p-3  border-2 border-amber-300 text-sm font-semibold rounded-lg my-8 w-96 bg-transparent focus:outline-fuchsia-400"
              required
              name="email"
            />
            <textarea
              placeholder="Enter your Message..."
              className="  p-3 border-2 border-amber-300 text-sm font-semibold rounded-lg w-96 h-36 bg-transparent focus:outline-fuchsia-400"
              name="message"
              required
            ></textarea>

            <button
              type="submit"
              className="border bg-cyan-200 text-black  font-semibold p-2 rounded-lg w-24 hover:bg-gradient-to-tl from-pink-400 to-purple-400  hover:scale-90 duration-500 my-8 "
            >
              S e n d
            </button>
          </form>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className=" flex flex-col justify-center  "
        >
          <h1 className=" text-3xl p-5 bg-clip-text -tracking-tighter bg-gradient-to-r from-pink-400 via-orange-400 to-purple-500  text-transparent ">
            Contact information
          </h1>

          <p className="px-10 text-xl">
            <IoIosMail className=" border-2 border-cyan-400 rounded-lg w-8 h-8 p-1  text-cyan-300 " />
            adithya649@gmail.com
          </p>

          <p className="px-10 py-5 text-xl">
            <FaSquarePhone className=" border-2 border-cyan-400 rounded-lg w-8 h-8 p-1  text-cyan-300" />
            +91 95519-26550
          </p>

          <p className="px-10 mb-5 text-xl text-">
            <IoLocation className=" border-2 border-cyan-400 rounded-lg w-8 h-8 p-1 text-cyan-300" />
            No:55 lock street kilpauk chennai:10
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default LetsTalk;
