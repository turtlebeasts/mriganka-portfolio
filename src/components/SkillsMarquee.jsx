import React from "react";

const SkillsMarquee = () => {
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
      <div className="flex animate-marquee whitespace-nowrap">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-2xl font-medium mx-8 hover:text-yellow-300 transition duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;
