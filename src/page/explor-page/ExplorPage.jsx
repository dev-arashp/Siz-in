/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { BsTools } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IoFolderOpen } from "react-icons/io5";
import { RiShare2Line } from "react-icons/ri";
import { Link, useParams } from "react-router-dom";
import imgBackgroundProfile from "/img/explorPage/large_219836cf-5b44-42a1-bcb4-927fc7369a58.webp";
import imgProf from "/img/explorPage/poster_4da5a1bf-9f71-49a9-8692-9d8ac527327d.jpeg";
import { FaLocationDot } from "react-icons/fa6";
import Comments from "../../components/comments/Comments";
import Foter from "../../components/footer/Foter";
import CountUp from "../../components/animeshon/Number";

function ExplorPage() {
  const params = useParams();
  const [explor, setExplor] = useState({});
  const [showCard, setShowCard] = useState(false);
  const [isFollow, setIsFollow] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/Explor/${params?.id}`)
      .then((result) => {
        setExplor(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params]);
  console.log(explor);

  return (
    <div className="  pt-20">
      <div className=" pb-3 px-10 fixed bg-white/60   top-14  backdrop-blur-md w-full  flex justify-between items-end pt-3">
        <div className="flex items-center gap-2 ">
          <Link to={`/ProfileUser/${explor.id}`}>
            <img
              className="size-15 object-cover rounded-full"
              src={explor && explor.avatar}
              alt="avatar"
            />
          </Link>

          <div className="flex flex-col gap-1 justify-start ">
            <span className="text-sm font-semibold  ">
              {explor && explor.idUser}
            </span>
            <div className=" flex items-center gap-5">
              <div
                onMouseEnter={() => setShowCard(true)}
                onMouseLeave={() => setShowCard(false)}
                className="reletive"
              >
                <span className="text-xs font-semibold">
                  {explor && explor.name}
                </span>
                {showCard && (
                  <div className="mt-5 absolute -ml-17 w-fit h-fit bg-gray-700 backdrop-blur-2xl  pb-2 shadow-2xl  rounded-xl ">
                    <img
                      className="w-80 h-35 object-cover relative rounded-t-xl"
                      src={imgBackgroundProfile}
                      alt=""
                    />

                    <div className=" w-fit   flex items-end  pt-9  ml-30  ">
                      <img
                        className="w-20 h-20 object-cover rounded-full bg-[#e8e8e8] p-0.5  absolute "
                        src={imgProf}
                        alt=""
                      />
                    </div>
                    <div className="text-center py-3">
                      <div>
                        <span className=" font-semibold text-white">
                          {explor && explor.name}
                        </span>
                        <div className="flex items-center justify-center gap-2">
                          <FaLocationDot className="text-gray-400" />
                          <span className="text-gray-400">iran / karaj</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-3 justify-between px-2">
                        <div className="flex flex-col pr-2 border-r border-gray-400">
                          <span className="font-semibold text-white">
                            <CountUp
                              from={0}
                              to={"430000"}
                              separator=","
                              direction="up"
                              duration={0.2}
                              className="count-up-text"
                            />
                          </span>
                          <span className="text-sm font-medium text-gray-400">
                            Appreciations
                          </span>
                        </div>
                        <div className="flex flex-col pr-2 border-r border-gray-400">
                          <span className="font-semibold text-white">
                            {isFollow ? (
                              <CountUp
                                from={0}
                                to={"17000"}
                                separator=","
                                direction="up"
                                duration={0.2}
                                className="count-up-text"
                              />
                            ) : (
                              <CountUp
                                from={0}
                                to={"16999"}
                                separator=","
                                direction="up"
                                duration={0.2}
                                className="count-up-text"
                              />
                            )}
                          </span>
                          <span className="text-sm font-medium text-gray-400">
                            Followers
                          </span>
                        </div>
                        <div className="flex flex-col ">
                          <span className="font-semibold text-white ">
                            <CountUp
                              from={0}
                              to={"470900"}
                              separator=","
                              direction="up"
                              duration={0.2}
                              className="count-up-text"
                            />
                          </span>
                          <span className="text-sm font-medium text-gray-400">
                            project views
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button
                onClick={() => setIsFollow(!isFollow)}
                className={`text-sm font-medium  ${
                  isFollow
                    ? "text-blue-600 border border-blue-600"
                    : "  bg-blue-600 text-white"
                } w-fit px-5 rounded-md `}
              >
                {isFollow ? "Followed" : "Follow"}
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex flex-col items-center gap-1">
            <button className=" border border-gray-600 px-1.5 py-1.5  w-fit rounded-full ">
              <HiOutlineMail className="size-6 text-gray-600" />
            </button>
            <span className="text-xs font-semibold text-gray-600">message</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <button className=" border border-gray-600 px-1.5 py-1.5  w-fit rounded-full ">
              <BsTools className="size-6 text-gray-600" />
            </button>
            <span className="text-xs font-semibold text-gray-600">Tools</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <button className=" border border-gray-600 px-1.5 py-1.5  w-fit rounded-full ">
              <IoFolderOpen className="size-6 text-gray-600" />
            </button>
            <span className="text-xs font-semibold text-gray-600">Save</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <button className=" border border-gray-600 px-1.5 py-1.5  w-fit rounded-full ">
              <RiShare2Line className="size-6 text-gray-600" />
            </button>
            <span className="text-xs font-semibold text-gray-600">Share</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-20">
        <div className="flex gap-2 px-10">
          <img className=" rounded-lg" src={explor && explor.img1} alt="" />
          <img className=" rounded-lg" src={explor && explor.img2} alt="" />
        </div>
        <div className="flex gap-2 rounded-lg px-10">
          <img
            className="rounded-lg object-cover"
            src={explor && explor.img3}
            alt=""
          />

          <img
            className="rounded-lg object-cover"
            src={explor && explor.img4}
            alt=""
          />

          <img
            className="rounded-lg object-cover"
            src={explor && explor.img5}
            alt=""
          />
        </div>
        <div className="px-10">
          <img className="rounded-lg" src={explor && explor.img6} alt="" />
        </div>
        <div className="flex gap-2 px-10">
          <img className="rounded-lg" src={explor && explor.img7} alt="" />
          <img className="rounded-lg" src={explor && explor.img8} alt="" />
          <img className="rounded-lg" src={explor && explor.img9} alt="" />
          <img className="rounded-lg" src={explor && explor.img10} alt="" />
        </div>
      </div>
      <div>
        <div className="p-8 leading-8 border border-[#e8e8e8] mx-10 flex flex-col gap-4 rounded-xl my-10">
          <span className="text-3xl font-extrabold ">Capshen :</span>
          <p className="text-gray-500 font-medium">
            {explor && explor.capshen}
          </p>
        </div>
      </div>

      <div>
        <Comments />
      </div>
      <Foter />
    </div>
  );
}

export default ExplorPage;
