import { FiArrowRight, FiPlay } from "react-icons/fi";
import { Link } from "react-router";

const Banner = () => {
  return (
    //    {/* Hero Banner */}
    <section className="relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-950/30" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
            Welcome to CineScope
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl text-white">
            Discover Your Next
            <span className="block text-red-500">Favorite Movie</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
            Explore a world of movies, discover exciting stories, and find your
            next favorite film. Browse movies and explore detailed information
            all in one place.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/movies"
              className="flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700"
            >
              <FiPlay className="fill-white" />
              Explore Movies
            </Link>

            <Link
              to="/movies"
              className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-semibold backdrop-blur-sm transition hover:bg-white/20"
            >
              Browse Collection
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
