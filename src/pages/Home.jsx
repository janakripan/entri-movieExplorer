import React, { useState } from "react";
import MovieCard from "../components/homeComponents/MovieCard";
import { useMovieContext } from "../context/MovieContext";

const Home = () => {
  const [visible, setVisible] = useState(15);
  const { data, isLoading, error } = useMovieContext();

  const handleShowMore = () => {
    setVisible((prev) => prev + 15);
  };

  const visibleMovie = data?.slice(0, visible);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-base-100">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  // Error UI with message
  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-base-100">
        <p className="text-red-500 text-lg font-semibold">
          ❌ Failed to load movies: {error.message}
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 w-full max-w-screen-xl mx-auto  ">
      <div className="w-full h-fit min-h-screen ">
        <ul className="w-full h-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-cols-1 gap-4">
          {visibleMovie.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </ul>

        {visible < data.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleShowMore}
              className="btn btn-outline btn-primary"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
