import React from 'react'
import { MovieCard } from '../components/MovieCard';
import { useFetchTrending } from '../hooks/useFetchTrending'

export const Trending = () => {

  const { movies } = useFetchTrending();

  return (
    
    <div className='container row row-cols-1 row-cols-md-3 g-3'>

      <label for="seleccionar">¿Qué quiere ver?</label>

      <select name="seleccionar" id="seleccionar">
        <option value="all">All</option>
        <option value="peliculas">Peliculas</option>
        <option value="series">Series</option>
      </select>

      { movies.map((movie) => 
        <MovieCard 
          key={movie.id}
          { ...movie }
        />
      )}

      
    </div>
  )
}
