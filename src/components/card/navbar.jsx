import { Link, useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import LoadingBar from "react-top-loading-bar";

function NavBar() {
  const location = useLocation();
  const [navToggle, SetNavToggle] = useState(false);
  const loadingBar = useRef(null);

  const handleLinkClick = () => {
    loadingBar.current.continuousStart();

    setTimeout(() => {
      loadingBar.current.complete();
    }, 2000);
  };

  return (
    <div className="h-[70px] bg-primary w-full flex items-center justify-between px-3 sm:px-10 md:px-10 text-dark font-main-sans sm:sticky top-[0]">
      <LoadingBar color="#FB4A36" ref={loadingBar} />
      <Link
        className="text-dark font-main-sans hover:text-secondary transition-all duration-100"
        to="/"
        title="knight meat"
        aria-current="page"
        href="#"
        onClick={handleLinkClick}
      >
        <span className="font-semibold text-sm sm:text-xl md:text-xl">
          Knight Meat Taste
        </span>
      </Link>
      <div
        className={`absolute h-full w-[200px] ${
          navToggle ? "mr-0 flex flex-col" : "mr-[-200px] hidden"
        } top-0 right-0 px-5 py-3 gap-y-2 text-grey z-10 bg-primary shadow-sm shadow-grey transition-[mr] duration-600 ease-linear
        sm:relative sm:mr-0 sm:bg-primary sm:shadow-none sm:w-auto sm:flex-row sm:gap-x-10 sm:items-center sm:flex
        md:relative md:mr-0 md:bg-primary md:shadow-none md:w-auto md:flex-row md:gap-x-10 md:items-center md:flex`}
      >
        <X
          className="block sm:hidden md:hidden cursor-pointer"
          onClick={() => SetNavToggle(false)}
        />
        <Link
          className={`font-main-sans ${
            location.pathname === "/" && "text-secondary font-semibold"
          }`}
          to="/"
          title="login"
          href="#"
          onClick={handleLinkClick}
        >
          Home
        </Link>
        <Link
          className={`font-main-sans ${
            location.pathname === "/menu" && "text-secondary font-semibold"
          }`}
          to="/menu"
          title="menu"
          onClick={handleLinkClick}
        >
          Menu
        </Link>
        <Link
          className={`font-main-sans ${
            location.pathname === "/account" && "text-secondary font-semibold"
          }`}
          to="/account"
          title="login"
          href="#"
          onClick={handleLinkClick}
        >
          Login
        </Link>
        <Link
          className={`font-main-sans ${
            location.pathname === "/cart" && "text-secondary font-semibold"
          }`}
          to="/cart"
          title="cart"
          onClick={handleLinkClick}
        >
          Cart
          <span className="ml-1 w-auto text-primary h-[15px] bg-secondary px-1 font-main-sans rounded-sm font-normal">
            0
          </span>
        </Link>
      </div>
      <Menu
        className="block sm:hidden md:hidden text-grey cursor-pointer"
        onClick={() => SetNavToggle(true)}
      />
    </div>
  );
}

export default NavBar;
