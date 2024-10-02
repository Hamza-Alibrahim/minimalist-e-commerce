import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  image: StaticImageData;
  reverse?: boolean;
}

const ShopNow = ({ title, image, reverse }: Props) => {
  return (
    <section className="pb-[10rem]">
      <div
        className={`css-container flex ${
          reverse && "flex-row-reverse"
        } h-[40rem]`}
      >
        <div className="px-[11rem] max-sm:px-[5rem] flex items-center justify-center bg-[#e9e9e9] w-1/2 max-sm:w-full">
          <div>
            <h1 className="text-[3.2rem] font-semibold leading-[normal] mb-[1.5rem]">
              {title}
            </h1>
            <p className="text-[1.8rem] ">
              RAOUF Products are all made to standard sizes so that you can mix
              and match them freely.
            </p>
            <Link href="/categories/all">
              <button className="text-[1.7rem] font-bold text-white bg-black border-2 border-black hover:bg-white hover:text-black transition-colors duration-300 uppercase mt-[2rem] p-[1rem]">
                Shop now
              </button>
            </Link>
          </div>
        </div>
        <Image
          className="w-1/2 h-full object-cover max-sm:hidden"
          src={image}
          alt="Image"
        />
      </div>
    </section>
  );
};
export default ShopNow;
