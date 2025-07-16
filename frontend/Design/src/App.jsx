import React from "react";
import{BrowserRouter,Route,Routes} from "react-router-dom"

import Product from "./pages/product";
import Login from "./pages/Login";
import Frontpage from "./pages/Frontpage";
import Nav from "./components/Nav";
import Cart from "./pages/Cart";

import CartPage from "./pages/Newcart";
import Filter from "./components/Filter";

const App = () => {
  return (
   <><BrowserRouter>
   <Routes>
     <Route path="/" element={<Cart/>}></Route > <Route path="dashboard/" element={<Login/>}></Route> <Route path="dashboard/frontpage/" element={<Frontpage/>}></Route> <Route path="/pricing" element={<CartPage/>}></Route ><Route path="/productpage" element={<Product/>}></Route></Routes></BrowserRouter>
    </>
  )
}

export default App
