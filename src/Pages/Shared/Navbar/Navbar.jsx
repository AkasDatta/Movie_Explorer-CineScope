import { Link } from "react-router";
import {
  FiMenu,
  FiSearch,
  FiUser,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 z-50 w-full text-white">
      <div className="mx-auto flex h-[75px] max-w-[1450px] items-center justify-between px-6 md:px-10 lg:px-14">
        {/* Logo */}
        <Link
          to="/"
          className="font-sans text-[11px] font-medium tracking-[0.35em]"
        >
          MOVIE EXPLORER
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            to="/"
            className="font-sans text-[9px] uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
          >
            Home
          </Link>

          <Link
            to="/movies"
            className="font-sans text-[9px] uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
          >
            Movies
          </Link>

          <Link
            to="/about"
            className="font-sans text-[9px] uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
          >
            About
          </Link>

          <Link
            to="/blog"
            className="font-sans text-[9px] uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
          >
            Blog
          </Link>

          <Link
            to="/shop"
            className="font-sans text-[9px] uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
          >
            Shop
          </Link>

          {/* <Link
            to="/elements"
            className="font-sans text-[9px] uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
          >
            Elements
          </Link> */}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-1.5 font-sans text-[8px] uppercase tracking-[0.15em] md:flex">
            <span className="text-[9px]">♥</span>
            Tickets
          </span>

          <button className="hidden md:block">
            <FiSearch size={12} strokeWidth={1} />
          </button>

          <button className="hidden md:block">
            <FiInstagram size={12} strokeWidth={1} />
          </button>

          <button className="hidden md:block">
            <FiFacebook size={12} strokeWidth={1} />
          </button>

          {/* Mobile menu */}
          <button className="lg:hidden">
            <FiMenu size={20} strokeWidth={1} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
