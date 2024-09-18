import Image from "next/image";
import Img1 from "../imgs/hero1.jpg";
import Img2 from "../imgs/hero2.jpg";
import Img3 from "../imgs/hero3.jpg";
import Img4 from "../imgs/hero4.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="pt-[12rem]">
      <div className="css-container grid-box">
        <Link
          href="/categories/furnitures"
          className="relative w-full h-full one"
        >
          <div className="absolute left-0 top-0 w-full h-full bg-[rgb(0,0,0,.3)] hover:bg-[rgb(0,0,0,.5)] transition-colors duration-300 ease-in"></div>
          <Image className="w-full h-full object-cover" src={Img1} alt="Img1" />
          <h1 className="absolute bottom-[2rem] left-[2rem] z-10 text-white text-[3.8rem] font-semibold leading-[normal]">
            Live Comfortably
          </h1>
        </Link>
        <Link
          href="/categories/skin-care"
          className="relative w-full h-full two"
        >
          <div className="absolute left-0 top-0 w-full h-full bg-[rgb(0,0,0,.3)] hover:bg-[rgb(0,0,0,.5)] transition-colors duration-300 ease-in"></div>
          <Image className="w-full h-full object-cover" src={Img2} alt="Img2" />
          <h1 className="absolute bottom-[2rem] left-[2rem] z-10 text-white text-[3.8rem] font-semibold leading-[normal]">
            Skincare
          </h1>
        </Link>
        <Link
          href="/categories/kitchen"
          className="relative w-full h-full three"
        >
          <div className="absolute left-0 top-0 w-full h-full bg-[rgb(0,0,0,.3)] hover:bg-[rgb(0,0,0,.5)] transition-colors duration-300 ease-in"></div>
          <Image className="w-full h-full object-cover" src={Img3} alt="Img3" />
          <h1 className="absolute bottom-[2rem] left-[2rem] z-10 text-white text-[3.8rem] font-semibold leading-[normal]">
            Kitchen
          </h1>
        </Link>
        <Link
          href="/categories/electronics"
          className="relative w-full h-full four"
        >
          <div className="absolute left-0 top-0 w-full h-full bg-[rgb(0,0,0,.3)] hover:bg-[rgb(0,0,0,.5)] transition-colors duration-300 ease-in"></div>
          <Image className="w-full h-full object-cover" src={Img4} alt="Img4" />
          <h1 className="absolute bottom-[2rem] left-[2rem] z-10 text-white text-[3.8rem] font-semibold leading-[normal]">
            Electronics
          </h1>
        </Link>
      </div>
    </main>
  );
};
export default Hero;
