import { useState } from "react";
import { Link } from "react-router";
import { FiPlay, FiArrowRight, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 border-b border-white/10 bg-slate-950/95 text-white backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600">
              <FiPlay className="fill-white text-lg" />
            </div>

            <span className="text-xl font-bold tracking-tight">
              Cine<span className="text-red-500">Scope</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              to="/"
              className="text-sm font-medium text-gray-300 transition hover:text-white"
            >
              Home
            </Link>

            <Link
              to="/movies"
              className="text-sm font-medium text-gray-300 transition hover:text-white"
            >
              Movies
            </Link>

            <Link
              to="/about"
              className="text-sm font-medium text-gray-300 transition hover:text-white"
            >
              About
            </Link>
          </div>

          {/* Desktop CTA */}
          <Link
            to="/movies"
            className="hidden items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold transition hover:bg-red-700 md:flex"
          >
            Explore Movies
            <FiArrowRight />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-center text-2xl text-gray-200 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu - Overlay */}
        {menuOpen && (
          <div className="absolute left-0 right-0 top-16 border-t border-white/10 bg-slate-950/98 px-4 py-4 shadow-xl md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/movies"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-white"
              >
                Movies
              </Link>

              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/5 hover:text-white"
              >
                About
              </Link>

              <Link
                to="/movies"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold transition hover:bg-red-700"
              >
                Explore Movies
                <FiArrowRight />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
