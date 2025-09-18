import axios from "axios";
import * as Icons from "lucide-react";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DynamicIcon = ({ name, size = 24, color = "black" }) => {
  const IconComponent = Icons[name]; // آیکونی که میخوای
  if (!IconComponent) return null; // اگر آیکون وجود نداشت
  return React.createElement(IconComponent, { size, color });
};

function Explor() {
  const [explor, setExplor] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/Explor")
      .then((result) => {
        setExplor(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5  p-1 mx-4  mb-10">
      {explor.map((item) => (
        <Link to={`ExplorPage/${item.id}`} key={item.id}>
          <div className="w-full p-2" key={item.id}>
            <img className="rounded-md w-full" src={item.img} alt="" />
            <div className="flex justify-between py-1 gap-3">
              <div>
                <span className="font-medium text-sm">{item.name}</span>
                <p className="text-xs text-[#505050]">{item.pragraph}</p>
              </div>
              <div className="flex items-start  pt-1 gap-2">
                <div className="flex items-center gap-1">
                  <DynamicIcon name={item.icon} size={14} color="#505050" />
                  <p className="font-medium text-xs">{item.veiu}</p>
                </div>
                <div className="flex  items-center gap-1">
                  <DynamicIcon name={item.icons} size={13} color="#505050" />
                  <p className="text-xs font-semibold">{item.like}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default Explor;
