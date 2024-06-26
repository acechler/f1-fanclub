
import { Link } from "react-router-dom";
// Navbar component

const Navbar = () => {
  return (
    <nav className="bg-slate-400 p-6 flex justify-between items-center md:m-6 md:rounded-xl lg:flex-col lg:h-screen lg:w-24 lg:m-8 lg:justify-normal">
      <div className="flex space-x-4 md:space-x-8 lg:flex-col lg:space-x-0 lg:space-y-10 lg:mt-16">
        <Link
          to="/"
          className="bg-slate-100 hover:bg-slate-200 focus:bg-white"
        >
          Home
        </Link>
        <Link
          to="/racers"
          className="bg-slate-100 hover:bg-slate-200 focus:bg-white"
        >
          Racers
        </Link>
        <Link
          to="/about"
          className="bg-slate-100 hover:bg-slate-200 focus:bg-white"
        >
          About
        </Link>
        <Link
          to="/events"
          className="bg-slate-100 hover:bg-slate-200 focus:bg-white"
        >
          Events
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;