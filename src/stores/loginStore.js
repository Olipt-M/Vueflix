import { defineStore } from 'pinia';

export const useLoginStore = defineStore('login', {
  state: () => {
    return {
      isConnected: false
    }
  },
  actions: {
    switchConnectedStatus() {
      if (this.isConnected) {
        this.isConnected = false;
      } else {
        this.isConnected = true;
      }
    }
  }
});
