import { FiPlay } from "react-icons/fi";

const Banner = () => {
  return (
    <section className="relative h-screen min-h-[650px] w-full overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1569346276519-709519eeaa51?q=80&w=882&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
            A Film About
          </p>

          {/* Big background word */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-serif text-[75px] font-light uppercase tracking-[-0.04em] text-transparent opacity-20 [-webkit-text-stroke:1px_rgba(255,255,255,0.5)] sm:text-[110px] md:text-[160px] lg:text-[210px]">
            CineScope
          </div>

          {/* Main title */}
          <h1 className="relative font-serif text-[52px] font-medium uppercase leading-none tracking-[0.12em] text-white sm:text-[70px] md:text-[100px] lg:text-[125px]">
            CineScope
          </h1>

          {/* Play button */}
          <button className="group mx-auto mt-12 flex h-14 w-14 items-center justify-center rounded-full border border-white/50 transition-all duration-300 hover:bg-white hover:text-black">
            <FiPlay
              size={15}
              strokeWidth={1}
              className="ml-0.5 transition-transform duration-300 group-hover:scale-110"
            />
          </button>

          {/* Bottom information */}
          <div className="mt-12 flex justify-center gap-8 font-sans text-[8px] uppercase tracking-[0.25em] text-white/60">
            <span>Official Selection</span>
            <span>2026</span>
            <span>Drama</span>
          </div>

          <button className="group mx-auto mt-12 flex items-center justify-center border border-white/50 transition-all duration-300 px-6 cursor-pointer py-3 text-white hover:bg-white hover:text-black">
            Explore More
          </button>
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
  );
};

export default Banner;
