import React, { useState, Fragment } from 'react';
import axios from 'axios';

import { BASE_URL } from './014section-database/assets/Text'

import MoviesList from './014section-database/components/MoviesList';
import './App.css';

const App = () => {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMoviesHandlers() { // założyłem async i away
    setIsLoading(true);
    const response = await axios.get(BASE_URL);
    const data = await response.data.results;
    const transform = data.map(movieData => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transform);
    setIsLoading(false);
  }

  return (
    <Fragment>
      <section>
        <button onClick={fetchMoviesHandlers}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>Found no movies...</p>}
        {isLoading && <p> Loading...</p>}
      </section>
    </Fragment>
  );
}

export default App;
