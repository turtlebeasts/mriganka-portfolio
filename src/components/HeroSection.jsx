import { ReactTyped } from "react-typed";

export default function HeroSection() {
  return (
    <div className="text-white py-40 flex flex-col justify-center items-center space-y-4">
      <h1 className="text-8xl">
        <ReactTyped strings={["Mriganka"]} typeSpeed={40} />
      </h1>
      <h4 className="text-2xl text-slate-400">
        <ReactTyped
          strings={["Frontend Developer", "Tester", "Geek/Enthusiast"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </h4>
    </div>
  );
}
