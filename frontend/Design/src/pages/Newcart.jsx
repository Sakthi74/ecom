import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchCartItems() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/cart/new");
        setCartItems(response.data);
      } catch (error) {
        console.error("Failed to load cart items:", error);
      }
    }

    fetchCartItems();
  }, []);

  return (
    <div className="p-4">
      <Nav />
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Product</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.product}</td>
              <td className="border px-4 py-2">{item.description}</td>
              <td className="border px-4 py-2">{item.quantity}</td>
              <td className="border px-4 py-2">₹{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
