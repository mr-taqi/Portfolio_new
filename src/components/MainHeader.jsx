import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { VscHome } from "react-icons/vsc";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { PiRocketLaunchLight } from "react-icons/pi";
import { PiPersonSimpleSnowboardThin } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { PiGraduationCap } from "react-icons/pi";
import { NavHashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import { MdOutlineContactPage } from "react-icons/md";

const navigation = [
  {
    to: "#home-section",
    name: "Home",
    icon: <VscHome />,
  },
  {
    to: "#about-section",
    name: "About",
    icon: <PiPersonSimpleSnowboardThin />,
  },
  {
    to: "#projects-section",
    name: "Projects",
    icon: <AiOutlineFundProjectionScreen />,
  },
  {
    to: "#experience-section",
    name: "Experience",
    icon: <PiRocketLaunchLight />,
  },
  {
    to: "#skills-section",
    name: "Skills",
    icon: <SlBadge />,
  },
  {
    to: "#education-section",
    name: "Education",
    icon: <PiGraduationCap />,
  },
  {
    to: "#contact-section",
    name: "Contact",
    icon: <IoIosContact />,
  },
  {
    to: "https://drive.google.com/file/d/1a2yVd5UZizqKQnasUQcy-80JXaohuD9H/view?usp=drive_link",
    name: "Resume",
    icon: <MdOutlineContactPage />,
  },
];

export const MainHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActiveSection(location.hash);
  }, [location]);

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div>
      <header
        className="fixed top-0 z-50 w-full bg-black backdrop-filter backdrop-blur-lg bg-opacity-20"
        id="main-header-section"
      >
        <nav
          aria-label="Global"
          className="flex items-center justify-evenly p-6 lg:px-8"
        >
          <div>
            <p className="text-lg font-semibold leading-6 text-white">TRS</p>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            >
              <p className="sr-only">Open main menu</p>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <NavHashLink
                key={item.name}
                to={item.to}
                smooth
                onClick={handleNavLinkClick}
                className={`text-sm font-semibold leading-6 ${
                  activeSection === item.to ? "text-orange-400" : "text-white"
                }`}
              >
                <p className="flex items-center gap-x-2 cursor-pointer text-lg hover:text-orange-400">
                  {item.icon}
                  {item.name}
                </p>
              </NavHashLink>
            ))}
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <p className="sr-only">Your Company</p>
                <p className="h-8 w-auto text-white">TRS</p>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
              >
                <p className="sr-only">Close menu</p>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <NavHashLink
                      key={item.name}
                      to={item.to}
                      onClick={handleNavLinkClick}
                      smooth
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                        activeSection === item.to
                          ? "text-orange-400"
                          : "text-gray-900"
                      } hover:text-white`}
                    >
                      <p className="flex items-center gap-x-2 text-white">
                        {item.icon}
                        {item.name}
                      </p>
                    </NavHashLink>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
};
