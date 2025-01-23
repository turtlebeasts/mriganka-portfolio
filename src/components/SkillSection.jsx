import reactjs from "../assets/react-icon.png";
import nodejs from "../assets/nodejs.png";
import mysql from "../assets/mysql.png";
import mongodb from "../assets/mongodb.webp";

export default function SkillSection() {
  const images = [
    {
      name: "React JS",
      image: reactjs,
    },
    {
      name: "Node JS",
      image: nodejs,
    },
    {
      name: "MongoDB",
      image: mongodb,
    },
    {
      name: "MySQL",
      image: mysql,
    },
  ];
  return (
    <div className="py-10 px-4 md:px-40 bg-white text-center">
      <h1 className="text-6xl font-bold">Skills</h1>
      <div className="flex justify-between">
        {images.map((item, key) => (
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24"
            key={key}
          />
        ))}
      </div>
    </div>
  );
}
