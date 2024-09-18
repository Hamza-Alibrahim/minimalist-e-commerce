import products from "../data/products";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="py-[11rem]">
      <div className="css-container">
        <h1 className="text-[2.6rem] font-semibold mb-[4.2rem] leading-[normal]">
          Products we are proud of
        </h1>
        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-[850px]:grid-cols-2 max-[567px]:grid-cols-1 gap-[2rem]">
          {products.slice(0, 8).map((product) => {
            return <ProductCard key={product.id} {...product} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default Products;
