import { FiArrowRight, FiCalendar } from "react-icons/fi";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "10 Movies Everyone Should Watch at Least Once",
      category: "Movies",
      date: "September 15, 2026",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
      description:
        "From unforgettable classics to modern masterpieces, here are some movies that deserve a place on every watchlist.",
    },
    {
      id: 2,
      title: "How to Find Your Next Favorite Movie",
      category: "Guide",
      date: "September 10, 2026",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop",
      description:
        "Discover simple ways to explore new genres, directors, actors, and stories that match your taste.",
    },
    {
      id: 3,
      title: "The Evolution of Cinema Through the Years",
      category: "Cinema",
      date: "September 5, 2026",
      image:
        "https://images.unsplash.com/photo-1485095329183-d0797cdc5676?q=80&w=1200&auto=format&fit=crop",
      description:
        "Take a quick journey through the changing world of cinema and how filmmaking has evolved over time.",
    },
    {
      id: 4,
      title: "Why Movie Soundtracks Matter",
      category: "Behind the Scenes",
      date: "August 28, 2026",
      image:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
      description:
        "A great soundtrack can completely change a scene. Here's why music plays such an important role in filmmaking.",
    },
    {
      id: 5,
      title: "Best Movie Genres for Every Mood",
      category: "Recommendations",
      date: "August 20, 2026",
      image:
        "https://images.unsplash.com/photo-1518930259200-2d3f5c2c7f9e?q=80&w=1200&auto=format&fit=crop",
      description:
        "Feeling excited, relaxed, emotional, or adventurous? There's always a movie genre for the moment.",
    },
    {
      id: 6,
      title: "What Makes a Movie Truly Memorable?",
      category: "Cinema",
      date: "August 12, 2026",
      image:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1200&auto=format&fit=crop",
      description:
        "Characters, storytelling, visuals, music and emotions all come together to create movies that stay with us.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative flex min-h-[700px] items-center justify-center overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1636044131178-97f3bd19d3f4?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-slate-950" />

        <div className="relative z-10 px-6 text-center">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-blue-400">
            Our Journal
          </p>

          <h1 className="font-serif text-6xl font-medium uppercase tracking-[0.1em] sm:text-7xl md:text-8xl lg:text-9xl">
            Blog
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            Explore movie stories, recommendations, cinema guides, and
            everything happening in the world of film.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              Latest Articles
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              From the world of cinema.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-400">
            Read our latest articles and discover interesting stories,
            recommendations, and insights about movies.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group overflow-hidden border border-slate-800 bg-slate-900/60 transition duration-300 hover:border-blue-500/50"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <span className="absolute bottom-4 left-4 border border-blue-400/40 bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-400">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4 flex items-center gap-2 text-xs text-slate-500">
                  <FiCalendar size={13} />
                  <span>{blog.date}</span>
                </div>

                <h3 className="text-xl font-bold leading-snug text-white transition group-hover:text-blue-400">
                  {blog.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {blog.description}
                </p>

                <button
                  type="button"
                  className="mt-6 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-white transition hover:text-blue-400"
                >
                  Read More
                  <FiArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
