import { $fetch } from 'ohmyfetch'
const api = $fetch.create({baseURL: 'http://localhost:3000'})

export const getMovie = async () => {
  return api('/movies', { method: 'GET' });
}
