import { defineStore } from 'pinia';

export const useLoginStore = defineStore('login', {
  state: () => {
    return {
      user: undefined,
      requireNotConnectedOverlay: false,
    }
  },
  actions: {
    authenticateUser(user) {
      this.user = user;
    },
    disconnectUser() {
      this.user = undefined;
    },
    openNotConnectedOverlay() {
      this.requireNotConnectedOverlay = true;
    },
    closeNotConnectedOverlay() {
      this.requireNotConnectedOverlay = false;
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.user !== null && state.user !== undefined;
    },
    getAuthenticatedUser(state) {
      return state.user;
    },
    isRequiredNotConnectedModal: (state) => state.requireNotConnectedOverlay,
  }
});
