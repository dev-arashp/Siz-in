import axios from "axios";
import { useEffect, useState } from "react";

import { FaCirclePlus, FaLocationDot } from "react-icons/fa6";

import GlareHover2 from "../../../components/animeshon/hoversbtn";
import GlareHover3 from "../../../components/animeshon/HoverBtnTwo";
import { MdEmail } from "react-icons/md";
import GlareHover1 from "../../../components/animeshon/Hover2";
import CountUp from "../../../components/animeshon/Number";
import RotatingText from "../../../components/animeshon/RotatingText";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import LogoLoop from "../../../components/logo-loop/LogoLoop";
import Foter from "../../../components/footer/Foter";
import { Link } from "react-router-dom";

const techLogos = [
  { node: <SiReact size={50} />, title: "React", href: "https://react.dev" },
  {
    node: <SiNextdotjs size={50} />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiTypescript size={50} />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss size={50} />,
    title: "Tailwind",
    href: "https://tailwindcss.com",
  },
];

function ProfileUser() {
  const [user, setUser] = useState(null);
  const [Follow, setFollow] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/ProfileUser")
      .then((res) => {
        // بررسی ساختار داده
        const u = res.data.ProfileUser
          ? res.data.ProfileUser.find((item) => item.id === 1)
          : res.data.find((item) => item.id === 1);
        setUser(u);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div>
      <div className="flex w-full">
        <div>
          <img
            className="w-full object-cover h-75 absolute"
            src={user.bgProfileUser}
            alt=""
          />
          <div className="px-10 flex flex-col  items-center gap-5 w-fit ">
            <div className="pt-60 flex flex-col  items-center gap-2 border-b border-dashed border-[#e8e8e8] pb-5 w-full">
              <img
                className="size-30 object-cover rounded-full relative p-1 bg-white"
                src={user.avatar}
                alt=""
              />
              <span className="text-lg font-semibold">{user.name}</span>
            </div>
            <div className="flex flex-col gap-2 border-b border-dashed border-[#e8e8e8] pb-5">
              <div onClick={() => setFollow(!Follow)}>
                {Follow ? (
                  <div>
                    <GlareHover3
                      glareColor="#155dfc"
                      glareOpacity={0.2}
                      glareAngle={-30}
                      glareSize={250}
                      transitionDuration={1400}
                      playOnce={false}
                    >
                      <button className=" flex text-blue-600 items-center w-full justify-center gap-2 py-2 rounded-full font-semibold">
                        Followed
                      </button>
                    </GlareHover3>
                  </div>
                ) : (
                  <div>
                    <GlareHover2
                      glareColor="#ffffff"
                      glareOpacity={0.2}
                      glareAngle={-30}
                      glareSize={250}
                      transitionDuration={1400}
                      playOnce={false}
                    >
                      <button className=" flex text-white items-center w-full justify-center gap-2 py-2 rounded-full font-semibold">
                        <FaCirclePlus />
                        Follow
                      </button>
                    </GlareHover2>
                  </div>
                )}
              </div>
              <div>
                <GlareHover1
                  glareColor="#155dfc"
                  glareOpacity={0.2}
                  glareAngle={-30}
                  glareSize={250}
                  transitionDuration={1400}
                  playOnce={false}
                >
                  <button className=" flex items-center justify-center gap-2 text-blue-600 font-semibold w-full rounded-full py-2">
                    <MdEmail />
                    Message
                  </button>
                </GlareHover1>
              </div>
            </div>
            <div className="w-full px-1 flex flex-col gap-5">
              <div className="w-full flex justify-between items-center border-b border-dashed border-[#e8e8e8] pb-4">
                <span className="font-semibold">Followers :</span>

                {Follow ? (
                  <span className="font-semibold ">
                    <CountUp
                      from={0}
                      to={"17000"}
                      separator=","
                      direction="up"
                      duration={0.2}
                      className="count-up-text"
                    />
                  </span>
                ) : (
                  <span className="font-semibold ">
                    <CountUp
                      from={0}
                      to={"16999"}
                      separator=","
                      direction="up"
                      duration={0.2}
                      className="count-up-text"
                    />
                  </span>
                )}
              </div>
              <div className="w-full flex justify-between items-center border-b border-dashed border-[#e8e8e8] pb-4">
                <span className="font-semibold">Following :</span>
                <div>{user.Following}</div>
              </div>
              <div className="w-full flex justify-between items-center border-b border-dashed border-[#e8e8e8] pb-4">
                <span className="font-semibold">Appreciations :</span>
                <div>{user.Appreciations}</div>
              </div>
              <div className="w-full flex justify-between items-center border-b border-dashed border-[#e8e8e8] pb-4">
                <span className="font-semibold">ProjectViews :</span>
                <div>{user.ProjectViews}</div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-3 border-b border-dashed px-1 border-[#e8e8e8] pb-5">
              <span className="text-sm text-stone-500 font-bold">About Me</span>

              <div className="flex items-center  gap-2  font-semibold">
                Project :
                <RotatingText
                  texts={["Illustrator ", "art director"]}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-blue-600 text-white overflow-hidden    justify-center text-sm items-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>
              <div className="w-full flex justify-between">
                <span className="font-semibold">Contact : </span>
                <span>09963485677</span>
              </div>
            </div>
            <div className="w-full flex items-center gap-2">
              <div className="flex items-center gap-1 font-semibold pb-10">
                <FaLocationDot className="text-stone-500" />
                Location :{" "}
                <span className="font-medium ml-2">Iran , Karaj ,Azimie</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-92 w-full  mx-10 ">
          <div className="flex gap-8 *:font-semibold border-b border-[#e8e8e8]  pl-5">
            <Link to="/ProfilrUser">
              <span className="border-b-2 pb-3">Work</span>
            </Link>

            <Link to="/Moodboards">
              <span className="hover:border-b-2 hover:duration-300 text-stone-500">
                Moodboards
              </span>
            </Link>
            <span className="hover:border-b-2 hover:duration-300 text-stone-500">
              Appreciations
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-8 *:rounded-xl">
            <img src={user.img} alt="" />
            <img src={user.img1} alt="" />
            <img src={user.img2} alt="" />
            <img src={user.img3} alt="" />
            <img src={user.img4} alt="" />
            <img src={user.img5} alt="" />
            <img src={user.img6} alt="" />
            <img src={user.img7} alt="" />
            <img src={user.img8} alt="" />
            <img src={user.img9} alt="" />
            <img src={user.img10} alt="" />
            <img src={user.img11} alt="" />
          </div>
        </div>
      </div>
      <div className="mt-20  mx-5" style={{ height: "200px", padding: "20px" }}>
        <LogoLoop
          logos={techLogos}
          speed={150}
          direction="left"
          gap={40}
          logoHeight={60}
          pauseOnHover
          fadeOut
          fadeOutColor="#fff"
        />
      </div>
      <Foter />
    </div>
  );
}

export default ProfileUser;
