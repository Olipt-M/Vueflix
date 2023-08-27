import { $fetch } from 'ohmyfetch'
const api = $fetch.create({baseURL: 'http://localhost:3000'})

export const getMovies = async () => {
  return api('/movies', { method: 'GET' });
}

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
