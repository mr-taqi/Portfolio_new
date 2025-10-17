const Experience = () => {
  const techStacks = [
    "#React",
    "#JavaScript",
    "#Chakra UI",
    "#Tailwind CSS",
    "#GitBucket",
  ];


  const mastersUnionTechStacks = [
    "#Node.js",
    "#Express.js",
    "#SQL",
    "#MongoDB",
    "#JavaScript",
    "#React",
    "#Tailwind CSS",
  ];

  return (
    <section
      className="flex justify-center flex-col items-center mt-[10em] gap-y-20 relative"
      id="experience-section"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[10em] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[2em]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="flex justify-center gap-x-10 flex-row sm:flex-col">
        <div>
          <p className="text-slate-400 text-3xl text-center sm:text-6xl hover:text-slate-300 duration-300">
            Experience
          </p>
          <p className="text-slate-500 mt-4 text-sm sm:text-xl hover:text-slate-400 duration-300">
            My work experience as a software developer.
          </p>
        </div>
      </div>

      {/* Experience Details */}
      <div
        className="flex justify-center items-center w-full"
        id="details-container"
      >
        <div className="w-full max-w-4xl">
          <div className="ps-2 my-2 first:mt-0">
            <button className="text-xs font-medium uppercase text-gray-400">
              jan 2025 - May 2025
            </button>
          </div>

          <div className="flex gap-x-3">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
              <div className="relative z-10 size-12 flex justify-center items-center">
                <img
                  className="shrink-0 rounded-full object-covera hover:scale-125 duration-500"
                  src="https://cdn.broadbandtvnews.com/wp-content/uploads/2020/05/14111822/Travelxp-logo_4K-HDR.jpg"
                  alt="Avatar"
                />
              </div>
            </div>
            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 uppercase font-semibold text-xl text-orange-700 hover:text-orange-500 duration-300">
                Software Developer Engineer
              </h3>
              <h3 className="flex gap-x-1.5 font-semibold text-slate-500 text-lg">
                Travelxp.com
              </h3>
              <p className="mt-2 w-full">
                <ul className="list-disc text-md sm:text-lg text-gray-500">
                  <li className="hover:text-gray-400 duration-300">
                    Worked as a Frontend Developer at Travelxp on their B2C
                    platform and internal CMS.
                  </li>
                  <br />
                  <li className="hover:text-gray-400 duration-300">
                    Built responsive UIs using Next.js, JavaScript, and Tailwind
                    CSS with a focus on performance and design accuracy
                  </li>
                  <br />
                  <li className="hover:text-gray-400 duration-300">
                    Handled data binding and API integration to dynamically
                    render travel content like flights, hotels, and itineraries.
                  </li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-x-4 mt-2">
                {mastersUnionTechStacks.map((ele, index) => (
                  <button
                    key={index}
                    type="button"
                    className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 duration-300 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {ele}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="flex justify-center items-center w-full"
        id="details-container"
      >
        <div className="w-full max-w-4xl">
          <div className="ps-2 my-2 first:mt-0">
            <button className="text-xs font-medium uppercase text-gray-400">
              Oct 2023 - Jan 2024
            </button>
          </div>

          <div className="flex gap-x-3">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
              <div className="relative z-10 size-10 flex justify-center items-center">
                <img
                  className="shrink-0 rounded-full hover:scale-125 duration-500"
                  src="https://media.licdn.com/dms/image/D4D0BAQHuOcpkNw8yeA/company-logo_200_200/0/1692175412914/parangat_technologies_logo?e=2147483647&v=beta&t=X9QO01Ujnp8c-KtqT7OUXpaR57VzVjsoqHFuM0fmx9M"
                  alt="Avatar"
                />
              </div>
            </div>
            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 uppercase font-semibold text-xl text-orange-700 hover:text-orange-500 duration-300">
                Software Developer
              </h3>
              <h3 className="flex gap-x-1.5 font-semibold text-slate-500 text-lg">
                Parangat Technologies
              </h3>
              <p className="mt-2 w-full">
                <ul className="list-disc text-md sm:text-lg text-gray-500">
                  <li className="hover:text-gray-400 duration-300">
                    Acquired proficiency in ReactJs through hands-on learning
                    and project development during the dynamic 3-month
                    internship at Parangat Technologies.
                  </li>
                  <br />
                  <li className="hover:text-gray-400 duration-300">
                    Contributed to Dashboard Projects at Parangat Technologies,
                    focusing on the UI development using JavaScript, ReactJs,
                    and Chakra UI.
                  </li>
                  <br />
                  <li className="hover:text-gray-400 duration-300">
                    Applied test cases, enhancing user experience with UI
                    libraries like Chakra UI and Redux for efficient state
                    management, optimizing the performance and responsiveness of
                    the project.
                  </li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-x-4 mt-2">
                {techStacks.map((ele, index) => (
                  <button
                    key={index}
                    type="button"
                    className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 duration-300 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {ele}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Experience;
