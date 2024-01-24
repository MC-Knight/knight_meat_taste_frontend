import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full bg-dark flex flex-col items-start justify-between py-3 px-10 gap-y-3">
      <Link
        className="text-primary font-main-sans  transition-all duration-100"
        to="/"
        title="knight meat"
        aria-current="page"
        href="#"
      >
        <span className="font-semibold text-sm sm:text-xl md:text-xl">
          Knight Meat Taste
        </span>
      </Link>

      <div
        className="w-full flex flex-col items-start justify-start gap-y-2 
        sm:flex-row sm:item-center sm:justify-between
        md:flex-row md:item-center ms:justify-between"
      >
        <div
          className="flex gap-x-5 flex-col 
              sm:flex-row
              md:flex-row"
        >
          {" "}
          <Link
            className="font-normal text-primary"
            to="/"
            title="login"
            href="#"
          >
            Home
          </Link>
          <Link className="font-normal text-primary" to="/menu" title="menu">
            Menu
          </Link>
          <Link
            className="font-normal text-primary"
            to="/account"
            title="login"
            href="#"
          >
            Login
          </Link>
        </div>
        <div
          className="flex gap-x-5 flex-col sm:flex-row
              md:flex-row"
        >
          {" "}
          <Link
            className="font-normal text-primary"
            to="https://www.instagram.com"
            title="login"
            href="#"
          >
            Instagram
          </Link>
          <Link
            className="font-normal text-primary"
            to="https://twitter.com"
            title="menu"
          >
            Twitter
          </Link>
          <Link
            className="font-normal text-primary"
            to="https://wa.me/+250789412421"
            title="login"
            href="#"
          >
            Whatsapp
          </Link>
        </div>
      </div>

      <div className="text-primary text-sm w-full flex items-center justify-center">
        © {currentYear} | Knight Meat Taste. All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
