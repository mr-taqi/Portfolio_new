import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase, IoLogoReact } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAuth0, SiJson, SiRedux, SiTypescript } from "react-icons/si";
import { PiChartLineLight } from "react-icons/pi";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";
import { VscLiveShare } from "react-icons/vsc";

const Projects = () => {
  const projectDetails = [
    {
      id: 1,
      image: "https://i.ibb.co/chm228Yj/Screenshot-2025-10-18-at-12-36-41-AM.png",
      name: "Tripfix",
      desc: "DTripFix is a single-page web component for exploring travel options, using HTML, CSS (generated via Sass), and JavaScript for a sleek, dynamic, and lively user experience.....",
      techStacks: [
        <FaHtml5 key="html" className="text-red-500" />,
        <IoLogoJavascript key="js" className="text-yellow-400" />,
        <RiTailwindCssFill key="tailwind" className="text-blue-500" />,
        // <PiChartLineLight key="reactChart" className="text-red-600" />,
      ],
      liveLink: "https://tripfix.netlify.app/",
      github: "https://github.com/mr-taqi/TripFix_frontend-clone",
    },
    {
      id: 2,
      image: "https://i.ibb.co/LztjxpT1/porject1.png",
      name: "FORWARD",
      desc: "FWRD is an online shopping experience that transforms the traditional luxury boutique with first-class service, an exclusive designer roster (from iconic to emerging), and striking editorial imagery......",
      techStacks: [
        <IoLogoReact key="react" className="text-sky-500" />,
        <FaHtml5 key="html" className="text-red-500" />,
        <IoLogoJavascript key="js" className="text-yellow-400" />,
        <RiTailwindCssFill key="tailwind" className="text-blue-500" />,
      ],
      liveLink: "https://forward-6.netlify.app/",
      github: "https://github.com/mr-taqi/FORWARD?tab=readme-ov-file",
    },
    {
      id: 3,
      image: "https://i.ibb.co/bR2SfrkZ/Screenshot-2025-10-18-at-12-32-25-AM.png",
      name: "Weekend Planner",
      desc: "Weekend Planner is a MERN stack web application that simplifies organizing weekend getaways by allowing users to select a location, invite friends, and save or delete planned events from a personal dashboard.....",
      techStacks: [
        <IoLogoReact key="react" className="text-sky-500" />,
        <FaHtml5 key="html" className="text-red-500" />,
        <IoLogoJavascript key="js" className="text-yellow-400" />,
        <RiTailwindCssFill key="tailwind" className="text-blue-500" />,
      ],
      liveLink: "http://weekend-planning.netlify.app/",
      github: "https://github.com/mr-taqi/Weekend-Planner",
    },
    {
      id: 4,
      image: "https://img.hotimg.com/Portfolio-2.png",
      name: "Masai Movies",
      desc: "Masai Movies is an aggregator service for the entertainment industry whereby we can assist you with information and ticketing for movies.....",
      techStacks: [
        <IoLogoJavascript key="js" className="text-yellow-400" />,
        <RiTailwindCssFill key="tailwind" className="text-blue-500" />,
        <SiJson key="json" className="text-slate-600" />,
      ],
      liveLink: "https://delicate-cucurucho-42501a.netlify.app/",
      github: "https://github.com/mr-taqi/Masai_Movies",
    },
    {
      id: 5,
      image: "https://i.ibb.co/mVv2Tp4v/Screenshot-2025-10-18-at-1-05-11-AM.png",
      name: "MOVIEVERSE",
      desc: "MOVIEVERSE is a responsive single-page web component for exploring movies, comics, games, and TV shows, built with HTML, CSS, and Bootstrap, featuring a sleek, dynamic design with a background carousel and smooth hovering/scaling effects for all screen sizes......",
      techStacks: [
        <IoLogoJavascript key="js" className="text-yellow-400" />,
        <RiTailwindCssFill key="tailwind" className="text-blue-500" />,
        <FaHtml5 key="html" className="text-red-500" />,
      ],
      liveLink: "https://cosmic-boba-518430.netlify.app/",
      github: "https://github.com/mr-taqi/MovieVerse_clone?tab=readme-ov-file",
    },
  ];

  return (
    <>
      <section
        className="flex justify-center flex-col items-center gap-y-40"
        id="projects-section"
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[70em] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[70em]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div>
          <p className="text-slate-400 text-3xl text-center sm:text-6xl hover:text-slate-300 duration-300">
            Projects
          </p>
          <p className="text-slate-500 mt-4 text-sm sm:text-xl hover:text-slate-400 duration-300">
            Here are some of my projects.
          </p>
        </div>

        {/* 1st Component */}
        <div
          className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-4xl"
          id="project-cards"
          style={{
            boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
          }}
        >
          <div className="md:flex">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {projectDetails[0].name}
              </div>

              <div className="flex gap-x-4 p-4">
                {projectDetails[0].techStacks.map((ele, index) => (
                  <p key={index} className="text-2xl">
                    {ele}
                  </p>
                ))}
              </div>
              <div className="flex gap-x-4">
                <Link
                  to={projectDetails[0].github}
                  target="_black"
                  className="flex items-center gap-x-2"
                >
                  <p className="text-indigo-500 text-sm">GITHUB</p>
                  <IoLogoGithub className="text-purple-400 text-2xl" />
                </Link>

                <Link
                  to={projectDetails[0].liveLink}
                  target="_black"
                  className="flex items-center gap-x-2"
                >
                  <p className="text-indigo-500 text-sm">LIVE</p>
                  <VscLiveShare className="text-red-800 text-2xl" />
                </Link>
              </div>

              <p className="mt-2 text-slate-500 hover:text-slate-300 duration-300">
                {projectDetails[0].desc}
              </p>
            </div>

            <div className="md:shrink-0 flex justify-center">
              <img
                className="h-48 w-full object-cover md:h-auto md:w-80"
                src={projectDetails[0].image}
                alt="Modern building architecture"
              />
            </div>
          </div>
        </div>

        {/* 2nd Component */}

        <div
          className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-4xl"
          id="project-cards"
          style={{
            boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
          }}
        >
          <div className="md:flex">
            <div className="md:shrink-0 flex justify-center">
              <img
                className="h-48 w-full object-cover md:h-auto md:w-80"
                src={projectDetails[1].image}
                alt="Modern building architecture"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {projectDetails[1].name}
              </div>

              <div className="flex gap-x-4 p-4">
                {projectDetails[1].techStacks.map((ele, index) => (
                  <p key={index} className="text-2xl">
                    {ele}
                  </p>
                ))}
              </div>
              <div className="flex gap-x-4">
                {/* <p className="text-2xl">
                  
                  </p> */}

                <Link
                  to={projectDetails[1].github}
                  target="_black"
                  className="flex items-center gap-x-2"
                >
                  <p className="text-indigo-500 text-sm">GITHUB</p>
                  <IoLogoGithub className="text-purple-400 text-2xl" />
                </Link>

                <Link
                  to={projectDetails[1].liveLink}
                  target="_black"
                  className="flex items-center gap-x-2"
                >
                  <p className="text-indigo-500 text-sm">LIVE</p>
                  <VscLiveShare className="text-red-800 text-2xl" />
                </Link>
              </div>

              <p className="mt-2 text-slate-500 hover:text-slate-300 duration-300">
                {projectDetails[1].desc}
              </p>
            </div>
          </div>
        </div>

        {/* 3rd Component */}

        <div
          className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-4xl"
          id="project-cards"
          style={{
            boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
          }}
        >
          <div className="md:flex">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {projectDetails[2].name}
              </div>

              <div className="flex gap-x-4 p-4">
                {projectDetails[2].techStacks.map((ele, index) => (
                  <p key={index} className="text-2xl">
                    {ele}
                  </p>
                ))}
              </div>
              <div className="flex gap-x-4">
                {/* <p className="text-2xl">
                  
                  </p> */}

                <Link
                  to={projectDetails[2].github}
                  target="_black"
                  className="flex items-center gap-x-2"
                >
                  <p className="text-indigo-500 text-sm">GITHUB</p>
                  <IoLogoGithub className="text-purple-400 text-2xl" />
                </Link>

                <Link
                  to={projectDetails[2].liveLink}
                  target="_black"
                  className="flex items-center gap-x-2"
                >
                  <p className="text-indigo-500 text-sm">LIVE</p>
                  <VscLiveShare className="text-red-800 text-2xl" />
                </Link>
              </div>

              <p className="mt-2 text-slate-500 hover:text-slate-300 duration-300">
                {projectDetails[2].desc}
              </p>
            </div>

            <div className="md:shrink-0 flex justify-center">
              <img
                className="h-48 w-full object-cover md:h-auto md:w-80"
                src={projectDetails[2].image}
                alt="Modern building architecture"
              />
            </div>
          </div>
        </div>

        {/* 4th Component */}
        <div
          className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-4xl"
          id="project-cards"
          style={{
            boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
          }}
        >
          <div className="md:flex">
            <div className="md:shrink-0 flex justify-center">
              <img
                className="h-48 w-full object-cover md:h-auto md:w-80"
                src={projectDetails[3].image}
                alt="Modern building architecture"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {projectDetails[3].name}
              </div>

              <div className="flex gap-x-4 p-4">
                {projectDetails[3].techStacks.map((ele, index) => (
                  <p key={index} className="text-2xl">
                    {ele}
                  </p>
                ))}
              </div>
              <div className="flex gap-x-4">
                {/* <p className="text-2xl">
                  
                  </p> */}

                <Link
                  to={projectDetails[3].github}
                  target="_black"
                  className="flex items-center gap-x-2"
                >
                  <p className="text-indigo-500 text-sm">GITHUB</p>
                  <IoLogoGithub className="text-purple-400 text-2xl" />
                </Link>

                <Link
                  to={projectDetails[3].liveLink}
                  target="_black"
                  className="flex items-center gap-x-2"
                >
                  <p className="text-indigo-500 text-sm">LIVE</p>
                  <VscLiveShare className="text-red-800 text-2xl" />
                </Link>
              </div>

              <p className="mt-2 text-slate-500 hover:text-slate-300 duration-300">
                {projectDetails[3].desc}
              </p>
            </div>
          </div>
        </div>

        {/* 5th Component */}

        <div
          className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-4xl"
          id="project-cards"
          style={{
            boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
          }}
        >
          <div className="md:flex">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {projectDetails[4].name}
              </div>

              <div className="flex gap-x-4 p-4">
                {projectDetails[4].techStacks.map((ele, index) => (
                  <p key={index} className="text-2xl">
                    {ele}
                  </p>
                ))}
              </div>
              <div className="flex gap-x-4">
                {/* <p className="text-2xl">
                  
                  </p> */}

                <Link
                  to={projectDetails[4].github}
                  target="_black"
                  className="flex items-center gap-x-2"
                >
                  <p className="text-indigo-500 text-sm">GITHUB</p>
                  <IoLogoGithub className="text-purple-400 text-2xl" />
                </Link>

                <Link
                  to={projectDetails[4].liveLink}
                  target="_black"
                  className="flex items-center gap-x-2"
                >
                  <p className="text-indigo-500 text-sm">LIVE</p>
                  <VscLiveShare className="text-red-800 text-2xl" />
                </Link>
              </div>

              <p className="mt-2 text-slate-500 hover:text-slate-300 duration-300">
                {projectDetails[4].desc}
              </p>
            </div>

            <div className="md:shrink-0 flex justify-center">
              <img
                className="h-48 w-full object-cover md:h-auto md:w-80"
                src={projectDetails[4].image}
                alt="Modern building architecture"
              />
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute mt-[-50px] inset-x-0 top-[calc(100%+90rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%+90rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </section>
    </>
  );
};

export default Projects;
