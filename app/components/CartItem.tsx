import Image, { StaticImageData } from "next/image";
import { useShoppingCart } from "../context/ShoppingCartProvider";

interface Props {
  id: number;
  name: string;
  img: StaticImageData;
  price: number;
  quantity: number;
}

const CartItem = ({ id, name, img, price, quantity }: Props) => {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();
  return (
    <div className="bg-[#f2f2f2] border border-[#717171] grid grid-cols-[30fr_50fr_20fr] max-xsm:grid-cols-1 max-xsm:w-[90%] xsm:h-[15rem]">
      <div className="h-full w-full">
        <Image src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col max-xsm:items-center max-xsm:gap-[2rem] justify-between p-[1.5rem] h-full">
        <h3 className="text-[2.4rem] leading-[normal]">{name}</h3>
        <div className="border border-black flex w-fit p-[.1px]">
          <button
            onClick={() => decreaseCartQuantity(id)}
            className="w-[3rem] h-[3rem] text-[2rem] cursor-pointer bg-white transition-colors hover:bg-transparent duration-300 border-r-[1px] border-black"
          >
            -
          </button>
          <p className="w-[3rem] h-[3rem] text-[2rem] flex justify-center items-center">
            {quantity}
          </p>
          <button
            onClick={() => increaseCartQuantity(id)}
            className="w-[3rem] h-[3rem] text-[2rem] cursor-pointer bg-white transition-colors hover:bg-transparent duration-300 border-l-[1px] border-black"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex xsm:flex-col justify-between p-[1.5rem] h-full">
        <h2 className="text-[2.4rem] font-semibold leading-[normal]">
          {(price * quantity).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
          $
        </h2>
        <span>
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
            onClick={() => removeFromCart(id)}
            className="tabler-icon tabler-icon-x cursor-pointer"
          >
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </span>
      </div>
    </div>
  );
};
export default CartItem;
