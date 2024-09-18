import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ProductDetails from "@/app/components/ProductDetails";
import Subscribe from "@/app/components/Subscribe";
import Trending from "@/app/components/Trending ";
import { ShoppingCartProvider } from "@/app/context/ShoppingCartProvider";
import products from "@/app/data/products";

interface Props {
  params: { id: string };
}

const ProductPage = ({ params: { id } }: Props) => {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <ProductDetails {...products[+id - 1]} />
      </ShoppingCartProvider>
      <Trending />
      <Subscribe />
      <Footer />
    </>
  );
};
export default ProductPage;
