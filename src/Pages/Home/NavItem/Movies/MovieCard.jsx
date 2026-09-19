import React from "react";
import { FiArrowRight, FiCalendar, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

const MovieCard = ({ show }) => {
  const releaseYear = show.premiered
    ? new Date(show.premiered).getFullYear()
    : "N/A";

  return (
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
        <Link
          to={`/movies/${show.id}`}
          className="mt-4 flex items-center justify-center gap-2 bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
        >
          See Details
          <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
