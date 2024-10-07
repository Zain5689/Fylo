import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` mx-auto ${
        scrolled ? "bg-gray-800" : "bg-transparent"
      } fixed transition-colors duration-500 w-full`}
    >
      <div className=" flex flex-col sm:flex-row justify-between px-8 py-5">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <ul className="flex gap-5">
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/">Teams</a>
          </li>
          <li>
            <a href="/">Sign In</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
