const Education = () => {
  const techStacksGU = [
    "DBMS",
    "Computer Networking",
    "DSA",
    "OS",
    "Linux",
    "JavaScript",
    "Tailwind CSS",
    "HTML & CSS",
    "Java",
    "Python",
    "C & C++",
  ];

  const vidyaKnowledge = [
    "CAD Modeling",
    "IC Engines",
    "Automobile Engineering",
    "Production Technology",
    "Fluid Mechanics",
  ];

  const school = ["Gym Club", "Football", "Badminton", "Science Club"];

  return (
    <section
      className="flex justify-center flex-col items-center mt-[10em] gap-y-20 relative"
      id="education-section"
    >
      <div className="flex justify-center gap-x-10 flex-row sm:flex-col">
        <div>
          <p className="text-slate-400 text-3xl text-center sm:text-6xl hover:text-slate-300 duration-300">
            Education
          </p>
          <p className="text-slate-500 mt-4 text-sm sm:text-xl text-center hover:text-slate-400 duration-300">
            My education has been a journey of self-discovery and growth.
            <br />
            My educational details are as follows.
          </p>
        </div>
      </div>

      {/* Education Details */}
      {/* D.B.A.T.U University */}
      <div
        className="flex justify-center items-center w-full"
        id="details-container"
      >
        <div className="w-full max-w-4xl">
          <div className="ps-2 my-2 first:mt-0">
            <button className="text-xs font-medium uppercase text-gray-400">
              Jan 2020 - Aug 2023
            </button>
          </div>

          <div className="flex gap-x-3">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
              <div className="relative z-10 size-10 flex justify-center items-center">
                <img
                  className="shrink-0 rounded-full hover:scale-125 duration-500"
                  src="https://cse.dbatu.ac.in/wp-content/uploads/2021/03/DBATU-Logo.png"
                  alt="Avatar"
                />
              </div>
            </div>
            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 uppercase font-semibold text-xl text-orange-700 hover:text-orange-500 duration-300">
                D.B.A.T.U University, Lonere.
              </h3>
              <h3 className="flex gap-x-1.5 font-semibold text-slate-400 text-lg">
                Bachelors of Information Technology
              </h3>
              <p className="mt-2 w-full">
                <ul className="list-disc text-base sm:text-base	text-gray-400">
                  <li className="hover:text-gray-300 duration-300">
                    I have completed my Bachelor's of Information Technology at
                    D.B.A.T.U University, Lonere. The courses taught
                    during the program included Data Structures, Algorithms,
                    Object-Oriented Programming, Database Management Systems,
                    Operating Systems, and Computer Networks, among others.
                  </li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-x-4 mt-2">
                {techStacksGU.map((ele, index) => (
                  <button
                    key={index}
                    type="button"
                    className="mt-1 -ms-1 p-1  inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent border-slate-800 text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100  duration-300 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {ele}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Diploma in Mechanical Engineering */}
      <div
        className="flex justify-center items-center w-full mt-[-3em]"
        id="details-container"
      >
        <div className="w-full max-w-4xl">
          <div className="ps-2 my-2 first:mt-0">
            <button className="text-xs font-medium uppercase text-gray-400">
              Mar 2017 - Oct 2019
            </button>
          </div>

          <div className="flex gap-x-3">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
              <div className="relative z-10 size-10 flex justify-center items-center">
                <img
                  className="shrink-0 rounded-full hover:scale-125 duration-500 h-8 w-8"
                  src="https://gpbeed.ac.in/img/logo.svg"
                  alt="Avatar"
                />
              </div>
            </div>
            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 uppercase font-semibold text-xl text-orange-700 hover:text-orange-500 duration-300">
                Government Polytechnic, Beed.
              </h3>
              <h3 className="flex gap-x-1.5 font-semibold text-slate-400 text-lg">
                Diploma in Mechanical Engineering
              </h3>
              <p className="mt-2 w-full">
                <ul className="list-disc text-base sm:text-base	text-gray-400">
                  <li className="hover:text-gray-300 duration-300">
                    I have completed my Diploma in Mechanical Engineering at Government Polytechnic in 
                    Maharashtra. The program included courses in IC Engines, Fluid Mechanics, Material Science, Manufacturing Processes, and CAD/CAM.
                    Additionally, I gained knowledge in subjects like CAD Modeling, Engineering Drawing, Science, and other related fields.
                  </li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-x-4 mt-2">
                {vidyaKnowledge.map((ele, index) => (
                  <button
                    key={index}
                    type="button"
                    className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent border-slate-800 text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 duration-300 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {ele}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex justify-center items-center w-full mt-[-3em]"
        id="details-container"
      >
        <div className="w-full max-w-4xl">
          <div className="ps-2 my-2 first:mt-0">
            <button className="text-xs font-medium uppercase text-gray-400">
              2009 - 2017
            </button>
          </div>

          <div className="flex gap-x-3">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
              <div className="relative z-10 size-10 flex justify-center items-center">
                <img
                  className="shrink-0 rounded-full hover:scale-125 duration-500"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0bS629iVJtc5Ea4gf2aVAMgb1NVD6y1kWLw&s"
                  alt="Avatar"
                />
              </div>
            </div>
            <div className="grow pt-0.5 pb-8">
              <h3 className="flex gap-x-1.5 uppercase font-semibold text-xl text-orange-700 hover:text-orange-500 duration-300">
                Al-Farooque Urdu High School
              </h3>
              <h3 className="flex gap-x-1.5 font-semibold text-slate-400 text-lg">
                2nd - SSC
              </h3>
              <ul className="list-disc text-base mt-2 w-full sm:text-base	text-gray-400">
                <li className="hover:text-gray-300 duration-300">
                  I gained a strong educational foundation and learned a lot of
                  valuable lessons. Additionally, I actively participated in
                  various extracurricular activities, which helped in my overall
                  development.
                </li>
              </ul>
              <div className="flex flex-wrap gap-x-4 mt-2">
                {school.map((ele, index) => (
                  <button
                    key={index}
                    type="button"
                    className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent border-slate-800 text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 duration-300 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {ele}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
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

      
    </section>
  );
};

export default Education;
