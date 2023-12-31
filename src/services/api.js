import { $fetch } from 'ohmyfetch'
// const api = $fetch.create({baseURL: 'http://localhost:3000'}) // local
const api = $fetch.create({baseURL: 'https://api.vueflix.boxydev.com'}) // distant

export const getMovies = async (page = 1, maxMoviesAtOnce = 5) => {
  return api(`/movies?_page=${page}&_limit=${maxMoviesAtOnce}`, { method: 'GET' });
}

export const getNbOfMovies = async () => api(`/movies`, { method: 'GET' })
  .then(response => response.length)

export const getMovieAndActors = async (movieId) => {
  return api(`/movies/${movieId}?_expand=genre&_expand=actors`, { method: 'GET' });
}

export const getComments = async (movieId) => {
  return api(`/movies/${movieId}/comments?_expand=user`, { method: 'GET' });
}

export const sendComment = async (movieId, comment) => {
  return api(`/movies/${movieId}/comments`, { method: 'POST', body: comment });
}

export const createNewAccount = async (credentials) => {
  return api(`/users`, { method: 'POST', body: credentials });
}

export const signIn = async (credentials) => {
  return api(`/signin`, { method: 'POST', body: credentials });
}
