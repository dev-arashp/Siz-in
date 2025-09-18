import ImgBanner from "../../../public/img/job-header.jpg";
import plus from "../../../public/img/FindJobs/svgexport-11.svg";
import SvgOne from "../../../public/img/FindJobs/svgexport-12 (1).svg";
import imgArow from "../../../public/img/FindJobs/arrow.svg";
import Location from "../../../public/img/FindJobs/svgexport-13.svg";
import { useState } from "react";

function FindJobs() {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      <div className="pt-14 ">
        <div className="flex items-center h-70  justify-center">
          <img className="w-full absolute brightness-50 h-70" src={ImgBanner} />
          <div className="   z-40 text-center ">
            <span className="relative z-50 text-7xl font-bold  text-white">
              Creative Jobs
            </span>
            <p className="text-white text-2xl font-bold">
              Browse and discover your next opportunity
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="px-5 py-5  border-r bg-white border-[#e8e8e8] w-80 h-screen ">
          <button className="bg-blue-600 w-70 py-2 px-3 text-white mb-5 flex  items-center justify-center gap-2 text-sm font-medium  rounded-full">
            <img src={plus} alt="" />
            New Job
          </button>
          <div className="border-t  border-[#e8e8e8] pt-5 flex flex-col gap-3">
            <div className="flex  gap-5" onClick={() => setIsShow(!isShow)}>
              {isShow ? (
                <div className="flex justify-between items-center  w-full">
                  <div className="flex gap-2">
                    <img src={SvgOne} alt="" />
                    <span className="text-sm font-medium text-gray-700">
                      Categories
                    </span>
                  </div>
                  <div>
                    <img className="rotate-90" src={imgArow} alt="" />
                  </div>
                </div>
              ) : (
                <div className="w-full flex flex-col gap-2">
                  <div className="flex justify-between items-center  w-full">
                    <div className="flex gap-2">
                      <img src={SvgOne} alt="" />
                      <span className="text-sm font-medium text-gray-700">
                        Categories
                      </span>
                    </div>
                    <div>
                      <img className="-rotate-90" src={imgArow} alt="" />
                    </div>
                  </div>

                  <div>
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      for="default-radio-1"
                      class="ms-2 text-sm font-medium text-gray-900 "
                    >
                      All
                    </label>
                  </div>
                  <span className="text-xs text-gray-400 font-semibold my-2">
                    POPULAR
                  </span>
                  <div>
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      for="default-radio-1"
                      class="ms-2 text-sm font-medium text-gray-600 "
                    >
                      Logo Design
                    </label>
                  </div>
                  <div>
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      for="default-radio-1"
                      class="ms-2 text-sm font-medium text-gray-600 "
                    >
                      Branding Services
                    </label>
                  </div>
                  <div>
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      for="default-radio-1"
                      class="ms-2 text-xs font-medium text-gray-600 "
                    >
                      Social Media Design
                    </label>
                  </div>
                  <div>
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      for="default-radio-1"
                      class="ms-2 text-sm font-medium text-gray-600 "
                    >
                      Website Design
                    </label>
                  </div>
                  <div>
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      for="default-radio-1"
                      class="ms-2 text-sm font-medium text-gray-600 "
                    >
                      Illustrations
                    </label>
                  </div>
                  <div>
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      for="default-radio-1"
                      class="ms-2 text-sm font-medium text-gray-600 "
                    >
                      Packaging Design
                    </label>
                  </div>
                  <div>
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      for="default-radio-1"
                      class="ms-2 text-sm font-medium text-gray-600 "
                    >
                      Landing Page Design
                    </label>
                  </div>
                  <div>
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      for="default-radio-1"
                      class="ms-2 text-sm font-medium text-gray-600 "
                    >
                      UI/UX Design
                    </label>
                  </div>
                  <div>
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      for="default-radio-1"
                      class="ms-2 text-sm font-medium text-gray-600 "
                    >
                      Architecture & Interior Design
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="border-t border-[#e8e8e8] mt-5 ">
            <div className="mt-5 flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <img src={Location} alt="" />
                <span className="text-gray-600 text-sm font-semibold">
                  Location
                </span>
              </div>
              <img className="rotate-90" src={imgArow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FindJobs;
