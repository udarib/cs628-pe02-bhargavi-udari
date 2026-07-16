import React, { useState } from "react";

import "./MovieList.css";
 
function MovieList() {

  // Movie data

  const movies = [

    {

      title: "Inception",

      genre: "Science Fiction",

      releaseYear: 2010,

    },

    {

      title: "The Shawshank Redemption",

      genre: "Drama",

      releaseYear: 1994,

    },

    {

      title: "The Dark Knight",

      genre: "Action",

      releaseYear: 2008,

    },

    {

      title: "Interstellar",

      genre: "Science Fiction",

      releaseYear: 2014,

    },

    {

      title: "Titanic",

      genre: "Romance",

      releaseYear: 1997,

    },

    {

      title: "Avengers: Endgame",

      genre: "Action",

      releaseYear: 2019,

    }

  ];
 
  // State for selected genre

  const [selectedGenre, setSelectedGenre] = useState("All Genres");
 
  // Unique genres

  const genres = [

    "All Genres",

    ...new Set(movies.map(movie => movie.genre))

  ];
 
  // Filter movies

  const filteredMovies =

    selectedGenre === "All Genres"

      ? movies

      : movies.filter(movie => movie.genre === selectedGenre);
 
  // Alert on click

  const handleMovieClick = (title) => {

    alert(title);

  };
 
  return (
<div className="movie-list">
 
      <h1>Movie List</h1>
 
      <select

        value={selectedGenre}

        onChange={(e) => setSelectedGenre(e.target.value)}
>

        {genres.map((genre, index) => (
<option key={index} value={genre}>

            {genre}
</option>

        ))}
</select>
 
      <div className="movie-container">
 
        {filteredMovies.map((movie, index) => (
 
          <div

            key={index}

            className="movie-card"

            onClick={() => handleMovieClick(movie.title)}
>
 
            <h2>{movie.title}</h2>
 
            <p><strong>Genre:</strong> {movie.genre}</p>
 
            <p><strong>Released:</strong> {movie.releaseYear}</p>
 
          </div>
 
        ))}
 
      </div>
 
    </div>

  );

}
 
export default MovieList;