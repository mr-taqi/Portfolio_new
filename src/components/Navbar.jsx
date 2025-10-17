import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { VscHome } from "react-icons/vsc";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { PiRocketLaunchLight } from "react-icons/pi";
import { PiPersonSimpleSnowboardThin } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const links = [
    {
      to: "/",
      name: "Home",
      icon: <VscHome />,
    },
    {
      to: "/projects",
      name: "Projects",
      icon: <AiOutlineFundProjectionScreen />,
    },
    {
      to: "/experience",
      name: "Experience",
      icon: <PiRocketLaunchLight />,
    },
    {
      to: "/about",
      name: "About",
      icon: <PiPersonSimpleSnowboardThin />,
    },
  ];

  const handleLogo = () => {
    navigate("/");
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-center items-center p-4 ">
      <div className="flex justify-evenly items-center p-4 gap-x-10 w-full px-2 max-w-screen-md border-2 border-solid rounded-lg border-stone-900 hover:border-zinc-700 duration-300">
        <div
          onClick={handleLogo}
          className="text-white text-xl font-serif hover:text-orange-500"
        >
          SY
        </div>
        <button
          className="text-white text-xl md:hidden"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? (
            <IoMdClose className="absolute top-6 left-80 duration-300" />
          ) : (
            <FiMenu />
          )}
        </button>
        <div
          className={`${isMenuOpen ? "block" : "hidden"} w-full md:flex md:w-auto duration-300`}
        >
          <div className="flex flex-col md:flex-row md:justify-end gap-x-10">
            {links.map((ele) => (
              <div key={ele.name} className="max-w-7xl">
                <NavLink
                  style={({ isActive }) =>
                    isActive ? { color: "orange" } : { color: "white" }
                  }
                  to={ele.to}
                >
                  <div>
                    <p className="flex items-center gap-x-2 text-xl hover:text-amber-600 cursor-none">
                      {ele.icon}
                      {ele.name}
                    </p>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
