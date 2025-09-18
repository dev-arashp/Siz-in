import { Star } from "lucide-react";
import * as Icons from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "axios";

function ImgBox() {
  const DynamicIcon = ({ name, size = 24, color = "black" }) => {
    const IconComponent = Icons[name]; // آیکونی که میخوای
    if (!IconComponent) return null; // اگر آیکون وجود نداشت
    return React.createElement(IconComponent, { size, color });
  };

  const [imgBox, setImgBox] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/ImgBox")
      .then((result) => {
        setImgBox(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="flex p-5 gap-5 overflow-x-scroll  imgBox">
        {imgBox.map((item) => (
          <div key={item.id} className=" relative  group">
            <div className="flex gap-2  items-center absolute   inset-0 justify-center font-medium z-10">
              {/* <Star className="text-white size-5" /> */}
              <DynamicIcon name={item.icon} size={16} color="#fff" />
              <img src={item.icon} alt="" />
              <span className=" text-white text-sm  ">{item.title} </span>
            </div>
            <img
              className="h-11 min-w-45  rounded-lg object-cover brightness-30 relative z-5 group-hover:brightness-45 duration-300"
              src={item.imgeUrl}
              alt=""
            />
          </div>
        ))}
      </div>
    </>
  );
}
export default ImgBox;
