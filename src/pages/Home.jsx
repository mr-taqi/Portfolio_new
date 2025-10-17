import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { useTypingEffect } from "../customHooks/useTypingEffect";

let imageRow = [
  "https://i.ibb.co/chm228Yj/Screenshot-2025-10-18-at-12-36-41-AM.png",
  "https://img.hotimg.com/Portfolio-2.png",
  "https://i.ibb.co/LztjxpT1/porject1.png",
  "https://i.ibb.co/bR2SfrkZ/Screenshot-2025-10-18-at-12-32-25-AM.png",
  "https://i.ibb.co/mVv2Tp4v/Screenshot-2025-10-18-at-1-05-11-AM.png",
];

let quotes = [
  "A good programmer is someone who always looks both ways before crossing a one-way street.",
  "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
  "It works on my machine.",
  "I have not failed. I’ve just found 10,000 ways that won’t work.",
  "To understand recursion, one must first understand recursion.",
  "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.",
  "When I wrote this code, only God and I understood what I did. Now only God knows.",
  "First, solve the problem. Then, write the code.",
  "I'm not great at the advice. Can I interest you in a sarcastic comment?",
  "Programmer: A machine that turns coffee into code.",
];

let salutation = ["Hello, 👋"];

const skills = [
  "TypeScript",
  "JavaScript",
  "NextJs",
  "React",
  "NodeJs",
  "MongoDB",
  "Express",
  "Java",
  "Chakra UI",
];

const Home = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const typingSalutation = useTypingEffect(salutation);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) =>
        prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative isolate px-6 lg:px-8" id="home-section">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-32">
        <div className="text-center">
          <h1
            className="text-4xl tracking-tight text-white sm:text-6xl h-[50px]"
            id="main-header"
          >
            {typingSalutation}
          </h1>
        </div>
        <div className="h-[100px]">
          <p
            className="text-slate-400 text-center duration-300 mt-4"
            id="main-quotes"
          >
            {quotes[currentQuoteIndex]}
          </p>
        </div>
      </div>

      <div id="main-carousel">
        <Marquee speed={200} gradientColor={"white"} pauseOnHover={true}>
          {imageRow.map((ele, index) => (
            <div key={index} className="m-10 w-[80%]">
              <img
                src={ele}
                alt=""
                height={300}
                width={300}
                id="carousel-Images"
              />
            </div>
          ))}
        </Marquee>
      </div>
      <div>
        <Marquee speed={200} direction={"right"} pauseOnHover={true}>
          <div className="flex gap-x-24 text-white text-xl">
            {skills.map((ele, index) => (
              <p key={index} id="main-skills">
                {ele}
              </p>
            ))}
          </div>
        </Marquee>
      </div>

      <div>
        <Marquee speed={100} direction={"left"} pauseOnHover={true}>
          <div
            className="flex gap-x-48 text-white text-xl mt-10 opacity-40"
            id="icons"
          >
            <IoLogoJavascript />
            <FaJava />
            <RiNextjsFill />
            <IoLogoReact />
            <SiMongodb />
            <FaNodeJs />
            <SiExpress />
            <SiChakraui />
          </div>
        </Marquee>
      </div>

      <div
        aria-hidden="true"
        className="absolute mt-[-50px] inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
};

export default Home;
