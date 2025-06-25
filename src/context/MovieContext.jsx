import { createContext, useContext } from "react"
import { useGetShows } from "../Api/hooks"

const MovieContext = createContext()

export const MovieProvider = ({ children }) => {
  const { data, isLoading, error, isSuccess } = useGetShows()

  return (
    <MovieContext.Provider value={{ data, isLoading, error, isSuccess }}>
      {children}
    </MovieContext.Provider>
  )
}

// ✅ Custom hook to use MovieContext
export const useMovieContext = () => useContext(MovieContext)
