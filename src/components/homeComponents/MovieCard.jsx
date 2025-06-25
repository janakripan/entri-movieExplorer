import React from 'react'
import { useNavigate } from 'react-router'

const MovieCard = ({ movie }) => {
    const navigate = useNavigate()
    const handleClick=(id)=>{
        navigate(`/${id}`)
    }
  return (
    <div className="w-full h-full min-h-[400px] flex flex-col group p-3 bg-base-100 rounded-lg shadow-md">
      <img
        src={movie.image.medium}
        alt={movie.name}
        className="rounded-lg transition duration-300 group-hover:brightness-75 min-h-70 object-cover"
      />

      <h3 className="text-lg font-semibold pt-2 truncate">{movie.name}</h3>

      <div className="pt-1 text-base text-gray-600 flex flex-wrap gap-x-1 gap-y-0.5 ">
        <span className="font-medium text-gray-100">Genre:</span>
        {movie.genres.map((genre, index) => (
          <span key={index} className="text-gray-500 text-sm pt-1">
            {genre}
            {index < movie.genres.length - 1 && ","}
          </span>
        ))}
      </div>

      {/* Spacer pushes button to bottom */}
      <div className="flex-grow"></div>

      <button 
      onClick={()=>handleClick(movie.id)}
      className="w-full mt-2 px-5 py-2 rounded-full border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition duration-300 active:scale-95 active:bg-primary/85">View More</button>
    </div>
  )
}

export default MovieCard
