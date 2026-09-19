import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MovieCardLP = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => {
        setShows(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching shows:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-blue-500"></div>
          <p className="text-sm text-gray-400">Loading shows...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-black px-4 py-24 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1450px]">
        {/* Heading */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-[4px] text-red-500">
            Explore
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Popular Shows
          </h1>
        </div>

        {/* Shows Grid - Only 12 */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {shows.slice(0, 12).map((show) => (
            <div
              key={show.id}
              className="group overflow-hidden bg-zinc-900 transition duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="aspect-[2/3] overflow-hidden">
                {show.image?.medium ? (
                  <img
                    src={show.image.medium}
                    alt={show.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-zinc-800 text-sm text-zinc-500">
                    No Image
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-3">
                <h2 className="truncate text-sm font-semibold sm:text-base">
                  {show.name}
                </h2>

                <div className="mt-2 flex items-center justify-between text-xs text-zinc-400">
                  <span>
                    {show.premiered
                      ? new Date(show.premiered).getFullYear()
                      : "N/A"}
                  </span>

                  <span className="text-yellow-400">
                    ★ {show.rating?.average || "N/A"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/movies"
            className="border border-red-500 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition duration-300 hover:bg-red-500"
          >
            View All Movies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MovieCardLP;
