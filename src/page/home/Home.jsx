import TextType from "../../components/text-type/TextType";
import Explor from "../../components/explor/Expelor";
import Foter from "../../components/footer/Foter";
import ImgBox from "../../components/imgbox/ImgBox";
import Navbar from "../../components/navbar/Navbar";
import Sidbar from "../../components/navbar/SideBar";
import Search from "../../components/search/Search";
import SignIn from "../../components/signIn/SignIn";
import DotGrid from "../../components/baner/Baner";
import ExplorPageCard from "../../components/navbar/Hover";

function Home() {
  return (
    <div>
      <Navbar />
      <Sidbar />
      <div className="w-full lg:h-150 relative">
        <DotGrid
          dotSize={6}
          gap={10}
          baseColor="#eee"
          activeColor="#e8e8e8"
          proximity={60}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
          className="absolute hidden  lg:flex pt-20"
        />
        <div className="h-50 z-100 relative  -mt-100 hidden lg:flex items-start justify-center">
          {" "}
          <TextType
            text={[
              "The World’s Best Creators Are On Behance",
              "The World’s Best Creators Are On Behance",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="*:!text-black text-7xl font-bold w-140"
          />
        </div>
      </div>

      <Search />
      <ImgBox />
      <Explor />

      <SignIn />
      <Foter />
      <ExplorPageCard />
    </div>
  );
}

export default Home;
