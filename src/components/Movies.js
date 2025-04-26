import React, { useState, useEffect } from "react";

const Movies = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const savedMovies = localStorage.getItem('savedMovies');
    if (savedMovies) {
      setMovies(JSON.parse(savedMovies));
    }
  }, []);

  const searchMovies = async () => {
    const apiKey = "3b76dbb098784ee673e0e105db48c278";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
      localStorage.setItem('savedMovies', JSON.stringify(data.results));

    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className="movies-container">
      <h2>Search for a Movie</h2>
      <input
        type="text"
        placeholder="Enter movie title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchMovies}>Search</button>

      <div className="movie-results">
        {movies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>Release Date: {movie.release_date}</p>
            <p>Overview: {movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
