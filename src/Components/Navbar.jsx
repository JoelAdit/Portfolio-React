import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div>
        <div className="flex justify-between p-5 text-xl font-medium  text-white mx-10">
          <h1>Adith.</h1>

          <CiMenuKebab className="cursor-pointer md:hidden" />

          <ul className="flex gap-5 font-medium text-lg text-gray-500  hidden md:flex ">
            <li className="hover:text-cyan-400 ">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-cyan-400">
              <a href="#About">About</a>
            </li>
            <li className="hover:text-cyan-400 ">
              <a href="#Tech">Tech</a>
            </li>
            <li className="hover:text-cyan-400 ">
              
              
            </li>
            <li className="hover:text-cyan-400 ">
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
