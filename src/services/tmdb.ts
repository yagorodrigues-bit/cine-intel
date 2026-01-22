import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TMDB_BASE_URL,
  params: {
    api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
    language: 'pt-BR',
  },
});

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  overview: string;
  backdrop_path?: string;
  genres?: { id: number; name: string }[];
  runtime?: number;
}

export const getPopularMovies = async (page = 1) => {
  const response = await api.get('/movie/popular', {
    params: { page },
  });
  return response.data;
};

export const searchMovies = async (query: string, page = 1) => {
  const response = await api.get('/search/movie', {
    params: { query, page },
  });
  return response.data;
};

export const getMovieDetails = async (id: string) => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};