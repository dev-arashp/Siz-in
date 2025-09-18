import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaApple,
  FaArrowDown,
  FaCirclePlus,
  FaFacebookF,
  FaLocationDot,
  FaMessage,
  FaRegCopyright,
} from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import img from "/img/explorPage/poster_4da5a1bf-9f71-49a9-8692-9d8ac527327d.jpeg";
import { MdEmail } from "react-icons/md";
import { BiError, BiSolidLike } from "react-icons/bi";
import { IoEye } from "react-icons/io5";
import imgPhotoshop from "/img/explorPage/Photoshop.png";
import ps from "/img/explorPage/ps.png";
import AfterEffect from "/img/explorPage/After Effects.jpg";
import Ae from "/img/explorPage/ae.png";
import premiere from "/img/explorPage/Premiere Pro.jpg";
import Pr from "/img/explorPage/pr.png";
import MotionGraphics from "/img/explorPage/Motion Graphics.jpg";
import Animation from "/img/explorPage/Animation.jpg";
import DMotion from "/img/explorPage/3D Motion.jpg";

import GlareHovers from "../animeshon/hover";
import GlareHover1 from "../animeshon/Hover2";

function Comments() {
  const [comments, setComments] = useState([]);
  const [isShow, setIsShow] = useState(false);

  const [defultComments, setDefaultComments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/Comments")
      .then((result) => {
        setComments(result.data);
        setDefaultComments(result.data.slice(1, 11));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(comments);
  console.log(defultComments);

  return (
    <div className="mx-10 flex gap-5 mb-20">
      <div className="p-8 w-3/4 border border-[#e8e8e8] h-fit rounded-xl">
        {/* بخش بالای ثابت */}
        <div className="flex flex-col gap-4 border-b border-dashed border-[#e8e8e8] pb-8">
          <span className="text-3xl font-extrabold">
            Sign up to join the conversation
          </span>
          <p className="font-light ">
            Add your feedback for Transparent House’s project
            <br /> by signing in or signing up.
          </p>
          <div className="flex items-center gap-3">
            <button className="bg-blue-600 px-5 py-1.5 text-white rounded-full">
              Sign Up With Email
            </button>
            <span className="text-gray-500">or</span>
            <button className="text-2xl border border-[#e8e8e8] px-1.5 py-1.5  rounded-full">
              <FaApple className="text-black" />
            </button>
            <button className="bg-[#4861a3] py-2 rounded-full px-2">
              <FaFacebookF className="text-white  text-lg" />
            </button>
            <button className="border border-[#e8e8e8] px-2 py-2 rounded-full">
              <FcGoogle className="text-xl" />
            </button>
          </div>
        </div>

        {/* لیست کامنت‌ها */}
        <div className="mt-6 flex flex-col gap-4">
          {isShow
            ? comments.map((comment) => (
                <div
                  key={comment.id}
                  className="flex items-center gap-4 border-b border-dashed border-[#e8e8e8] pb-4"
                >
                  <img
                    className="object-cover size-12 rounded-full"
                    src={comment.imgProfile}
                    alt={comment.img}
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{comment.name}</span>
                      <p className="text-stone-500 text-xs ">{comment.date}</p>
                    </div>
                    <div>
                      <span className="text-stone-600 text-sm">
                        {comment.comment}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            : defultComments.map((comment) => (
                <div
                  key={comment.id}
                  className="flex items-center gap-4 border-b border-dashed border-[#e8e8e8] pb-4"
                >
                  <img
                    className="object-cover size-12 rounded-full"
                    src={comment.imgProfile}
                    alt={comment.img}
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{comment.name}</span>
                      <p className="text-stone-500 text-xs ">{comment.date}</p>
                    </div>
                    <div>
                      <span className="text-stone-600 text-sm">
                        {comment.comment}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

          <span
            onClick={() => setIsShow(!isShow)}
            className="flex items-center gap-2 text-blue-600 mx-auto mt-4"
          >
            {isShow ? (
              <span className="flex items-center gap-2 cursor-pointer">
                collapse Comments <FaArrowDown className="rotate-180" />
              </span>
            ) : (
              <span className="flex items-center gap-2 cursor-pointer">
                See More Comments <FaArrowDown />
              </span>
            )}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-1/4 ">
        <div className="border flex flex-col gap-3  border-[#e8e8e8] rounded-xl p-7">
          <span className="text-xs font-semibold text-stone-500 ">OWNER</span>
          <div className="flex items-center gap-3">
            <img
              className="size-15 object-cover rounded-full"
              src={img}
              alt=""
            />
            <div className="flex flex-col gap-1">
              <div className="flex gap-2">
                <span>ArashPourkhanali</span>
                <div className="bg-blue-700 text-white w-fit px-3 rounded-md font-semibold flex items-center text-xs">
                  Pro
                </div>
              </div>
              <div className="flex items-center gap-1">
                <FaLocationDot className="text-stone-400" />
                <span className="text-stone-400 text-sm font-semibold">
                  Iran , Tehran
                </span>
              </div>
            </div>
          </div>
          <div className="my-2 flex flex-col gap-2">
            <div>
              <GlareHovers
                glareColor="#ffffff"
                glareOpacity={0.2}
                glareAngle={-30}
                glareSize={250}
                transitionDuration={1400}
                playOnce={false}
              >
                <button className="bg-blue-600 flex text-white items-center w-full justify-center gap-2 py-2 rounded-full font-semibold">
                  <FaCirclePlus />
                  Follow
                </button>
              </GlareHovers>
            </div>

            <div>
              <GlareHover1
                glareColor="#155dfc"
                glareOpacity={0.1}
                glareAngle={-30}
                glareSize={200}
                transitionDuration={1200}
                playOnce={false}
              >
                <button className=" flex items-center justify-center gap-2 text-blue-600 font-semibold w-full rounded-full py-2">
                  <MdEmail />
                  Message
                </button>
              </GlareHover1>
            </div>
          </div>
          <div className=" border border-[#e8e8e8] p-7 rounded-xl flex flex-col gap-4">
            <span className="text-md font-semibold">
              Logitech G Pro Racing Wheel
            </span>
            <div className="flex gap-4">
              <div className="flex items-center gap-1 text-stone-500">
                <BiSolidLike />
                <span>271</span>
              </div>
              <div className="flex items-center gap-1 text-stone-500">
                <IoEye />
                <span>1.7K</span>
              </div>
              <div className="flex items-center gap-1 text-stone-500">
                <FaMessage />
                <span>15</span>
              </div>
            </div>
            <p className="text-xs text-stone-500">Published: August 7th 2025</p>
          </div>
          <div className=" border border-[#e8e8e8] rounded-xl p-7 flex  flex-col gap-4">
            <span className="text-stone-500 font-semibold text-sm">Tools</span>

            <div className="flex flex-col gap-2 ">
              <div className="relative flex items-center justify-center ">
                {/* عکس بک‌گراند */}
                <img
                  className="object-cover h-12 w-full rounded-lg brightness-45"
                  src={imgPhotoshop}
                  alt=""
                />

                {/* لایه متن و آیکن روی عکس */}
                <div className="absolute inset-0 flex items-center justify-center gap-2">
                  <img className="size-7" src={ps} alt="Photoshop Icon" />
                  <span className="text-white font-extrabold">Photoshop</span>
                </div>
              </div>
              <div className="relative flex items-center justify-center ">
                {/* عکس بک‌گراند */}
                <img
                  className="object-cover h-12 w-full rounded-lg brightness-45"
                  src={AfterEffect}
                  alt=""
                />

                {/* لایه متن و آیکن روی عکس */}
                <div className="absolute inset-0 flex items-center justify-center gap-2">
                  <img className="size-7" src={Ae} alt="Photoshop Icon" />
                  <span className="text-white font-extrabold">
                    After Effects
                  </span>
                </div>
              </div>
              <div className="relative flex items-center justify-center ">
                {/* عکس بک‌گراند */}
                <img
                  className="object-cover h-12 w-full rounded-lg brightness-30"
                  src={premiere}
                  alt=""
                />

                {/* لایه متن و آیکن روی عکس */}
                <div className="absolute inset-0 flex items-center justify-center gap-2">
                  <img className="size-7" src={Pr} alt="Photoshop Icon" />
                  <span className="text-white font-extrabold">
                    Premiere Pro
                  </span>
                </div>
              </div>
            </div>
            <span className="font-semibold text-sm">
              Maxon Cinema 4D, SideFX Houdini, <br /> Redshift Render
            </span>
            <span className="text-sm font-semibold text-stone-500">
              Creative Fields
            </span>
            <div className="flex flex-col gap-2 ">
              <div className="relative flex items-center justify-center  hover:duration-1000">
                {/* عکس بک‌گراند */}
                <img
                  className="object-cover h-12 w-full  rounded-lg brightness-90"
                  src={MotionGraphics}
                  alt=""
                />

                {/* لایه متن و آیکن روی عکس */}
                <div className="absolute inset-0 flex items-center justify-center gap-2">
                  <span className="text-white font-extrabold">
                    Motion Graphics
                  </span>
                </div>
              </div>
              <div className="relative flex items-center justify-center ">
                {/* عکس بک‌گراند */}
                <img
                  className="object-cover h-12 w-full rounded-lg brightness-45"
                  src={Animation}
                  alt=""
                />

                {/* لایه متن و آیکن روی عکس */}
                <div className="absolute inset-0 flex items-center justify-center gap-2">
                  <span className="text-white font-extrabold">Animation</span>
                </div>
              </div>
              <div className="relative flex items-center justify-center ">
                {/* عکس بک‌گراند */}
                <img
                  className="object-cover h-12 w-full rounded-lg brightness-30"
                  src={DMotion}
                  alt=""
                />

                {/* لایه متن و آیکن روی عکس */}
                <div className="absolute inset-0 flex items-center justify-center gap-2">
                  <span className="text-white font-extrabold">3D Motion</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" border border-[#e8e8e8] p-7 rounded-xl flex gap-2 flex-wrap">
            <button className=" border border-[#e8e8e8] px-3 py-1 rounded-full">
              Logitech
            </button>
            <button className=" border border-[#e8e8e8] px-3 py-1 rounded-full">
              Racing
            </button>
            <button className=" border border-[#e8e8e8] px-3 py-1 rounded-full">
              Gaming
            </button>
            <button className=" border border-[#e8e8e8] px-3 py-1 rounded-full">
              industrial design
            </button>
            <button className=" border border-[#e8e8e8] px-3 py-1 rounded-full">
              3d modeling
            </button>
            <button className=" border border-[#e8e8e8] px-3 py-1 rounded-full">
              visualization
            </button>
            <button className=" border border-[#e8e8e8] px-3 py-1 rounded-full">
              PlayStation 5
            </button>
            <button className=" border border-[#e8e8e8] px-3 py-1 rounded-full">
              3д
            </button>
            <button className=" border border-[#e8e8e8] px-3 py-1 rounded-full">
              product design
            </button>
            <button className=" border border-[#e8e8e8] px-3 py-1 rounded-full">
              cgı
            </button>
          </div>
          <div className="flex justify-between mx-1">
            <span className="text-xs text-stone-500 flex items-center gap-1">
              <FaRegCopyright />
              All Rights Reserved
            </span>
            <span className="text-xs text-stone-500 flex items-center gap-1">
              <BiError />
              Report
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
