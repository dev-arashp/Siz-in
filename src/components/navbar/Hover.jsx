import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

function ExplorPageCard({ imgBackgroundProfile, imgProf, explor }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* اسم هاور */}
      <span
        className="cursor-pointer font-bold text-lg"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        Arash Pourkhanali
      </span>

      {/* کارت باز شونده */}
      {isOpen && (
        <div className="mt-15 absolute w-fit h-fit bg-gray-400/60 backdrop-blur-md shadow-2xl rounded-xl ml-5 transition-all duration-300">
          <img
            className="w-80 h-35 object-cover relative rounded-t-xl"
            src={imgBackgroundProfile}
            alt=""
          />
          <div className="w-fit flex items-end pt-9 ml-30">
            <img
              className="w-20 h-20 object-cover rounded-full bg-[#e8e8e8] p-0.5 absolute"
              src={imgProf}
              alt=""
            />
          </div>
          <div className="text-center py-3">
            <div>
              <span className="font-semibold">{explor?.name}</span>
              <div className="flex items-center justify-center gap-2">
                <FaLocationDot className="text-gray-500" />
                <span className="text-gray-700">iran / karaj</span>
              </div>
            </div>
            <div className="flex gap-2 mt-3 justify-between px-2">
              <div className="flex flex-col pr-2 border-r border-gray-700">
                <span className="font-medium">62.2K</span>
                <span className="text-sm font-medium text-gray-700">
                  Appreciations
                </span>
              </div>
              <div className="flex flex-col pr-2 border-r border-gray-500">
                <span className="font-medium">16.7K</span>
                <span className="text-sm font-medium text-gray-700">
                  Followers
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">471.9K</span>
                <span className="text-sm font-medium text-gray-700">
                  project views
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExplorPageCard;
