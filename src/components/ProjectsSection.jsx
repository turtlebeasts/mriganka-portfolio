import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      title: "QuadB Tech Task Management",
      image: "quadb.png",
      description:
        "Designed a feature-rich application focused on enhancing user experience through robust functionalities such as filter options and marking capabilities; identified key areas for improvement which fixed the three biggest sources of user frustration.",
    },
    {
      title: "ILCT Platform",
      image: "ilct.png",
      description:
        "Engineered and deployed a robust full-stack application supporting real-time communication, featuring instant messaging, collaborative jamboard integration, and dynamic channel creation/joining for seamless team interaction.",
    },
    {
      title: "Starter Hive",
      image: "starterHive.png",
      description:
        "Proactively enhanced an open-source project by designing and integrating advanced search and filter functionality, resulting in a 20% increase in user engagement and significantly optimizing website accessibility.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-40 md:px-40 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold mb-10"
      >
        PROJECTS
      </motion.h1>
      {projects.map((item, key) => (
        <motion.div
          key={key}
          className={`block md:flex ${
            key % 2 ? "flex-row-reverse" : "flex-row"
          }`}
          initial={{ opacity: 0, x: key % 2 ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: key * 0.3 }}
        >
          <motion.img
            src={item.image}
            alt={item.title}
            className="m-4 w-11/12 md:w-1/2 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          />
          <div className="p-4">
            <motion.h1
              className="text-3xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: key * 0.4 }}
            >
              {item.title}
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: key * 0.5 }}
            >
              {item.description}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
