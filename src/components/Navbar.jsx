import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "../assets/hamburger.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-200 p-6 lg:p-4 lg:w-full">
      <div className="lg:hidden flex justify-between items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
        >
          <img
            src={Hamburger}
            alt="hamburger"
            className="w-[25px] h-[20px] md:w-[32px] md:h-[25.6px]"
          />
        </button>
      </div>
      <div
        id="navbar-menu"
        className={`flex flex-col pt-4 space-y-4 lg:flex-row lg:justify-end lg:space-y-0 lg:gap-10 lg:space-x-8 lg:pt-0 lg:pr-10 ${
          isOpen ? "block" : "hidden"
        } lg:flex transition-all duration-300 ease-in-out`}
      >
        <Link
          to="/"
          className="p-2 rounded-md text-center"
        >
          Home
        </Link>
        <Link
          to="/racers"
          className="p-2 rounded-md text-center"
        >
          Racers
        </Link>
        <Link
          to="/about"
          className="p-2 rounded-md text-center"
        >
          About
        </Link>
        <Link
          to="/news"
          className="p-2 rounded-md text-center"
        >
          News
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
