import { Link } from "react-router-dom";
import { FiPlay, FiArrowRight } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600">
              <FiPlay className="text-lg fill-white" />
            </div>

            <span className="text-xl font-bold tracking-tight">
              Cine<span className="text-red-500">Scope</span>
            </span>
          </Link>

          {/* Navigation */}
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

          {/* CTA */}
          <Link
            to="/movies"
            className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold transition hover:bg-red-700"
          >
            Explore Movies
            <FiArrowRight />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
