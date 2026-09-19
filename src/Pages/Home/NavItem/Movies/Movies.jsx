import React, { useEffect, useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import MovieCard from "./MovieCard";

const Movies = () => {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [error, setError] = useState("");

  // Load all shows when page opens
  useEffect(() => {
    const fetchShows = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("https://api.tvmaze.com/shows");

        if (!response.ok) {
          throw new Error("Failed to fetch shows");
        }

        const data = await response.json();

        setShows(data);
      } catch (error) {
        console.error(error);
        setError("Something went wrong while loading movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, []);

  // Search shows
  useEffect(() => {
    const searchShows = async () => {
      // If search is empty, load all shows again
      if (!search.trim()) {
        try {
          setSearchLoading(true);

          const response = await fetch("https://api.tvmaze.com/shows");
          const data = await response.json();

          setShows(data);
        } catch (error) {
          console.error(error);
        } finally {
          setSearchLoading(false);
        }

        return;
      }

      try {
        setSearchLoading(true);
        setError("");

        const response = await fetch(
          `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(
            search.trim(),
          )}`,
        );

        if (!response.ok) {
          throw new Error("Search failed");
        }

        const data = await response.json();

        // Search API returns:
        // [{ score: ..., show: {...} }]
        const searchResults = data.map((item) => item.show);

        setShows(searchResults);
      } catch (error) {
        console.error(error);
        setError("Unable to search movies.");
      } finally {
        setSearchLoading(false);
      }
    };

    // Small delay so API isn't called on every keystroke
    const timer = setTimeout(() => {
      searchShows();
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <div className="min-h-screen bg-black px-4 py-24 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1450px]">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-[4px] text-red-500">
            Explore
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Browse Movies & Shows
          </h1>

          <p className="mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">
            Search for your favorite movies and TV shows and discover more
            information about them.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-10">
          <div className="relative mx-auto max-w-3xl">
            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-zinc-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a movie..."
              className="h-14 w-full border border-zinc-700 bg-zinc-900 pl-14 pr-14 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-red-600 sm:h-16 sm:text-base"
            />

            {search && (
              <button
                onClick={clearSearch}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-xl text-zinc-400 transition hover:text-white"
                aria-label="Clear search"
              >
                <FiX />
              </button>
            )}
          </div>
        </div>

        {/* Loading */}
        {(loading || searchLoading) && (
          <div className="py-20 text-center">
            <p className="text-zinc-400">
              {search ? "Searching..." : "Loading movies..."}
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && !searchLoading && error && (
          <div className="py-20 text-center">
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {/* Results */}
        {!loading && !searchLoading && !error && (
          <>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-semibold sm:text-2xl">
                {search ? `Search Results for "${search}"` : "Popular Shows"}
              </h2>

              <span className="text-sm text-zinc-500">
                {shows.length} results
              </span>
            </div>

            {shows.length > 0 ? (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {shows.map((show) => (
                  <MovieCard key={show.id} show={show} />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <p className="text-lg text-zinc-400">
                  No movies or shows found.
                </p>

                <p className="mt-2 text-sm text-zinc-600">
                  Try searching with a different title.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Movies;
