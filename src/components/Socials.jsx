import { IoSunnyOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="flex flex-col space-y-4 text-white fixed top-0 right-0 p-4 bg-slate-500">
      <button className="text-white">
        <IoSunnyOutline />
      </button>
      <a href="https://github.com/turtlebeasts" target="_blank">
        <FaGithub />
      </a>
      <a href="https://instagram.com/mrig.anka_" target="_blank">
        <FaInstagram />
      </a>
    </div>
  );
}
