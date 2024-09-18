import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ShopNow from "./components/ShopNow";
import creative from "./imgs/creative.jpg";
import comfortable from "./imgs/comfortable.jpg";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import Trending from "./components/Trending ";
import { ShoppingCartProvider } from "./context/ShoppingCartProvider";

export default function Home() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
      </ShoppingCartProvider>
      <Hero />
      <Products />
      <ShopNow title="Creative harmonious living" image={creative} />
      <Trending />
      <ShopNow
        title="Comfortable & Elegante Living"
        image={comfortable}
        reverse
      />
      <Subscribe />
      <Footer />
    </>
  );
}
