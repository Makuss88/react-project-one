import React, { useState, Fragment, useEffect, useCallback } from 'react';
import axios from 'axios';

import { BASE_URL, BASE_URL_JOKE } from './014section-database/assets/Text'

import MoviesList from './014section-database/components/MoviesList';
import './App.css';

const App = () => {
  const [joke, setJoke] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null)

  const axiosMoviesHandlers = useCallback(async () => { // założyłem async i away
    setIsLoading(true);
    setError(null);
    try {
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
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [])

  useEffect(() => {
    axiosMoviesHandlers();
  }, [axiosMoviesHandlers]);

  const fetchMoviesHandlers = () => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(data => {
        const transform = data.results.map(movieData => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transform);
      }
      );
  }

  const axiosJokeHandlers = () => {

    setIsLoading(true);

    axios.get(BASE_URL_JOKE).then((response) => { setJoke(response.data.joke) })

    setIsLoading(false);
  }

  let contetn = <p>Found no movies...</p>;

  if (movies.length > 0) {
    contetn = <MoviesList movies={movies} />;
  }

  if (error) {
    contetn = <p>Error: {error}</p>;
  }

  if (isLoading) {
    contetn = <p>Loading...</p>;
  }

  return (
    <Fragment>
      <section>
        <button onClick={axiosJokeHandlers}>Fetch JOKES!</button>
        <button onClick={fetchMoviesHandlers}>Fetch Movies</button>
        <button onClick={axiosMoviesHandlers}>Axiox Movies</button>
      </section>
      <section>
        {joke}
        {contetn}
      </section>
    </Fragment>
  );
}

export default App;
