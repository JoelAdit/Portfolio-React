import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";
import { RiHome7Fill } from "react-icons/ri";
import { SiAboutdotme } from "react-icons/si";
import { IoMdContact } from "react-icons/io";
import { GrTools } from "react-icons/gr";
import { FaLaptopCode } from "react-icons/fa";

function Navbar() {
  const [sidenav, setsidenav] = useState(false);

  function sidenavHandle() {
    setsidenav(!sidenav);
  }

  return (
    <>
      <div className="sticky top-0 z-50   ">
        <div className="flex justify-between p-5 text-xl font-medium  text-white md:mx-16 ">
          <h1>Adith.</h1>

          <button onClick={sidenavHandle}>
            <CiMenuKebab className=" md:hidden" />

            {sidenav && (
              <div className="md:hidden text-white z-50  fixed top-10 right-3 p-2 pt-5 h-1/2 text-2xl  ">
                <ul>
                  <li className="  border-2 p-2 rounded-full border-stone-500 my-4 hover:scale-75  duration-700 hover:bg-gradient-to-t from-pink-600 to-purple-600">
                    <a href="#Home">
                      <RiHome7Fill />
                    </a>
                  </li>
                  <li className="border-2 p-2 rounded-full border-stone-500 my-4 hover:scale-75  duration-700 hover:bg-gradient-to-t from-pink-600 to-purple-600">
                    <a href="#About">
                      <SiAboutdotme />
                    </a>
                  </li>
                  <li className="border-2 p-2 rounded-full border-stone-500 my-4 hover:scale-75  duration-700 hover:bg-gradient-to-t from-pink-600 to-purple-600">
                    <a href="#Tech">
                      <GrTools />
                    </a>
                  </li>

                  <li className="border-2 p-2 rounded-full border-stone-500 my-4 hover:scale-75  duration-700 hover:bg-gradient-to-t from-pink-600 to-purple-600">
                    <a href="#Proj">
                      <FaLaptopCode />
                    </a>
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
              <a href="#Home">Home</a>
            </li>
            <li className="hover:text-cyan-400">
              <a href="#About">About</a>
            </li>
            <li className="hover:text-cyan-400 ">
              <a href="#Tech">Tech</a>
            </li>
            <li className="hover:text-cyan-400 ">
              <a href="#Proj">Proj</a>
            </li>
            <li className="hover:text-cyan-400 ">
              <Link to={"/letstalk"}>Contact</Link>
            </li>
          </ul>
        </div>

        {/* side-Navbar */}
      </div>
    </>
  );
}

export default Navbar;
