import React from 'react'
import { useParams } from 'react-router'
import { useMovieContext } from '../context/MovieContext'

const MovieDetail = () => {
  const { id } = useParams()
  const { data, isLoading, error } = useMovieContext()

  const displayMovie = data?.find((m) => String(m.id) === String(id))

  console.log(displayMovie)

 

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    )
  }

  if (error || !displayMovie) {
    return (
      <div className="p-6 w-full max-w-screen-xl mx-auto min-h-[88vh] flex items-center justify-center">
        <p className="text-red-400 font-semibold">Movie not found.</p>
      </div>
    )
  }

  return (
    <div className="p-6 w-full h-fit max-w-screen-xl flex flex-col mx-auto min-h-[88vh] text-white">
      <div className="w-full h-full flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-3/6 lg:w-1/3">
          <img
            src={displayMovie.image.original}
            alt={displayMovie.name}
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        <div className="w-full min-h-full p-5 md:w-3/6 lg:w-2/3 rounded-lg drop-shadow-2xl flex flex-col">
          <h2 className="text-3xl font-bold mb-3 text-white">{displayMovie.name}</h2>

          <p className="text-sm text-gray-300 mb-1">
            <span className="font-semibold text-gray-200">Genres:</span>{' '}
            {displayMovie.genres.join(', ')}
          </p>

          <p className="text-sm text-gray-300 mb-1">
            <span className="font-semibold text-gray-200">Language:</span>{' '}
            {displayMovie.language}
          </p>

          <p className="text-sm text-gray-300 mb-3">
            <span className="font-semibold text-gray-200">Rating:</span>{' '}
            {displayMovie.rating?.average ?? 'N/A'}
          </p>

          <div
            className="mt-4 text-sm text-gray-200 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: displayMovie.summary }}
          />
        </div>
      </div>
     
    </div>
  )
}

export default MovieDetail
