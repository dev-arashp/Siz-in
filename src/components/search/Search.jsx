import { SlidersHorizontal } from "lucide-react";
import { Search } from "lucide-react";
import { ChevronDown } from "lucide-react";
import img from "../../../public/img/svgexport-14.svg";
import imgDown from "../../../public/img/svgexport-15.svg";
import imgaplod from "../../../public/img/svgexport-13.svg";

function SearchBox() {
  return (
    <div className="flex mx-5 items-center gap-3 mt-2 ">
      <div className="px-5 rounded-full py-2 flex gap-2 border border-[#e8e8e8]">
        <SlidersHorizontal className="text-[#505050]" />
        <span className="hidden sm:flex">Filter</span>
      </div>

      <div className="w-full flex items-center rounded-full border px-3 pr-8 bg-[#f9f9f9]  border-[#e8e8e8]">
        <Search className="text-[#505050]" />
        <input
          type="text"
          placeholder="Search Behance..."
          className="border-none w-full ring-0 rounded-md bg-[#f9f9f9] text-[#505050]"
        />
        <div className="flex items-center gap-3">
          <span className="text-sm text-[#505050] hidden sm:flex lg:bg-white lg:px-4 lg:py-1 lg:rounded-full lg:border border-[#e8e8e8]">
            Projects
          </span>
          <span className="text-sm hidden lg:flex text-[#505050]">People</span>
          <span className="text-sm hidden xl:flex text-[#505050]">Assets</span>
          <span className="text-sm hidden xl:flex text-[#505050] border-r border-[#e8e8e8] pr-3">
            Images
          </span>
          <img className="hidden xl:flex" src={imgaplod} alt="" />
          <span className="text-sm hidden lg:flex xl:hidden text-[#505050]">
            More
          </span>
          <ChevronDown className="text-[#505050] xl:hidden" />
        </div>
      </div>

      <div className=" hidden sm:flex">
        <img src={img} alt="" />
        <img className="rotate-90 size-5" src={imgDown} alt="" />
      </div>
    </div>
  );
}
export default SearchBox;
