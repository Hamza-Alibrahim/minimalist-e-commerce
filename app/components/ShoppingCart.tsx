/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import empty from "../imgs/empty.png";
import { useShoppingCart } from "../context/ShoppingCartProvider";
import CartItem from "./CartItem";

interface Props {
  show: boolean;
  setShow: (val: boolean) => void;
}

const ShoppingCart = ({ show, setShow }: Props) => {
  const { cartItems, totalPrice, cartQuantity } = useShoppingCart();
  return (
    <>
      <div
        onClick={() => setShow(false)}
        className={`fixed top-0 left-0 w-screen h-screen bg-[rgb(0,0,0,.46)] z-[99] ${
          !show && "hidden"
        }`}
      ></div>
      <div
        className={`fixed transition-[right_width] duration-[.4s] top-0 right-[-100rem] h-screen w-[50rem] max-sm:w-full bg-white pt-[3rem] px-[2.5rem] pb-[1.5rem] z-[100] ${
          show && "show-cart"
        }`}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-[2.1rem] font-bold leading-[normal]">
            Your Shopping Cart ({cartQuantity})
          </h1>
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
            onClick={() => setShow(false)}
            className="tabler-icon tabler-icon-x cursor-pointer"
          >
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </div>
        <div className="p-[.5rem] h-screen">
          {cartItems.length === 0 ? (
            <div className="my-[15rem] mx-auto flex items-center flex-col w-[16rem]">
              <Image src={empty} alt="empty" />
              <p className="text-[2rem] font-semibold leading-[normal] mt-[1rem]">
                Your cart is empty
              </p>
              <button
                onClick={() => setShow(false)}
                className="text-[1.7rem] font-normal leading-[normal] w-full h-[4.4rem] mt-[3rem] cursor-pointer border border-[#767676] rounded-[2px] transition-colors bg-[#e8e8e8] hover:bg-[#bcbec0]"
              >
                Keep Browsing
              </button>
            </div>
          ) : (
            <>
              <div className="flex flex-col max-xsm:items-center gap-[2rem] mt-[2rem] h-[70%] max-xsm:h-[65%] overflow-y-auto">
                {cartItems.map((item) => {
                  return (
                    <CartItem
                      key={item.id}
                      id={item.id}
                      {...item.product}
                      quantity={item.quantity}
                    />
                  );
                })}
              </div>
              <div className="mt-[1.5rem] py-[1rem] border-t-2 border-dashed border-black flex justify-between max-xsm:flex-col max-xsm:items-center max-xsm:gap-[2rem]">
                <div className="flex flex-col gap-[1rem]">
                  <p className="text-[2.5rem] font-semibold leading-[normal]">
                    Subtotal
                  </p>
                  <p className="text-[2.5rem] font-semibold leading-[normal]">
                    {totalPrice.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                    $
                  </p>
                </div>
                <span className="py-[1rem] px-[3.5rem] border-2 border-black text-[2rem] font-normal leading-[normal] transition-colors duration-200 hover:bg-black hover:text-white xsm:self-end cursor-pointer">
                  Go to Checkout
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default ShoppingCart;
