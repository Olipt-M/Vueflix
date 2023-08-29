import { defineStore } from 'pinia';

export const useShopStore = defineStore('shop', {
  state: () => {
    return {
      moviesInCart: []
    }
  },
  actions: {
    addToCart(product) {
      this.moviesInCart.push(product);
    },
    // removeFromCart(product) {
      
    // }
  },
  getters: {
    nbMoviesInCart(state) {
      return state.moviesInCart.length;
    }
  }
});
