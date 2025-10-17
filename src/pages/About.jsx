import { useAboutTypingEffect } from "../customHooks/useAboutTyping";
import Random from "./random";

const About = () => {
  const lines = [
    "$ npm install about_Taqi",
    "loading...",
    "identity adding...",
    "$ name: Taqiuddin Syed",
    "$ Profession: Full Stack Developer",
    "1 year of experience as a Software Developer",
  ];
  const typedLines = useAboutTypingEffect(lines, 100, 1000);

  return (
    <section
      className="flex justify-center items-center flex-col gap-y-8 h-[100vh] mt-[5em] sm:mt-[5em]"
      id="about-section"
    >
      <div>
        <p className="text-slate-400 text-3xl text-center sm:text-6xl hover:text-slate-300 duration-300">
          About Me
        </p>
      </div>
      <div>
        <img
          src="https://i.ibb.co/HLPcs1fK/best-Of-My-Img-2.jpg"
          className="h-[100px] w-[100px] object-cover rounded-full sm:h-[200px] sm:w-[200px] sm:object-cover"
          alt=""
        />
      </div>
      <aside className="bg-black text-white p-6 rounded-lg w-full max-w-md font-mono">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-sm">bash</p>
        </div>
        <div className="mt-4">
          {typedLines.map((line, index) => (
            <p
              key={index}
              className={line.startsWith("$") ? "text-green-400" : "text-white"}
            >
              {line}
            </p>
          ))}
        </div>
      </aside>
      <Random />
    </section>
  );
};

export default About;
