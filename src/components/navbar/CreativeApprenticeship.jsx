import imgBaners from "/img/asset-2-2x.webp";
import img1 from "/img/company-de-young.webp";
import img2 from "/img/company-72-and-sunny.webp";
import img3 from "/img/company-dixon-baxi.webp";
import img4 from "/img/company-journey.webp";
import img5 from "/img/company-instrument.webp";
import img6 from "/img/company-creative-mornings.webp";
import img7 from "/img/company-buck.webp";
import img8 from "/img/company-its-nice-that.webp";
import img9 from "/img/company-not-wieden-kennedy.webp";
import img10 from "/img/company-monotype.webp";
import s15 from "/img/svgexport-15 copy.svg";
import prf from "/img/explorPage/IMG_3449.JPG";
import adobe from "/img/adobes.svg";
import { NavLink } from "react-router-dom";
import Foter from "../footer/Foter";
import img from "/img/explorPage/poster_4da5a1bf-9f71-49a9-8692-9d8ac527327d.jpeg";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import DarkVeil from "../baner/background";

function CreativeApprenticeship() {
  const [Show, setShow] = useState(true);
  const [Show1, setShow1] = useState(false);
  const [Show2, setShow2] = useState(false);

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
      <div className="w-[85%] mx-auto">
        <div className="flex justify-between items-center pt-60">
          <div className="w-[50%] flex flex-col gap-5">
            <img src={adobe} alt="" />
            <span className="text-6xl font-extrabold">
              Get Ready to Launch Your Creative Career
            </span>
            <p className="text-stone-500 pr-15 text-lg">
              The Adobe Creative Apprenticeship places aspiring designers,
              photographers, and video professionals in top creative workplaces
              so they can get the real-world training and on-the-job experience
              they need to succeed.
            </p>
            <button className="text-sm font-medium border w-fit border-[#e8e8e8] px-5 py-1.5 rounded-full">
              Get Started
            </button>
          </div>
          <div>
            <img className="size-150" src={imgBaners} alt="" />
          </div>
        </div>
        <div className="bg-[#e8e8e8] flex flex-col gap-5 p-20 items-center mb-20 rounded-4xl shadow-lg mt-40">
          <span className="text-red-600 font-semibold text-lg">
            Participating Employers
          </span>
          <span className="text-6xl font-bold">
            Real-World Experience With The Best
          </span>
          <div className="flex gap-37 mt-10">
            <img className="h-15 w-40" src={img1} alt="" />
            <img className="h-15 w-40" src={img2} alt="" />
            <img className="h-15 w-15 mx-auto" src={img3} alt="" />
            <img className="h-15 w-40" src={img4} alt="" />
            <img className="h-15 w-40" src={img5} alt="" />
          </div>
          <div className="flex gap-30 mt-5">
            <img className="h-15 w-40" src={img6} alt="" />
            <img className="h-15 w-40" src={img7} alt="" />
            <img className="h-15 w-40" src={img8} alt="" />
            <img className="h-15 w-40" src={img9} alt="" />
            <img className="h-15 w-40" src={img10} alt="" />
          </div>
          <span className="text-stone-600 text-sm font-medium pt-15 ">
            View All
          </span>
        </div>
        <div className="text-center mb-20">
          <div className="flex flex-col gap-5">
            <span className="font-bold text-6xl">How It Works</span>
            <p className="px-40">
              There are a few steps you need to take before becoming eligible
              for the Adobe Creative Apprenticeship. Adobe Commissioned Projects
              and Creative Apprenticeships are currently only available in the
              United States, Canada and United Kingdom.
            </p>
          </div>
          <div>
            <div className="flex gap-5 items-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full text-lg font-semibold  text-red-600 bg-red-600/10 ">
                1
              </div>
              <span className="text-3xl font-bold">
                Get your Behance profile ready
              </span>
            </div>
            <div className="flex gap-5 mt-5 pl-12 ml-6 border-l border-red-600/30 pb-10 mb-5 border-dashed">
              <div className="p-8 border border-[#e8e8e8] flex flex-col gap-5 text-left rounded-2xl w-1/3">
                <div>
                  <img src={s15} alt="" />
                </div>
                <span className="font-semibold">
                  Have 3+ projects on your profile
                </span>
                <p className="text-stone-500 font-light">
                  Present yourself like a pro by adding three projects into your
                  Behance profile. Click "Share your Work" to get started.
                </p>
              </div>
              <div className="p-8 border border-[#e8e8e8] flex flex-col gap-5 text-left rounded-2xl w-1/3">
                <div>
                  <img src={s15} alt="" />
                </div>
                <span className="font-semibold">
                  Have 3+ projects on your profile
                </span>
                <p className="text-stone-500 font-light">
                  Present yourself like a pro by adding three projects into your
                  Behance profile. Click "Share your Work" to get started.
                </p>
              </div>
              <div className="p-8 border border-[#e8e8e8] flex flex-col gap-5 text-left rounded-2xl w-1/3">
                <div>
                  <img src={s15} alt="" />
                </div>
                <span className="font-semibold">
                  Have 3+ projects on your profile
                </span>
                <p className="text-stone-500 font-light">
                  Present yourself like a pro by adding three projects into your
                  Behance profile. Click "Share your Work" to get started.
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full text-lg font-semibold  text-red-600 bg-red-600/10 ">
                2
              </div>
              <span className="text-3xl font-bold">Work with Adobe</span>
            </div>
            <div className=" mt-5 pl-12 ml-6 border-l border-red-600/30 pb-10 mb-5 border-dashed">
              <div className="p-8 border border-[#e8e8e8] flex items-center  gap-5 text-left rounded-2xl w-full">
                <div>
                  <img src={s15} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-semibold">
                    Complete an Adobe Commissioned Project
                  </span>
                  <p className="text-stone-500 font-light">
                    Get experience working on a real freelance project for
                    Adobe. You'll get mentorship and support along the way to
                    help you succeed and grow professionally.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full text-lg font-semibold  text-red-600 bg-red-600/10 ">
                3
              </div>
              <span className="text-3xl font-bold">
                Unlock the Creative Apprenticeship
              </span>
            </div>
            <div className=" mt-5 pl-12 ml-6 pb-15 mb-5 border-b border-[#e8e8e8]">
              <div className="p-8 border border-[#e8e8e8] flex items-center gap-5 text-left rounded-2xl w-full">
                <div>
                  <img src={s15} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-semibold">
                    Apply to open positions right here
                  </span>
                  <p className="text-stone-500 font-light">
                    The Adobe Creative Apprenticeship program places aspiring
                    designers in top creative workplaces to get real-world
                    experience and launch their careers. Once you're eligible,
                    you'll be able to view open positions on this page.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-15 flex flex-col gap-5">
              <span className="font-bold text-6xl">
                Become a Mentor or Portfolio Reviewer
              </span>
              <p className="text-stone-500 text-lg">
                We’re seeking professionals in design, illustration,
                photography, and videography to mentor the next generation of
                creatives.
              </p>
              <div className="flex items-center gap-5 mx-auto">
                <div className="font-medium text-xs border border-[#e8e8e8] w-fit px-5 py-1.5 rounded-full">
                  Become a Mentor
                </div>
                <div className="text-stone-500 font-semibold text-xs w-fit ">
                  View All
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-15 border-b border-[#e8e8e8] pb-20">
              <div className="w-fit flex flex-col items-center justify-center">
                <img
                  className="size-50 object-cover rounded-full"
                  src={prf}
                  alt=""
                />
                <span className="px-5 font-bold text-xl mt-5">
                  Tina Roth <br /> Eisenberg
                </span>
                <p className="text-stone-500 font-light text-sm mt-2">
                  Creative Mornings
                </p>
                <span className="font-light mt-2">Founder & CEO</span>
              </div>
              <div className="w-fit flex flex-col items-center justify-center">
                <img
                  className="size-50 object-cover rounded-full"
                  src={prf}
                  alt=""
                />
                <span className="px-5 font-bold text-xl mt-5">
                  Tina Roth <br /> Eisenberg
                </span>
                <p className="text-stone-500 font-light text-sm mt-2">
                  Creative Mornings
                </p>
                <span className="font-light mt-2">Founder & CEO</span>
              </div>
              <div className="w-fit flex flex-col items-center justify-center">
                <img
                  className="size-50 object-cover rounded-full"
                  src={prf}
                  alt=""
                />
                <span className="px-5 font-bold text-xl mt-5">
                  Tina Roth <br /> Eisenberg
                </span>
                <p className="text-stone-500 font-light text-sm mt-2">
                  Creative Mornings
                </p>
                <span className="font-light mt-2">Founder & CEO</span>
              </div>
              <div className="w-fit flex flex-col items-center justify-center">
                <img
                  className="size-50 object-cover rounded-full"
                  src={prf}
                  alt=""
                />
                <span className="px-5 font-bold text-xl mt-5">
                  Tina Roth <br /> Eisenberg
                </span>
                <p className="text-stone-500 font-light text-sm mt-2">
                  Creative Mornings
                </p>
                <span className="font-light mt-2">Founder & CEO</span>
              </div>
              <div className="w-fit flex flex-col items-center justify-center">
                <img
                  className="size-50 object-cover rounded-full"
                  src={prf}
                  alt=""
                />
                <span className="px-5 font-bold text-xl mt-5">
                  Tina Roth <br /> Eisenberg
                </span>
                <p className="text-stone-500 font-light text-sm mt-2">
                  Creative Mornings
                </p>
                <span className="font-light mt-2">Founder & CEO</span>
              </div>
              <div className="w-fit flex flex-col items-center justify-center">
                <img
                  className="size-50 object-cover rounded-full"
                  src={prf}
                  alt=""
                />
                <span className="px-5 font-bold text-xl mt-5">
                  Tina Roth <br /> Eisenberg
                </span>
                <p className="text-stone-500 font-light text-sm mt-2">
                  Creative Mornings
                </p>
                <span className="font-light mt-2">Founder & CEO</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-20 border-b border-[#e8e8e8] pb-20 mb-20 ">
          <div className="w-1/2">
            <img className="w-150 rounded-3xl" src={img} alt="" />
          </div>
          <div className="w-1/2 flex flex-col gap-7">
            <span className="text-6xl font-bold">
              Host an Adobe Creative Apprentice
            </span>
            <p className="text-stone-500 font-light">
              Bring fresh talent and perspectives to your team by hosting an
              apprentice, with financial support from Adobe.
            </p>
            <button className="border border-[#e8e8e8] px-5 py-1.5 w-fit rounded-full text-xs font-semibold">
              Host an Apprentice
            </button>
          </div>
        </div>
        <div className="text-center mb-20">
          <span className="font-bold text-5xl">Frequently Asked Questions</span>
          <div className="flex flex-col gap-3">
            <div className="p-10 border border-[#e8e8e8] rounded-3xl w-250 mx-auto mt-15">
              <div onClick={(e) => setShow(!Show)} className="flex flex-col">
                <div className="flex justify-between *:cursor-pointer">
                  <span className="font-semibold text-sm ">
                    How are apprenticeships structured?
                  </span>
                  {Show ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowUp className="rotate-180" />
                  )}
                </div>
                {Show ? (
                  <div>
                    <p className="text-stone-500 text-left pt-10">
                      Adobe Creative Apprentices work for our industry partners
                      including independent agencies and production studios,
                      small businesses, nonprofits, and other top creative
                      employers. Once a candidate meets the eligibility
                      criteria, they will see open apprenticeship positions here
                      on Behance and can apply directly on the job post.
                      Employers review candidates and select their own
                      apprentices. Each apprenticeship lasts between three and
                      six months, with the final pay rate, working hours, and
                      employee relationship determined by the employer.
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="p-10 border border-[#e8e8e8] rounded-3xl w-250 mx-auto ">
              <div onClick={(e) => setShow1(!Show1)} className="flex flex-col">
                <div className="flex justify-between *:cursor-pointer">
                  <span className="font-semibold text-sm ">
                    How are apprenticeships structured?
                  </span>
                  {Show1 ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowUp className="rotate-180" />
                  )}
                </div>
                {Show1 ? (
                  <div>
                    <p className="text-stone-500 text-left pt-10">
                      Adobe Creative Apprentices work for our industry partners
                      including independent agencies and production studios,
                      small businesses, nonprofits, and other top creative
                      employers. Once a candidate meets the eligibility
                      criteria, they will see open apprenticeship positions here
                      on Behance and can apply directly on the job post.
                      Employers review candidates and select their own
                      apprentices. Each apprenticeship lasts between three and
                      six months, with the final pay rate, working hours, and
                      employee relationship determined by the employer.
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="p-10 border border-[#e8e8e8] rounded-3xl w-250 mx-auto ">
              <div onClick={(e) => setShow2(!Show2)} className="flex flex-col">
                <div className="flex justify-between *:cursor-pointer">
                  <span className="font-semibold text-sm ">
                    How are apprenticeships structured?
                  </span>
                  {Show2 ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowUp className="rotate-180" />
                  )}
                </div>
                {Show2 ? (
                  <div>
                    <p className="text-stone-500 text-left pt-10">
                      Adobe Creative Apprentices work for our industry partners
                      including independent agencies and production studios,
                      small businesses, nonprofits, and other top creative
                      employers. Once a candidate meets the eligibility
                      criteria, they will see open apprenticeship positions here
                      on Behance and can apply directly on the job post.
                      Employers review candidates and select their own
                      apprentices. Each apprenticeship lasts between three and
                      six months, with the final pay rate, working hours, and
                      employee relationship determined by the employer.
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-7">
            <div className="text-sm font-medium cursor-pointer hover:bg-stone-200 hover:text-black duration-300 text-stone-400 border border-[#e8e8e8] w-fit py-1 px-4 rounded-full">
              View All
            </div>
          </div>
          <div>
            <div className="mt-20">
              <div
                className="relative"
                style={{
                  width: "100%",
                  height: "600px",
                  position: "relative",
                }}
              >
                <DarkVeil />
              </div>
              <div className="relative -top-110 w-full  pr-30 flex  flex-col items-center text-center justify-center -mb-70 h-full ml-15 gap-10 ">
                <span className="text-7xl font-extrabold  w-full text-white ">
                  Kickstart Your Creative Career Journey
                </span>

                <div>
                  <p className="text-white ">
                    Get the skills, mentorship, and real-world experience you
                    need to succeed.
                  </p>
                </div>
                <button className="bg-white px-7 py-2 rounded-full font-medium text-sm">
                  Browse Commissioned Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Foter />
    </div>
  );
}

export default CreativeApprenticeship;
