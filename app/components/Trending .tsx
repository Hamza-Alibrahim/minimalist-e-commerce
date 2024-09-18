"use client";
import { useRef } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

const Trending = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  return (
    <section className="pb-[10rem] list">
      <div className="css-container">
        <div className="flex justify-between">
          <h1 className="text-[2.6rem] font-semibold mb-[4.2rem] leading-[normal]">
            Trending Now
          </h1>
          <div className="flex gap-[.4rem]">
            <button
              onClick={() =>
                (scrollerRef.current!.scrollLeft -=
                  scrollerRef.current!.clientWidth)
              }
              className="w-[4rem] h-[4rem] p-[1rem] bg-[#373737] text-white hover:bg-black transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-arrow-left"
              >
                <path d="M5 12l14 0"></path>
                <path d="M5 12l6 6"></path>
                <path d="M5 12l6 -6"></path>
              </svg>
            </button>
            <button
              onClick={() =>
                (scrollerRef.current!.scrollLeft +=
                  scrollerRef.current!.clientWidth)
              }
              className="w-[4rem] h-[4rem] p-[1rem] bg-[#373737] text-white hover:bg-black transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-arrow-right"
              >
                <path d="M5 12l14 0"></path>
                <path d="M13 18l6 -6"></path>
                <path d="M13 6l6 6"></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          ref={scrollerRef}
          className="trend overflow-x-scroll py-[1rem] px-[.6rem] flex gap-[2.2rem] whitespace-nowrap scroll-smooth "
        >
          {products.slice(8).map((product) => {
            return (
              <ProductCard
                key={product.id}
                {...product}
                classes={{ div: "flex-none", img: "w-[21rem]" }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Trending;
