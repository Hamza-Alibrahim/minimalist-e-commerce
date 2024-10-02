import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  id: number;
  name: string;
  price: number;
  image: StaticImageData[];
  classes?: { div: string; img: string };
}

const ProductCard = (product: Props) => {
  return (
    <div
      className={`outline-2 outline outline-[rgba(0,0,0,.205)] hover:outline-[rgba(0,0,0,.7)] transition-[outline] duration-300 -outline-offset-2 ${product.classes?.div}`}
    >
      <Link href={`/categories/product/` + product.id}>
        <Image
          className={`object-cover ${
            product.classes?.img ? product.classes?.img : "w-full"
          }`}
          src={product.image[0]}
          alt={product.name}
        />
        <div className="p-[1rem]">
          <p className="text-[1.7rem]  leading-[normal]">{product.name}</p>
          <p className="text-[2.2rem] font-semibold leading-[normal] mt-[1.4rem]">
            {product.price}$
          </p>
        </div>
      </Link>
    </div>
  );
};
export default ProductCard;
