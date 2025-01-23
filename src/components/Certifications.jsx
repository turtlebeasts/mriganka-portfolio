import reactjs from "../assets/certifications/reactjs.png";
import reactAdvance from "../assets/certifications/reactjsadvance.png";
import javascript from "../assets/certifications/javascript.png";

export default function Certifications() {
  const certificates = [
    {
      name: "ReactJS",
      image: reactjs,
    },
    {
      name: "ReactJS Advance",
      image: reactAdvance,
    },
    {
      name: "Javascript ES6",
      image: javascript,
    },
  ];
  return (
    <div className="text-white text-center py-10 px-4 md:px-40 ">
      <h1 className="text-6xl font-bold py-10">CERTIFICATIONS</h1>
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
        {certificates.map((item, key) => (
          <div className="text-center" key={key}>
            <img src={item.image} alt={item.name} className="w-96 h-60" />
            <h1 className="text-2xl font-medium py-10">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
