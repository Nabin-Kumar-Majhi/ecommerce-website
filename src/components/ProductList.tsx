import { FC } from "react";
import { FaStar } from "react-icons/fa";
import { Product } from "../App";

interface ProductListProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductList: FC<ProductListProps> = ({ products, addToCart }) => {
  return (
    <section id="store" className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Exclusive Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-fit"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">{product.title}</h3>
              <p className="text-gray-700 mb-2">
                {product.description.slice(0, 100)}...
              </p>
              <div className="flex items-center mb-2">
                <FaStar className="text-yellow-400" />
                <span className="ml-1">
                  {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-xl">${product.price}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
