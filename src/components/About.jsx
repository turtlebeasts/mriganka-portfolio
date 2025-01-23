import ResumeDownload from "./ResumeDownload";

export default function About() {
  return (
    <div className="text-white py-10 px-10 md:px-40">
      <h1 className="text-6xl mb-10">About Me</h1>
      <p className="text-justify text-base md:text-xl">
        Hi, I'm Mriganka Das, a passionate and driven MCA student at Presidency
        College, India. I’m always eager to learn and explore new technologies,
        with a particular focus on coding and solving complex problems. I
        specialize in HTML, CSS, JavaScript, ReactJS, PHP, and MySQL, and I’m
        constantly looking for ways to enhance my skills and create more
        efficient, user-friendly solutions. My goal is to become a better coder
        every day, building software that is not only functional but also
        innovative. I am also deeply interested in cybersecurity and have
        participated in challenges like Deadface CTF and Hacktoberfest, where I
        actively contributed to open-source projects and gained valuable
        experience in ethical hacking and security. Outside of coding, I enjoy
        problem-solving, learning new technologies, and pushing the boundaries
        of what’s possible. I’m currently focused on landing a job in a
        reputable company where I can contribute to impactful projects and
        continue growing as a developer. Feel free to explore my work through my
        GitHub or connect with me to collaborate on exciting projects!
      </p>
      <ResumeDownload />
    </div>
  );
}
