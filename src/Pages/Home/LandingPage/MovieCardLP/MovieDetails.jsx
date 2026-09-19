import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiCalendar, FiClock, FiStar } from "react-icons/fi";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);

        if (!response.ok) {
          throw new Error("Movie not found");
        }

        const data = await response.json();

        setMovie(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load movie details.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  // Loading
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-blue-500"></div>
          <p className="text-sm text-gray-400">Loading movie details...</p>
        </div>
      </div>
    );
  }

  // Error
  if (error || !movie) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-center text-white">
        <h2 className="text-2xl font-bold">{error || "Movie not found"}</h2>

        <Link
          to="/movies"
          className="mt-5 bg-red-600 px-6 py-3 text-sm font-semibold transition hover:bg-red-700"
        >
          Back to Movies
        </Link>
      </div>
    );
  }

  const releaseYear = movie.premiered
    ? new Date(movie.premiered).getFullYear()
    : "N/A";

  return (
    <div className="min-h-screen bg-black px-4 pt-36  text-white sm:px-6 lg:px-10 ">
      <div className="mx-auto max-w-[1200px]">
        {/* Back Button */}
        <Link
          to="/movies"
          className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
        >
          <FiArrowLeft />
          Back to All Movies
        </Link>

        {/* Main Details */}
        <div className="grid gap-8 md:grid-cols-[320px_1fr] lg:gap-12">
          {/* Poster */}
          <div className="overflow-hidden bg-zinc-900">
            {movie.image?.original || movie.image?.medium ? (
              <img
                src={movie.image?.original || movie.image?.medium}
                alt={movie.name}
                className="w-full object-cover"
              />
            ) : (
              <div className="flex aspect-[2/3] items-center justify-center text-zinc-500">
                No Image
              </div>
            )}
          </div>

          {/* Information */}
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[4px] text-red-500">
              Movie Details
            </p>

            <h1 className="text-4xl font-bold sm:text-5xl">{movie.name}</h1>

            {/* Rating / Year / Runtime */}
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
              <span className="flex items-center gap-1 text-yellow-400">
                <FiStar />
                {movie.rating?.average || "N/A"}
              </span>

              <span className="flex items-center gap-1">
                <FiCalendar />
                {releaseYear}
              </span>

              {movie.runtime && (
                <span className="flex items-center gap-1">
                  <FiClock />
                  {movie.runtime} min
                </span>
              )}
            </div>

            {/* Genres */}
            {movie.genres?.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre}
                    className="border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            )}

            {/* Summary */}
            <div className="mt-8">
              <h2 className="mb-3 text-xl font-semibold">Overview</h2>

              {movie.summary ? (
                <div
                  className="leading-7 text-zinc-400"
                  dangerouslySetInnerHTML={{
                    __html: movie.summary,
                  }}
                />
              ) : (
                <p className="text-zinc-500">No description available.</p>
              )}
            </div>

            {/* Additional Information */}
            <div className="mt-8 grid gap-5 border-t border-zinc-800 pt-6 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Language
                </p>

                <p className="mt-1 text-sm text-white">
                  {movie.language || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Status
                </p>

                <p className="mt-1 text-sm text-white">
                  {movie.status || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Network
                </p>

                <p className="mt-1 text-sm text-white">
                  {movie.network?.name || movie.webChannel?.name || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Country
                </p>

                <p className="mt-1 text-sm text-white">
                  {movie.network?.country?.name || "N/A"}
                </p>
              </div>
            </div>

            {/* Official Website */}
            {movie.officialSite && (
              <a
                href={movie.officialSite}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block bg-red-600 px-6 py-3 text-sm font-semibold transition hover:bg-red-700"
              >
                Visit Official Site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
