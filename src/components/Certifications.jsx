import { motion } from "framer-motion";
import reactjs from "../assets/certifications/reactjs.png";
import reactAdvance from "../assets/certifications/reactjsadvance.png";
import javascript from "../assets/certifications/javascript.png";

export default function Certifications() {
  const certificates = [
    { name: "ReactJS", image: reactjs },
    { name: "ReactJS Advance", image: reactAdvance },
    { name: "Javascript ES6", image: javascript },
  ];

  return (
    <div className="text-white text-center py-10 px-4 md:px-40">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-6xl font-bold py-10"
      >
        CERTIFICATIONS
      </motion.h1>
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
        {certificates.map((item, key) => (
          <motion.div
            key={key}
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: key * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-96 h-60 rounded-lg shadow-lg"
            />
            <motion.h1
              className="text-2xl font-medium py-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: key * 0.3 }}
            >
              {item.name}
            </motion.h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
