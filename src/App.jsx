import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { ProductDetail } from "./pages/ProductDetail";
import { Cart } from "./pages/Cart";
import WishList from "./pages/WishList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wish" element={<WishList />} />
      </Routes>
    </Router>
  );
}

export default App;
