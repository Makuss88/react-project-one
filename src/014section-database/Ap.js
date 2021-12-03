import React, { useState, Fragment, useEffect, useCallback } from 'react';
import axios from 'axios';

import { BASE_URL, BASE_URL_JOKE, BASE_URL_POST } from './assets/Text'

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie'
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



  const fetchMoviesHandlers = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(BASE_URL_POST);
      if (!response.ok) {
        throw new Error("dupa zbita")
      }
      const data = await response.json()

      const loadedMovie = [];
      for (const key in data) {
        loadedMovie.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,

        })
      }

      setMovies(loadedMovie);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [])

  useEffect(() => {
    fetchMoviesHandlers();
  }, [fetchMoviesHandlers]);

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

  const addMovieHandler = async (movie) => {
    console.log("movie", movie);
    const response = await fetch(BASE_URL_POST, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        'Contetn-Type': 'application/json'
      }
    });
    const data = await response.json()
    console.log("data", data);
  }

  return (
    <Fragment>
      <section>
        <section>
          <AddMovie onAddMovie={addMovieHandler} />
        </section>
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
