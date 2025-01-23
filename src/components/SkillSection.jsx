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
      <h1 className="text-4xl md:text-6xl font-bold mb-10">Skills</h1>
      <div className="flex justify-between">
        {images.map((item, key) => (
          <img
            src={item.image}
            alt={item.name}
            className="w-14 h-14 md:w-24 md:h-24"
            key={key}
          />
        ))}
      </div>
    </div>
  );
}
