import { useEffect, useState } from "react"
import { getTrending } from "../helpers/getTrending";
import { useSeleccionador } from "./useSeleccionador"

export const useFetchTrending = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { select } = useSeleccionador();


  const getTrendingMovies = async (media_type, time_window) => {
    const results = await getTrending(media_type, time_window);
    setMovies(results);
    setIsLoading(false);
  }

  useEffect(() => {
    if(select = "serie"){
      getTrendingMovies("serie");
    }
    else if(select = "movie"){
      getTrendingMovies("movie");
    }
    else{
      getTrendingMovies();
    }
    
  }, []);
  
  return {
    movies,
    isLoading
  }
}