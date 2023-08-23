import { $fetch } from 'ohmyfetch'
const api = $fetch.create({baseURL: 'http://localhost:3000'})

export const getMovies = async () => {
  return api('/movies', { method: 'GET' });
}

export const getMovieAndActors = async (movieId) => {
  return api(`/movies/${movieId}?_expand=genre&_expand=actors`, { method: 'GET' });
}
