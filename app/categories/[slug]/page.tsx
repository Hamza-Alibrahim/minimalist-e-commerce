import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ProductGrid from "@/app/components/ProductGrid";
import Subscribe from "@/app/components/Subscribe";
import { ShoppingCartProvider } from "@/app/context/ShoppingCartProvider";

interface Props {
  params: { slug: string };
}

const page = ({ params: { slug } }: Props) => {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
      </ShoppingCartProvider>
      <ProductGrid slug={slug} />
      <Subscribe />
      <Footer />
    </>
  );
};
export default page;
