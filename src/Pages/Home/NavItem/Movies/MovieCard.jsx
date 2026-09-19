import { useState } from "react";
import { FiArrowRight, FiCalendar, FiStar, FiX } from "react-icons/fi";

const MovieCard = ({ show }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const releaseYear = show.premiered
    ? new Date(show.premiered).getFullYear()
    : "N/A";

  const handleSeeDetails = async () => {
    setIsModalOpen(true);
    setLoading(true);

    try {
      const response = await fetch(`https://api.tvmaze.com/shows/${show.id}`);

      const data = await response.json();
      setMovieDetails(data);
    } catch (error) {
      console.error("Failed to load movie details:", error);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setMovieDetails(null);
  };

  return (
    <>
      {/* Movie Card */}
      <div className="group overflow-hidden bg-zinc-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
        {/* Poster */}
        <div className="aspect-[2/3] overflow-hidden bg-zinc-800">
          {show.image?.medium ? (
            <img
              src={show.image.medium}
              alt={show.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-zinc-500">
              No Image
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h2 className="truncate text-base font-semibold text-white">
            {show.name}
          </h2>

          <div className="mt-2 flex items-center gap-3 text-sm text-zinc-400">
            <span className="flex items-center gap-1 text-yellow-400">
              <FiStar />
              {show.rating?.average || "N/A"}
            </span>

            <span className="text-zinc-600">•</span>

            <span className="flex items-center gap-1">
              <FiCalendar />
              {releaseYear}
            </span>
          </div>

          {/* Details Button */}
          <button
            onClick={handleSeeDetails}
            className="mt-4 flex w-full items-center justify-center gap-2 bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            See Details
            <FiArrowRight />
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          {/* Modal Box */}
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto bg-zinc-950 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-red-600"
            >
              <FiX size={22} />
            </button>

            {loading ? (
              <div className="flex min-h-[400px] items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-700 border-t-red-600"></div>
              </div>
            ) : movieDetails ? (
              <>
                {/* Backdrop / Large Poster */}
                <div className="relative h-[280px] overflow-hidden sm:h-[350px]">
                  {movieDetails.image?.original ? (
                    <img
                      src={movieDetails.image.original}
                      alt={movieDetails.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <img
                      src={movieDetails.image?.medium}
                      alt={movieDetails.name}
                      className="h-full w-full object-cover"
                    />
                  )}

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-black/30 to-transparent" />
                </div>

                {/* Details */}
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    {movieDetails.name}
                  </h2>

                  {/* Rating + Release */}
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-300">
                    <span className="flex items-center gap-2 text-yellow-400">
                      <FiStar />
                      Rating: {movieDetails.rating?.average || "N/A"}
                    </span>

                    <span className="text-zinc-600">|</span>

                    <span className="flex items-center gap-2">
                      <FiCalendar />
                      Release:{" "}
                      {movieDetails.premiered
                        ? new Date(movieDetails.premiered).toLocaleDateString()
                        : "N/A"}
                    </span>
                  </div>

                  {/* Genres */}
                  {movieDetails.genres?.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {movieDetails.genres.map((genre) => (
                        <span
                          key={genre}
                          className="bg-red-600/20 px-3 py-1 text-xs font-medium text-red-400"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Summary */}
                  <div className="mt-6">
                    <h3 className="mb-2 text-lg font-semibold">Overview</h3>

                    <div
                      className="text-sm leading-7 text-zinc-400"
                      dangerouslySetInnerHTML={{
                        __html:
                          movieDetails.summary || "No overview available.",
                      }}
                    />
                  </div>

                  {/* Additional Info */}
                  <div className="mt-6 grid grid-cols-1 gap-4 border-t border-zinc-800 pt-5 sm:grid-cols-2">
                    {movieDetails.language && (
                      <div>
                        <p className="text-xs text-zinc-500">Language</p>
                        <p className="mt-1 text-sm text-white">
                          {movieDetails.language}
                        </p>
                      </div>
                    )}

                    {movieDetails.status && (
                      <div>
                        <p className="text-xs text-zinc-500">Status</p>
                        <p className="mt-1 text-sm text-white">
                          {movieDetails.status}
                        </p>
                      </div>
                    )}

                    {movieDetails.runtime && (
                      <div>
                        <p className="text-xs text-zinc-500">Runtime</p>
                        <p className="mt-1 text-sm text-white">
                          {movieDetails.runtime} minutes
                        </p>
                      </div>
                    )}

                    {movieDetails.network?.name && (
                      <div>
                        <p className="text-xs text-zinc-500">Network</p>
                        <p className="mt-1 text-sm text-white">
                          {movieDetails.network.name}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Close */}
                  <button
                    onClick={closeModal}
                    className="mt-7 w-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                  >
                    Close
                  </button>
                </div>
              </>
            ) : (
              <div className="flex min-h-[300px] items-center justify-center p-6 text-zinc-400">
                Failed to load movie details.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
