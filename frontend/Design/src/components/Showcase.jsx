import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./Filter"; // <-- Your filter tab

const Showcase = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(1); // 1: Latest, 2: Special, 3: Best

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/products/");
        const data = response.data;
        setProducts(Array.isArray(data) ? data : [data]);
      } catch (error) {
        console.error("Error in fetching products ", error);
      }
    }
    fetchProducts();
  }, []);

  // 🧠 Basic filtering logic
  const filteredProducts = products.filter((p) => {
    if (filter === 1) return true;                // Latest
    if (filter === 2) return p.price >= 5000;     // Special
    if (filter === 3) return p.descripion === "beauty product"; // Best sellers
    
  });

  const handleAddToCart = async (product) => {
    try {
      await axios.post("http://127.0.0.1:8000/cart/new", {
        product: product.id,
        quantity: 1,
        price: product.price,
        description: product.descripion, // typo in backend? might be "description"
        image: product.image,
      });
      alert("Added to cart successfully!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add to cart");
    }
  };

  return (
    <>
      <Filter onChange={setFilter} />

      <div className="grid sm:grid-cols-4 grid-cols-2 gap-8 p-12 md:p-16">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center h-72 w-36 md:h-96 md:w-64 text-white bg-slate-800 rounded-xl hover:bg-blue-700 transition-shadow duration-150 shadow-2xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="md:w-40 md:h-40 w-24 h-24 rounded-2xl mt-3"
            />
            <div className="mt-4 text-center">
              <h1 className="text-lg font-extrabold">{product.name}</h1>
              <p className="text-gray-300">{product.price}</p>
              <p>{product.descripion}</p>
              <button
                className="mt-2 px-3 py-1 bg-yellow-300 text-black font-bold rounded cursor-pointer hover:bg-black hover:text-white"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Showcase;
