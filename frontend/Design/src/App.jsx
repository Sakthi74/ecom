import React from "react";
import{BrowserRouter,Route,Routes} from "react-router-dom"
import Nav from "./pages/Nav";
import Cart from "./pages/Cart";
import Product from "./pages/product";

const App = () => {
  return (
   <><BrowserRouter>
   <Routes>
    <Route path="/" element={<Cart/>}></Route >  <Route path="/pricing" element={<Nav/>}></Route ><Route path="/productpage" element={<Product/>}></Route></Routes></BrowserRouter></>
 
  )
}

export default App
