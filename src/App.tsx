import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import About from "./components/About";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    axios
      .get<Product[]>("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, quantity) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const getTotalItems = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar
          cartItemCount={getTotalItems()}
          toggleCart={() => setIsCartOpen(!isCartOpen)}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ProductList products={products} addToCart={addToCart} />
                <About />
              </>
            }
          />
        </Routes>
        <Footer />
        <Cart
          isOpen={isCartOpen}
          closeCart={() => setIsCartOpen(false)}
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          totalPrice={getTotalPrice()}
        />
      </div>
    </Router>
  );
}

export default App;
