import img from "../../../public/img/svgexport-31 (1).svg";
import imgs from "../../../public/img/creator-pro-upsell-banner-border.webp";
import insta from "../../../public/img/svgexport-32 (1).svg";
import Twitter from "../../../public/img/svgexport-33 (1).svg";
import Pinterest from "../../../public/img/svgexport-34 (1).svg";
import Facebook from "../../../public/img/svgexport-35.svg";
import LinkedIn from "../../../public/img/svgexport-36.svg";
import adobe from "../../../public/img/svgexport-37.svg";

function Foter() {
  return (
    <>
      <div className="flex flex-col items-center">
        <img src={imgs} alt="" />

        <div className="my-3">
          <span className="font-semibold">Upgrade to Behance Pro today:</span>
          <span>
            {" "}
            Get advanced analytics, a custom portfolio website, and more
            features to grow your creative career.
          </span>

          <button className="font-semibold text-blue-600">
            Start your 7 day free trial
          </button>
        </div>
      </div>

      <div className="bg-[#191919]">
        <div className=" flex justify-around flex-col xl:flex-row  px-30 mx-auto ">
          <div className="flex w-30 ">
            <img className="size-25 lg:size-30" src={img} alt="" />
          </div>
          <div className="grid sm:grid-cols-2  w-200 justify-between md:grid-cols-4 gap-10 lg:gap-40 mr-20  xl:mt-13 ">
            <div>
              <span className="text-white font-semibold lg:text-lg">
                Built For Creatives
              </span>
              <div className="flex flex-col gap-3 my-7">
                <span className="text-white  font-light hover:underline  text-sm">
                  Try Behance Pro
                </span>
                <span className="text-white  font-light hover:underline  text-sm">
                  Find Inspiration
                </span>
                <span className="text-white  font-light hover:underline  text-sm">
                  Get Hired
                </span>
                <span className="text-white  font-light hover:underline  text-sm">
                  Sell Creative Assets
                </span>
                <span className="text-white  font-light hover:underline  text-sm">
                  Sell Freelance Services
                </span>
              </div>
            </div>
            <div>
              <span className="text-white font-semibold lg:text-lg">
                Find Talent
              </span>
              <div className="flex flex-col gap-3 my-7">
                <span className="text-white  font-light hover:underline  text-sm">
                  Post a Job
                </span>
                <span className="text-white  font-light hover:underline  text-sm">
                  Graphic Designers
                </span>
                <span className="text-white  font-light hover:underline  text-sm">
                  Photographers
                </span>
                <span className="text-white  font-light hover:underline  text-sm">
                  Video Editors
                </span>
                <span className="text-white  font-light hover:underline  text-sm">
                  Web Designers
                </span>
                <span className="text-white  font-light hover:underline  text-sm">
                  Illustrators
                </span>
              </div>
            </div>
            <div>
              <span className="text-white font-semibold lg:text-lg">
                Behance
              </span>
              <div className="flex flex-col gap-3 my-7">
                <span className="text-white  font-light hover:underline  text-sm">
                  About Behance
                </span>
                <span className="text-white  font-light hover:underline  text-sm">
                  Adobe Portfolio
                </span>
                <span className="text-white  font-light hover:underline  text-sm">
                  Download the App
                </span>
                <span className="text-white  font-light hover:underline  text-sm">
                  Blog
                </span>
                <span className="text-white  font-light hover:underline  text-sm">
                  Careers
                </span>
                <span className="text-white  font-light hover:underline  text-sm">
                  Help Center
                </span>
                <span className="text-white  font-light hover:underline  text-sm">
                  Contact Us
                </span>
                <span className="text-white  font-light hover:underline  text-sm">
                  Login
                </span>
              </div>
            </div>
            <div>
              <span className="text-white font-semibold lg:text-lg">
                Social
              </span>
              <div className="flex flex-col gap-3 my-7">
                <div className="flex gap-2 items-center">
                  <img className="size-4" src={insta} alt="" />
                  <span className="text-white  font-light hover:underline  text-sm">
                    Instagram
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <img className="size-4" src={Twitter} alt="" />
                  <span className="text-white  font-light hover:underline  text-sm">
                    Twitter
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <img className="size-4" src={Pinterest} alt="" />
                  <span className="text-white  font-light hover:underline  text-sm">
                    Pinterest
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <img className="size-4" src={Facebook} alt="" />
                  <span className="text-white  font-light hover:underline  text-sm">
                    Facebook
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <img className="size-4" src={LinkedIn} alt="" />
                  <span className="text-white  font-light hover:underline  text-sm">
                    LinkedIn
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t  mx-15 border-[#e8e8e8] ">
          <div className="flex  flex-col items-center lg:flex-row   justify-between gap-4 py-5">
            <div className=" flex flex-col items-center lg:flex-row gap-3">
              <img className=" w-20" src={adobe} alt="" />
              <span className="text-white text-sm">
                © 2025 Adobe Inc. All rights reserved.
              </span>
            </div>
            <div className="flex flex-col lg:flex-row items-center xl:items-start gap-5 xl:gap-10">
              <div className="flex *:text-white  *:text-sm gap-3">
                <span>English</span>
                <span className="hover:underline">TOU</span>
                <span className="hover:underline">Praivacy</span>
                <span className="hover:underline">Community</span>
              </div>
              <span className="text-sm text-white underline">
                Cookie preferences
              </span>
              <span className="text-sm text-white hover:underline">
                Do not sell or share my personal information
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Foter;
