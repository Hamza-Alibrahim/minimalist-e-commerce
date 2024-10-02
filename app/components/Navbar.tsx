"use client";
import Image from "next/image";
import Logo from "../imgs/logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartProvider";
import ShoppingCart from "./ShoppingCart";

interface Target {
  innerWidth: number;
}

const Navbar = () => {
  const { cartQuantity } = useShoppingCart();
  const [fixed, setFixed] = useState(false);
  const [show, setShow] = useState(false);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    const handleScroll = function () {
      if (window.scrollY > 50 && !fixed) setFixed(true);
      else if (window.scrollY <= 50 && fixed) setFixed(false);
    };
    const handleResize = function (e: UIEvent) {
      const x = e.currentTarget as Target | null;
      if (x!.innerWidth > 900 && expand) setExpand(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="css-container">
        <div
          className={`flex items-center justify-between h-[12rem] ${
            fixed ? "h-[8rem]" : ""
          } transition-[height]`}
        >
          <Link href="/">
            <Image src={Logo} alt="Logo" width={85} height={85} />
          </Link>
          <nav className={`flex gap-[2.5rem]`}>
            <div
              className={`flex gap-[2.5rem] max-sm:bg-white max-sm:absolute max-sm:left-[-100rem] max-sm:top-0 max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:w-screen max-sm:h-screen transition-[left] duration-500 ${
                expand ? "!left-0 z-10" : ""
              }`}
            >
              <span
                onClick={() => setExpand(false)}
                className="sm:hidden absolute top-[3rem] right-[3rem] cursor-pointer"
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
                  className="x-mobile"
                >
                  <path d="M18 6l-12 12"></path>
                  <path d="M6 6l12 12"></path>
                </svg>
              </span>
              <Link
                className="text-[1.8rem] max-sm:text-[3rem] uppercase hover:underline"
                href="/categories/all"
              >
                categories
              </Link>
              <Link
                className="text-[1.8rem] max-sm:text-[3rem] uppercase hover:underline"
                href="/categories/product/19"
              >
                product page
              </Link>
            </div>
            <span className="relative">
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
                onClick={() => setShow(true)}
                className="tabler-icon tabler-icon-shopping-cart cursor-pointer"
              >
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 17h-11v-14h-2"></path>
                <path d="M6 5l14 1l-1 7h-13"></path>
              </svg>
              {cartQuantity > 0 && (
                <span className="absolute -top-[1.8rem] right-0 w-[2rem] h-[2rem] rounded-full bg-[#ff0006] text-white flex items-center justify-center">
                  {cartQuantity}
                </span>
              )}
            </span>
            <span
              onClick={() => setExpand(true)}
              className="sm:hidden cursor-pointer"
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
                className="tabler-icon tabler-icon-menu-2"
              >
                <path d="M4 6l16 0"></path>
                <path d="M4 12l16 0"></path>
                <path d="M4 18l16 0"></path>
              </svg>
            </span>
          </nav>
        </div>
      </div>
      <ShoppingCart show={show} setShow={setShow} />
    </header>
  );
};
export default Navbar;
