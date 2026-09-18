import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiSearch,
  FiUser,
  FiInstagram,
  FiFacebook,
  FiX,
} from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full text-white">
      <div className="relative mx-auto flex h-[75px] max-w-[1450px] items-center justify-between px-5 sm:px-6 md:px-10 lg:px-14">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="font-sans text-[10px] font-medium tracking-[0.25em] sm:text-[11px] sm:tracking-[0.35em]"
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

          {/* <Link
            to="/shop"
            className="font-sans text-[9px] uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
          >
            Shop
          </Link>

          <Link
            to="/elements"
            className="font-sans text-[9px] uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
          >
            Elements
          </Link> */}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Explore Movies */}
          <span className="hidden items-center gap-1.5 border px-2 py-1 font-sans text-[8px] uppercase tracking-[0.15em] md:flex">
            <span className="text-[9px]">♥</span>
            Explore Movies
          </span>

          {/* Search */}
          <button className="hidden md:block">
            <FiSearch size={12} strokeWidth={1} />
          </button>

          {/* Instagram */}
          <button className="hidden md:block">
            <FiInstagram size={12} strokeWidth={1} />
          </button>

          {/* Facebook */}
          <button className="hidden md:block">
            <FiFacebook size={12} strokeWidth={1} />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="block lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FiX size={21} strokeWidth={1} />
            ) : (
              <FiMenu size={21} strokeWidth={1} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 top-[75px] w-full border-t border-white/10 bg-slate-950/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-5">
          <Link
            to="explore"
            className="block md:hidden items-center gap-1.5 border px-2 py-1 font-sans text-[8px] uppercase tracking-[0.15em] md:flex mb-6"
          >
            <span className="text-[9px]">♥</span>
            Explore Movies
          </Link>

          <Link
            to="/"
            onClick={closeMenu}
            className="border-b border-t border-white/10 py-4 font-sans text-[10px] uppercase tracking-[0.2em]"
          >
            Home
          </Link>

          <Link
            to="/movies"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 font-sans text-[10px] uppercase tracking-[0.2em]"
          >
            Movies
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 font-sans text-[10px] uppercase tracking-[0.2em]"
          >
            About
          </Link>

          <Link
            to="/blog"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 font-sans text-[10px] uppercase tracking-[0.2em]"
          >
            Blog
          </Link>

          {/* <Link
            to="/shop"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 font-sans text-[10px] uppercase tracking-[0.2em]"
          >
            Shop
          </Link>

          <Link
            to="/elements"
            onClick={closeMenu}
            className="py-4 font-sans text-[10px] uppercase tracking-[0.2em]"
          >
            Elements
          </Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
