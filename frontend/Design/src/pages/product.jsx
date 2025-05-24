import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/products/');
        console.log('Fetched data:', response.data);  // 🧪 See actual response
        const data = response.data;
        setProducts(Array.isArray(data) ? data : [data]);
      } catch (error) {
        console.error('Error fetching products:', error); // 🧪 Shows error if backend fails
      }
    }

    fetchProducts();
  }, []);

  const handleDelete = (id) => {
  axios.delete(`http://127.0.0.1:8000/products/${id}/`)
    .then(() => {
      // Only update state after the backend confirms deletion
      setProducts(products.filter(product => product.id !== id));
    })
    .catch((error) => {
      console.error("Failed to delete:", error);
    });
};


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-slate-800 text-white font-bold">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Price</th>
                   <th className="border px-4 py-2">DESCRIPTION</th>
                   <th className="border px-4 py-2">EDIT PRODUCTS</th>
                   <th className="border-0 px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}> 
              <td className="border px-4 py-2">{product.id}</td>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.price}</td>
              <td className="border px-4 py-2">{ product.descripion}</td>
              
         <td  className=' border px-4 py-2'><button className=' bg-red-400 
         rounded-sm cursor-pointer  hover:bg-blue-600 hover:text-white border-2 border-black' onClick={()=>handleDelete(product.id)}>DELETE ITEM<h1><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
  <path fillRule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>
</h1></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
