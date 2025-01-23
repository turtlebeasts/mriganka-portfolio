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
      <h1 className="text-6xl font-bold mb-10">PROJECTS</h1>
      {projects.map((item, key) => (
        <div
          className={`block md:flex ${
            key % 2 ? "flex-row-reverse" : "flex-row"
          }`}
          key={key}
        >
          <img
            src={item.image}
            alt={item.title}
            className="m-4 w-11/12 md:w-1/2 "
          />
          <div className="p-4">
            <h1 className="text-3xl">{item.title}</h1>
            <p className="text-lg text-gray-300">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
