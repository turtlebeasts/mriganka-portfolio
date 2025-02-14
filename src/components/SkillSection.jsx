import { motion } from "framer-motion";
import reactjs from "../assets/react-icon.png";
import nodejs from "../assets/nodejs.png";
import mysql from "../assets/mysql.png";
import mongodb from "../assets/mongodb.webp";

export default function SkillSection() {
  const images = [
    { name: "React JS", image: reactjs },
    { name: "Node JS", image: nodejs },
    { name: "MongoDB", image: mongodb },
    { name: "MySQL", image: mysql },
  ];

  return (
    <div className="py-10 px-4 md:px-40 bg-white text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Skills
      </motion.h1>
      <div className="flex justify-between">
        {images.map((item, key) => (
          <motion.img
            key={key}
            src={item.image}
            alt={item.name}
            className="w-14 h-14 md:w-24 md:h-24"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.5, delay: key * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}
