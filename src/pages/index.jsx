import { Route, Routes } from "react-router-dom";
import NavBar from "../components/card/navbar";
import Footer from "../components/card/footer";
import Home from "./web/home";
import Account from "./web/account";
import Menu from "./web/menu";
import Cart from "./web/cart";

function WebPages() {
  return (
    <div className="container relative h-auto overflow-y-auto overflow-x-hidden">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/account/*" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default WebPages;
