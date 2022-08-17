import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from 'sweetalert2';
import router from '../router';
export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    mainUrl: 'http://localhost:3000',
    teams: [],
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2,
  // },

  actions: {
    async fetchTeams() {
      try {
        const { data } = await axios({
          method: 'get',
          url: `${this.mainUrl}/teams`,
        });

        this.teams = data.data;
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },
  },
});
