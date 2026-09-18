import { FiPlay, FiFilm, FiUsers, FiStar } from "react-icons/fi";

const About = () => {
  return (
    <div className="">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 " />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              About Our Website
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your place for
              <span className="text-blue-500"> great movies.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Discover movies, explore new stories, and find something worth
              watching. Our platform is designed to make finding your next
              favorite movie simple, enjoyable, and fast.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* Image / Visual */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

            <img
              src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80"
              alt="Cinema"
              className="h-[420px] w-full object-cover opacity-75"
            />

            <div className="absolute bottom-0 left-0 p-8">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
                <FiPlay size={22} />
              </div>

              <h2 className="text-2xl font-bold">
                Every story deserves to be discovered.
              </h2>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
              Who We Are
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              More than just a movie website.
            </h2>

            <p className="mt-6 leading-7 text-slate-400">
              We created this platform for people who love movies and enjoy
              discovering new stories. Whether you are looking for a popular
              blockbuster, an old classic, or something completely new, our goal
              is to help you find it without making the experience complicated.
            </p>

            <p className="mt-4 leading-7 text-slate-400">
              From movie information and genres to ratings and recommendations,
              everything is organized in one simple place so you can spend less
              time searching and more time watching.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500">
              <FiPlay />
              Explore Movies
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Made for movie lovers
            </h2>

            <p className="mt-4 text-slate-400">
              Everything is built around making your movie discovery experience
              simple and enjoyable.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="border border-slate-800 bg-slate-950 p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center bg-blue-600/10 text-blue-500">
                <FiFilm size={24} />
              </div>

              <h3 className="text-xl font-semibold">Huge Collection</h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Explore movies from different genres, years, and categories all
                in one place.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-slate-800 bg-slate-950 p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center bg-blue-600/10 text-blue-500">
                <FiStar size={24} />
              </div>

              <h3 className="text-xl font-semibold">Discover Favorites</h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Find highly rated movies and discover stories you may not have
                seen before.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-slate-800 bg-slate-950 p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center bg-blue-600/10 text-blue-500">
                <FiUsers size={24} />
              </div>

              <h3 className="text-xl font-semibold">For Everyone</h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                A simple and responsive experience designed for movie fans on
                every device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center sm:px-8 lg:px-12">
        <div className="border border-slate-800 bg-gradient-to-r from-blue-950/40 to-slate-900 p-10 sm:p-14">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to find your next movie?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Browse our collection and discover something you'll want to watch
            tonight.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-500">
            Browse Movies
            <FiPlay />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
