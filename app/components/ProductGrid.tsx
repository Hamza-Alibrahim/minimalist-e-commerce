import Link from "next/link";
import products from "../data/products";
import ProductCard from "./ProductCard";

interface Props {
  slug: string;
}

const ProductGrid = ({ slug }: Props) => {
  const productsToShow =
    slug === "all"
      ? products
      : products.filter((product) => product.category === slug);
  return (
    <section>
      <div className="css-container">
        <div className="pt-[17rem]">
          <div className="flex items-center mb-[6rem]">
            <Link className="text-[1.6rem]  flex items-center" href="/">
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
                className="tabler-icon tabler-icon-chevron-left"
              >
                <path d="M15 6l-6 6l6 6"></path>
              </svg>{" "}
              Home
            </Link>
            <h3 className="w-full text-center text-[2.7rem] font-bold uppercase">
              {slug.toUpperCase()}
            </h3>
          </div>
          <div className="flex justify-center gap-[1rem] whitespace-nowrap flex-wrap">
            <Link href="/categories/all">
              <button className="py-[.6rem] px-[1.6rem] bg-white border-2 border-[rgb(0,0,0,.3)] hover:border-[rgb(0,0,0,.5)] transition-colors duration-300 text-[1.3rem] ">
                All
              </button>
            </Link>
            <Link href="/categories/furnitures">
              <button className="py-[.6rem] px-[1.6rem] bg-white border-2 border-[rgb(0,0,0,.3)] hover:border-[rgb(0,0,0,.5)] transition-colors duration-300 text-[1.3rem] ">
                Furnitures
              </button>
            </Link>
            <Link href="/categories/electronics">
              <button className="py-[.6rem] px-[1.6rem] bg-white border-2 border-[rgb(0,0,0,.3)] hover:border-[rgb(0,0,0,.5)] transition-colors duration-300 text-[1.3rem] ">
                Electronics
              </button>
            </Link>
            <Link href="/categories/lamps">
              <button className="py-[.6rem] px-[1.6rem] bg-white border-2 border-[rgb(0,0,0,.3)] hover:border-[rgb(0,0,0,.5)] transition-colors duration-300 text-[1.3rem] ">
                Lamps
              </button>
            </Link>
            <Link href="/categories/kitchen">
              <button className="py-[.6rem] px-[1.6rem] bg-white border-2 border-[rgb(0,0,0,.3)] hover:border-[rgb(0,0,0,.5)] transition-colors duration-300 text-[1.3rem] ">
                Kitchen
              </button>
            </Link>
            <Link href="/categories/chairs">
              <button className="py-[.6rem] px-[1.6rem] bg-white border-2 border-[rgb(0,0,0,.3)] hover:border-[rgb(0,0,0,.5)] transition-colors duration-300 text-[1.3rem] ">
                Chairs
              </button>
            </Link>
            <Link href="/categories/skin-care">
              <button className="py-[.6rem] px-[1.6rem] bg-white border-2 border-[rgb(0,0,0,.3)] hover:border-[rgb(0,0,0,.5)] transition-colors duration-300 text-[1.3rem] ">
                Skin Care
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-[850px]:grid-cols-2 max-[567px]:grid-cols-1 gap-[2.5rem] pb-[11rem] pt-[7rem]">
          {productsToShow.map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default ProductGrid;
