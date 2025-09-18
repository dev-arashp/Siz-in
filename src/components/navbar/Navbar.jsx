import { useState } from "react";
import logo from "../../../public/img/logo.svg";
import img from "../../../public/img/svgexport-11.svg";
import imgAdobe from "../../../public/img/Adobe Logo (2).svg";
import { Link, NavLink } from "react-router-dom";
import GlareHover from "../hlare-hover/glareHover";

function Navbar() {
  const [samyar, setSamyar] = useState(false);
  const [arash, setArash] = useState(false);

  function hireHandler() {
    if (arash === true) {
      setArash(false);
    }
    setSamyar((prev) => !prev);
  }

  function careerHandler() {
    if (samyar === true) {
      setSamyar(false);
    }
    setArash((prev) => !prev);
  }

  return (
    <>
      <div className="hidden fixed bg-white mb-30 z-150 w-full lg:flex flex-col">
        <div className="px-10 py-3 flex justify-between border-b relative border-[#e8e8e8]">
          <div className="flex items-center">
            <div className="flex gap-8 items-center">
              <Link to="/">
                <img className="w-20 items-center" src={logo} alt="" />
              </Link>

              <div>
                <ul className="flex pt-1 gap-4 border-r border-[#e8e8e8] pr-5 ">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? "font-medium text-sm border-b-2 border-black pb-4"
                          : "font-medium text-sm pb-4 hover:border-b-2 "
                      }
                    >
                      Explor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/FindJobs"
                      className={({ isActive }) =>
                        isActive
                          ? "font-medium text-sm border-b-2 border-black pb-4"
                          : "font-medium text-sm pb-4 hover:border-b-2 "
                      }
                    >
                      Find Jobs
                    </NavLink>
                  </li>

                  <div className="pt-1 font-medium text-sm ">
                    <div
                      className="flex items-center cursor-pointer"
                      onMouseEnter={() => hireHandler()}
                    >
                      Hire Freelancers
                    </div>
                  </div>
                </ul>
              </div>
            </div>
            <div
              className="text-sm cursor-pointer font-medium pt-2 pl-5"
              onMouseEnter={() => careerHandler()}
            >
              Career Resources
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={250}
                transitionDuration={1200}
                playOnce={false}
              >
                <div className="flex gap-2 items-center text-sm rounded-4xl text-white font-semibold  px-1 pl-4 py-1">
                  Try For Free
                  <div className="bg-white rounded-4xl text-sm font-semibold text-blue-600 px-2 py-0.5">
                    Pro
                  </div>
                </div>
              </GlareHover>
            </div>

            <div className="bg-blue-600/10 flex px-5 rounded-4xl text-sm font-semibold text-blue-600 items-center">
              Sing in
            </div>
            <div className="flex items-center">
              <img className="w-18" src={imgAdobe} alt="" />
            </div>
          </div>
        </div>

        {samyar && (
          <div className="ml-70 bg-[#f2f2f2] shadow-md shadow-stone-200 absolute top-15 z-50 rounded-lg px-4 w-55 h-75">
            <div className="py-4 flex flex-col gap-2 border-b border-[#e8e8e8]">
              <div className="flex gap-2 items-center">
                <img className="size-4" src={img} alt="" />
                <span className="text-sm font-medium">
                  My Freelance Projects
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
                <span className="text-sm font-medium">Find creatives</span>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-info-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
                <span className="text-sm font-medium">Hiring On Behance</span>
              </div>
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
                <span className="text-sm font-medium">
                  New Freelance Project
                </span>
              </div>
            </div>
            <div className="py-4">
              <div>
                <span className="text-sm font-light">Logo Designers</span>
              </div>
              <div>
                <span className="text-sm font-light">Brand Designers</span>
              </div>
              <div>
                <span className="text-sm font-light">Website Designers</span>
              </div>
              <div>
                <span className="text-sm font-light">Illustrators</span>
              </div>
              <div>
                <span className="text-sm font-light">
                  Social Media Designers
                </span>
              </div>
            </div>
          </div>
        )}
        {arash && (
          <div className="ml-110 w-55 bg-[#f2f2f2] shadow-md shadow-stone-200 absolute top-15 z-50  rounded-lg px-4 flex flex-col py-4 gap-3">
            <span className="text-sm font-medium ">Overview</span>
            <span className="text-sm font-medium ">Career Guides</span>
            <span className="text-sm font-medium ">Commissioned Projects</span>
            <span className="text-sm font-medium ">
              Creative Appreneticeship
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
