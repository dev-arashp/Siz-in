import { NavLink } from "react-router-dom";
import imgBaner from "/img/asset-1-2x.webp";
import imgBaners from "/img/asset-2-2x.webp";
import svgexport11 from "/img/svgexport-11 copy.svg";
import svgexport13 from "/img/svgexport-13 copy.svg";
import imgmax from "/img/max_logo_2x.webp";
import img from "/img/explorPage/large_219836cf-5b44-42a1-bcb4-927fc7369a58.webp";
import { IoIosArrowForward } from "react-icons/io";
import Foter from "../footer/Foter";
import { MdAccessTime } from "react-icons/md";
import { SiAdobe } from "react-icons/si";
import { TiTick } from "react-icons/ti";

function Overview() {
  return (
    <div>
      <div className="pt-14 fixed w-full backdrop-blur-3xl bg-white/50">
        <ul className="flex justify-center gap-2 *:font-semibold  w-full py-4  pl-5 border-b border-[#e8e8e8]">
          <li>
            <NavLink
              to="/Overview"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-sm bg-black text-white px-5 py-2 rounded-full"
                  : "font-semibold text-sm  hover:bg-black hover:text-white duration-500 px-5 hover:py-2  hover:rounded-full"
              }
            >
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Moodboards"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-sm bg-black text-white px-5 py-2 rounded-full"
                  : "font-semibold text-sm  hover:bg-black hover:text-white duration-500 px-5 hover:py-2  hover:rounded-full"
              }
            >
              Career Guides
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Appreciations"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-sm bg-black text-white px-5 py-2 rounded-full"
                  : "font-semibold text-sm  hover:bg-black hover:text-white duration-500 px-5 hover:py-2  hover:rounded-full"
              }
            >
              Commissioned Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/CreativeApprenticeship"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-sm bg-black text-white px-5 py-2 rounded-full"
                  : "font-semibold text-sm  hover:bg-black hover:text-white duration-500 px-5 hover:py-2  hover:rounded-full"
              }
            >
              Creative Apprenticeship
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="pt-50 flex justify-between mx-auto w-[80%] gap-15">
        <div className="h-[80%]">
          <img className="w-180 " src={imgBaner} alt="" />
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-6xl font-extrabold">
            Resources to grow your <br /> creative career
          </h1>
          <p className="text-stone-500 font-light text-lg">
            Find everything you need to get started, stand out, level up, and
            land your dream job — all in one place.
          </p>
          <div className="flex gap-10 items-center">
            <img src={svgexport11} alt="" />
            <div className="w-130 flex flex-col gap-2">
              <span className="text-xl font-bold">Free Career Guides</span>
              <p className="text-stone-500 font-light ">
                Take courses, discover local or virtual events, and read tips to
                get started on your career journey and advance to the next
                level.
              </p>
            </div>
            <IoIosArrowForward />
          </div>
          <div className="flex gap-10 items-center">
            <img src={svgexport13} alt="" />
            <div className="w-130 flex flex-col gap-2">
              <span className="text-xl font-bold">Work with Adobe</span>
              <p className="text-stone-500 font-light ">
                Apply for a commissioned project and get real freelance
                experience working with Adobe.
              </p>
            </div>
            <IoIosArrowForward />
          </div>
          <div className="flex gap-10 items-center">
            <img src={svgexport11} alt="" />
            <div className="w-130 flex flex-col gap-2">
              <span className="text-xl font-bold">
                Adobe Creative Apprenticeship
              </span>
              <p className="text-stone-500 font-light ">
                Land the Adobe Creative Apprenticeship and you'll get real-world
                experience working in a top creative workplace.
              </p>
            </div>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
      <div className="mt-30 w-[80%] mx-auto">
        <span className="font-extrabold text-3xl">Latest Courses</span>
        <div className="flex justify-between">
          <p className="text-stone-500 font-light">
            Kickstart your learning with multi-part courses, hosted by creative
            experts
          </p>
          <p className="text-stone-500 font-light">Go to Career Guides</p>
        </div>
        <div className="mt-10 flex gap-4 mb-35">
          <div>
            <div className="mb-4">
              <img className="w-120 rounded-xl" src={img} alt="" />
            </div>

            <span className="text-lg font-semibold ">
              How to Price Your Work in the Creative Industry
            </span>
            <p className="text-sm text-stone-500">5 parts • 40 minutes</p>
          </div>
          <div>
            <div className="mb-4">
              <img className="w-120 rounded-xl" src={img} alt="" />
            </div>

            <span className="text-lg font-semibold ">
              How to Price Your Work in the Creative Industry
            </span>
            <p className="text-sm text-stone-500">5 parts • 40 minutes</p>
          </div>
          <div>
            <div className="mb-4">
              <img className="w-120 rounded-xl" src={img} alt="" />
            </div>

            <span className="text-lg font-semibold ">
              How to Price Your Work in the Creative Industry
            </span>
            <p className="text-sm text-stone-500">5 parts • 40 minutes</p>
          </div>
        </div>
        <div className="mb-20">
          <div>
            <span className="font-bold text-3xl">
              Latest Commissioned Projects
            </span>
            <div className="flex justify-between">
              <p className="text-stone-500">
                Make your portfolio stand out with Adobe as your first client.
              </p>
              <p className="text-stone-500">View all</p>
            </div>
          </div>
          <div className="flex justify-between gap-5">
            <div className="border border-[#e8e8e8] p-5 w-1/3 my-10 flex flex-col gap-3 rounded-xl">
              <div className="flex justify-between items-center">
                <button className="border border-[#e8e8e8] p-1 text-xs px-3 rounded-sm">
                  Video Production & Editing
                </button>
                <p className="text-orange-500 font-light text-xs">
                  Ends in 13 days
                </p>
              </div>
              <div className="flex flex-col gap-3 ">
                <span className="text-lg font-medium ">
                  Social Content Reel: University of Texas at San Antonio
                </span>
                <p className="text-blue-600 text-sm font-semibold">US$ 1,000</p>
                <div className="flex items-center gap-1">
                  <MdAccessTime className="text-blue-700" />
                  <span className="text-sm">In a month</span>
                </div>
                <p className="text-stone-600 text-sm leading-6">
                  Overview: We’re calling on talented creators to capture the
                  vibrant energy of our upcoming community event and showcase it
                  through dynamic video content. We want to bring
                </p>
                <div className="flex items-center gap-2">
                  <SiAdobe className="text-red-600" />
                  <span className="text-stone-600 text-sm">
                    Adobe Community Events
                  </span>
                  <div className="text-white bg-stone-900 rounded-lg p-0.5">
                    <TiTick className="size-5" />
                  </div>
                </div>
                <button className="border border-[#e8e8e8] text-sm p-1 font-semibold rounded-full">
                  View Project
                </button>
              </div>
            </div>
            <div className="border border-[#e8e8e8] p-5 w-1/3 my-10 flex flex-col gap-3 rounded-xl">
              <div className="flex justify-between items-center">
                <button className="border border-[#e8e8e8] p-1 text-xs px-3 rounded-sm">
                  Video Production & Editing
                </button>
                <p className="text-orange-500 font-light text-xs">
                  Ends in 13 days
                </p>
              </div>
              <div className="flex flex-col gap-3 ">
                <span className="text-lg font-medium ">
                  Social Content Reel: University of Texas at San Antonio
                </span>
                <p className="text-blue-600 text-sm font-semibold">US$ 1,000</p>
                <div className="flex items-center gap-1">
                  <MdAccessTime className="text-blue-700" />
                  <span className="text-sm">In a month</span>
                </div>
                <p className="text-stone-600 text-sm leading-6">
                  Overview: We’re calling on talented creators to capture the
                  vibrant energy of our upcoming community event and showcase it
                  through dynamic video content. We want to bring
                </p>
                <div className="flex items-center gap-2">
                  <SiAdobe className="text-red-600" />
                  <span className="text-stone-600 text-sm">
                    Adobe Community Events
                  </span>
                  <div className="text-white bg-stone-900 rounded-lg p-0.5">
                    <TiTick className="size-5" />
                  </div>
                </div>
                <button className="border border-[#e8e8e8] text-sm p-1 font-semibold rounded-full">
                  View Project
                </button>
              </div>
            </div>
            <div className="border border-[#e8e8e8] p-5 w-1/3 my-10 flex flex-col gap-3 rounded-xl">
              <div className="flex justify-between items-center">
                <button className="border border-[#e8e8e8] p-1 text-xs px-3 rounded-sm">
                  Video Production & Editing
                </button>
                <p className="text-orange-500 font-light text-xs">
                  Ends in 13 days
                </p>
              </div>
              <div className="flex flex-col gap-3 ">
                <span className="text-lg font-medium ">
                  Social Content Reel: University of Texas at San Antonio
                </span>
                <p className="text-blue-600 text-sm font-semibold">US$ 1,000</p>
                <div className="flex items-center gap-1">
                  <MdAccessTime className="text-blue-700" />
                  <span className="text-sm">In a month</span>
                </div>
                <p className="text-stone-600 text-sm leading-6">
                  Overview: We’re calling on talented creators to capture the
                  vibrant energy of our upcoming community event and showcase it
                  through dynamic video content. We want to bring
                </p>
                <div className="flex items-center gap-2">
                  <SiAdobe className="text-red-600" />
                  <span className="text-stone-600 text-sm">
                    Adobe Community Events
                  </span>
                  <div className="text-white bg-stone-900 rounded-lg p-0.5">
                    <TiTick className="size-5" />
                  </div>
                </div>
                <button className="border border-[#e8e8e8] text-sm p-1 font-semibold rounded-full">
                  View Project
                </button>
              </div>
            </div>
          </div>
          <div className="bg-red-600 w-full flex gap-10 justify-center items-center rounded-xl my-20">
            <div className="flex flex-col gap-4">
              <span className="font-semibold text-white ">
                Adobe MAX — The Creativity Conference
              </span>
              <span className="text-white text-3xl font-bold">
                Save the data for max 2025
              </span>
              <p className="text-white w-130 font-light">
                Make plans to join us for MAX 2025 October 28–30 in Los Angeles.
                Sign up by April 30 — with no financial obligation — and you’ll
                save US$600 on a full conference pass.
              </p>
              <div className="flex gap-4 items-center">
                <button className="text-stone-700 bg-white text-sm px-6 py-1.5 rounded-full">
                  Sign Up & Save
                </button>
                <span className="text-white text-sm">View All Events</span>
              </div>
            </div>
            <img className="size-90" src={imgmax} alt="" />
          </div>
          <div>
            <div>
              <span className="text-4xl font-bold">Articles</span>
              <div className="flex justify-between *:text-stone-500  font-light">
                <p>Insight and inspiration for your creative career.</p>
                <p>Go to Career Guides</p>
              </div>
            </div>
            <div className="mt-10 flex gap-4">
              <div className="w-1/3 flex flex-col gap-3">
                <img className="rounded-xl" src={img} alt="" />
                <span className="font-semibold text-lg">
                  It Started with Parkour: Finn’s Creative Journey
                </span>
                <p className="text-sm  text-stone-500">
                  Finn Evans went from parkour dreams to creative success
                  through the Adobe Creative Apprenticeship at CreativeMornings.
                </p>
              </div>
              <div className="w-1/3 flex flex-col gap-3">
                <img className="rounded-xl" src={img} alt="" />
                <span className="font-semibold text-lg">
                  Creative Agility: Creating for Sports & Entertainment
                </span>
                <p className="text-sm  text-stone-500">
                  Join Steven Overturf to learn what it takes to forge your own
                  path, break into sport and entertainment, and be agile while
                  navigating your career.
                </p>
              </div>
              <div className="w-1/3 flex flex-col gap-3">
                <img className="rounded-xl" src={img} alt="" />
                <span className="font-semibold text-lg">
                  Creatives on Creatives: Nick Fancher & John Dykstra
                </span>
                <p className="text-sm  text-stone-500">
                  Nick Fancher reflects on his path from DIY shoots to
                  professional success, and how discovering John Dykstra’s
                  experimental work reminded him of the value of staying
                  inspired, open to new ideas ...
                </p>
              </div>
            </div>
            <div className="pt-50 flex justify-between items-center mx-auto gap-20">
              <div className="flex flex-col gap-10 w-180">
                <span className="text-5xl font-extrabold">
                  Want to work for a top creative employer?
                </span>
                <p className="text-stone-500">
                  The Adobe Creative Apprenticeship program places aspiring
                  designers, photographers, and video professionals in top
                  creative workplaces so they can get the real-world training
                  and on-the-job experience they need to launch their careers.
                </p>
                <button className="font-medium text-sm border w-fit px-5 py-1.5 rounded-full border-[#e8e8e8]">
                  Learn More
                </button>
              </div>
              <div className="h-full">
                <img className="w-200 " src={imgBaners} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Foter />
    </div>
  );
}

export default Overview;
