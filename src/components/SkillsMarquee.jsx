import { motion } from "framer-motion";

export default function SkillsMarquee() {
  const skills = [
    "JavaScript",
    "React.js",
    "Node.js",
    "MySQL",
    "Tailwind CSS",
    "Express.js",
    "REST APIs",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-white py-10 text-black">
      <motion.div
        className="flex whitespace-nowrap"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            className="text-2xl font-medium mx-8 hover:text-yellow-300 transition duration-200"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
