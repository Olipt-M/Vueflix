import { defineStore } from 'pinia';

export const useLoginStore = defineStore('login', {
  state: () => {
    return {
      user: undefined
    }
  },
  actions: {
    authenticateUser(user) {
      this.user = user;
    },
    disconnectUser() {
      this.user = undefined;
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.user !== null && state.user !== undefined;
    },
    getAuthenticatedUser(state) {
      return state.user;
    }
  }
});
