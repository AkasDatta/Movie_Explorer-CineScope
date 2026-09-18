import { FiPlay, FiFilm, FiUsers, FiStar, FiArrowRight } from "react-icons/fi";

const About = () => {
  return (
    <div className="">
      {/* Hero */}
      <section className="relative h-screen min-h-[650px] w-full overflow-hidden bg-black">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Extra cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/60" />

        {/* Hero content */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="relative w-full text-center">
            {/* Small text */}
            <p className="mb-3 font-sans text-[9px] uppercase tracking-[0.45em] text-white/80 md:text-[10px]">
              before and after
            </p>

            {/* Main title */}
            <h1 className="relative font-serif text-[52px] font-medium uppercase leading-none tracking-[0.12em] text-white sm:text-[70px] md:text-[100px] lg:text-[125px]">
              about us
            </h1>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3">
          <span className="font-sans text-[7px] uppercase tracking-[0.35em] text-white/60">
            Scroll
          </span>

          <span className="h-8 w-px bg-white/40" />
        </div>
      </section>
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
      <section
        className="relative overflow-hidden bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589569334232-fdc917c38226?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-950/85" />

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* LEFT - Stats */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:gap-10">
              {/* 3 Years */}
              <div className="border-l-2 border-blue-500 pl-6">
                <h3 className="text-5xl font-bold text-white">
                  3<span className="text-blue-500">+</span>
                </h3>

                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Years of Experience
                </p>
              </div>

              {/* Movies */}
              <div className="border-l-2 border-blue-500 pl-6">
                <h3 className="text-5xl font-bold text-white">
                  500<span className="text-blue-500">+</span>
                </h3>

                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Movies & Films
                </p>
              </div>

              {/* Awards */}
              <div className="border-l-2 border-blue-500 pl-6">
                <h3 className="text-5xl font-bold text-white">
                  25<span className="text-blue-500">+</span>
                </h3>

                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Film Awards
                </p>
              </div>
            </div>

            {/* RIGHT - Content */}
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
                Who We Are
              </p>

              <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Stories that stay with you.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
                We created this platform for people who love movies and enjoy
                discovering new stories. From blockbuster releases to timeless
                classics, we bring everything together in one simple cinematic
                experience.
              </p>

              <p className="mt-4 max-w-xl text-base leading-8 text-slate-400">
                Discover movies, explore genres, find ratings, and uncover your
                next favorite film — all without making the experience
                complicated.
              </p>

              <button className="mt-8 inline-flex items-center gap-3  px-7 py-3.5 font-semibold text-white transition duration-300 hover:bg-white border-white border-2 hover:text-black cursor-pointer">
                <FiPlay size={18} />
                Explore Movies
                <FiArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
