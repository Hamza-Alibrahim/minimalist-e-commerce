/* eslint-disable react/no-unescaped-entities */
"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartProvider";

interface Props {
  id: number;
  name: string;
  price: number;
  image: StaticImageData[];
  category: string;
  description: string;
  texture: string;
  weight: string;
  size: string;
}

const ProductDetails = (product: Props) => {
  const { addToCart } = useShoppingCart();
  const [imageIndex, setImageIndex] = useState(0);
  const [amount, setAmount] = useState(1);
  const productToPass = {
    name: product.name,
    price: product.price,
    img: product.image[0],
  };

  return (
    <section className="pt-[14rem]">
      <div className="css-container">
        <div className="flex max-lg:flex-col max-lg:gap-[3rem] relative mb-[10rem] max-lg:mb-[6rem]">
          <h1 className="text-[3.5rem] max-xsm:text-[2.5rem] font-bold absolute top-[.8rem] left-1/2 -translate-x-1/2 whitespace-nowrap">
            {product.name}
          </h1>
          <div className="w-1/2 max-lg:w-full pt-[5rem]">
            <div className="flex justify-center">
              <Image
                className="h-full w-3/4 object-cover"
                src={product.image[imageIndex]}
                alt="Product Image"
              />
            </div>
            <div className="flex justify-center gap-[1.2rem] py-[3rem] px-[2rem]">
              {product.image.map((img, i) => {
                return (
                  <Image
                    className="w-[22%] h-[20%] object-cover cursor-pointer hover:shadow-img hover:outline-[1px] hover:outline-[#0000004d] outline"
                    onMouseEnter={() => setImageIndex(i)}
                    key={i}
                    src={img}
                    alt=""
                  />
                );
              })}
            </div>
          </div>
          <div className="w-1/2 max-lg:w-full h-full pt-[3rem] pb-[4rem] px-[2rem] lg:pt-[16rem] lg:px-[5rem] lg:pb-[8rem] bg-[#e5e5e5]">
            <p className="text-[2rem]  mb-[5rem]">{product.description}</p>
            <div className="flex max-sm:flex-col max-sm:gap-[2rem] justify-between items-center mb-[5rem]">
              <span className="text-[2.5rem] font-semibold leading-[normal]">
                Quantity
              </span>
              <div className="border border-black flex">
                <button
                  onClick={() =>
                    setAmount((prev) => (prev > 1 ? prev - 1 : prev))
                  }
                  className="w-[5.5rem] h-[5.5rem] text-[3rem] cursor-pointer bg-white transition-colors hover:bg-transparent duration-300 border-r-[1px] border-black"
                >
                  -
                </button>
                <p className="w-[5.5rem] h-[5.5rem] text-[2.5rem] flex justify-center items-center">
                  {amount}
                </p>
                <button
                  onClick={() => setAmount((prev) => prev + 1)}
                  className="w-[5.5rem] h-[5.5rem] text-[3rem] cursor-pointer bg-white transition-colors hover:bg-transparent duration-300 border-l-[1px] border-black"
                >
                  +
                </button>
              </div>
              <span className="text-[2.5rem] font-semibold leading-[normal]">
                {(product.price * amount).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
                $
              </span>
            </div>
            <div className="flex max-[500px]:flex-col gap-[2rem]">
              <button
                onClick={() => addToCart(product.id, productToPass, amount)}
                className="text-[1.6rem] font-bold leading-[normal] w-1/2 h-[5.5rem] cursor-pointer uppercase transition-colors max-[500px]:w-full border-2 border-black hover:bg-black hover:text-white duration-300"
              >
                add to cart
              </button>
              <button className="text-[1.6rem] font-bold leading-[normal] w-1/2 h-[5.5rem] cursor-pointer uppercase transition-colors max-[500px]:w-full bg-[#b6002c] text-white hover:bg-transparent hover:text-[#b6002c] border-2 border-[#b6002c] duration-300">
                buy now
              </button>
            </div>
          </div>
        </div>
        <div className="flex max-sm:flex-col justify-between gap-[3rem] sm:h-[10rem] mb-[10rem] max-sm:mb-[8rem]">
          <div className="flex justify-between flex-col w-full p-[2rem] bg-[#e5e5e5]">
            <h3 className="text-[2.2rem] font-semibold leading-[normal]">
              Texture:
            </h3>
            <p className="text-[1.65rem]  leading-[normal]">
              {product.texture}
            </p>
          </div>
          <div className="flex justify-between flex-col w-full p-[2rem] bg-[#e5e5e5]">
            <h3 className="text-[2.2rem] font-semibold leading-[normal]">
              Weight:
            </h3>
            <p className="text-[1.65rem]  leading-[normal]">{product.weight}</p>
          </div>
          <div className="flex justify-between flex-col w-full p-[2rem] bg-[#e5e5e5]">
            <h3 className="text-[2.2rem] font-semibold leading-[normal]">
              Size:
            </h3>
            <p className="text-[1.65rem]  leading-[normal]">{product.size}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductDetails;
