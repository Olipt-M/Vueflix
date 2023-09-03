import { defineStore } from 'pinia';

export const useShopStore = defineStore('shop', {
  state: () => {
    return {
      moviesInCart: []
    }
  },
  actions: {
    addToCart(movie) {
      this.moviesInCart.push(movie);
    },
    removeFromCart(movie) {
      this.moviesInCart.splice(this.moviesInCart.indexOf(movie), 1);
    },
    emptyCart() {
      this.moviesInCart = [];
    }
  },
  getters: {
    nbMoviesInCart: (state) => state.moviesInCart.length,
    isInCart: (state) => {
      return (movieId) => state.moviesInCart.some(movie => movie.id === movieId);
    },
    getMoviesInCart: (state) => state.moviesInCart,
  }
});
