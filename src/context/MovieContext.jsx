
import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          "https://api.tvmaze.com/shows"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const movies = await response.json();
        setData(movies);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{ data, loading, error }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => {
  return useContext(MovieContext);
};
