import { defineStore } from 'pinia';
import axios from 'axios';
import Swal from 'sweetalert2';
import router from '../router';
export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    stateLogin: {
      email: '',
      password: '',
    },
    stateRegister: {
      username: '',
      phoneNumber: '',
      email: '',
      password: '',
    },
    mainUrl: 'http://localhost:3000',
    teams: [],
    favourite: [],
    topScore: [],
    isLogin: false,
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

    async login(payload) {
      try {
        this.stateLogin = payload;
        const { data } = await axios({
          method: 'post',
          url: `${this.mainUrl}/user/login`,
          data: {
            email: this.stateLogin.email,
            password: this.stateLogin.password,
          },
        });
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('email', data.email);
        localStorage.setItem('username', data.username);
        this.isLogin = true;
        router.push({ name: 'home' });
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'You are login',
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },

    async register(payload) {
      this.stateRegister = payload;
      try {
        const { data } = await axios({
          method: 'post',
          url: `${this.mainUrl}/user/register`,
          data: {
            username: this.stateRegister.username,
            phoneNumber: this.stateRegister.phoneNumber,
            email: this.stateRegister.email,
            password: this.stateRegister.password,
          },
        });
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'You are registered',
        });
        router.push({ name: 'login' });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },

    async fetchFavouriteTeam() {
      try {
        const { data } = await axios({
          method: 'get',
          url: `${this.mainUrl}/teamsFavourite`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.favourite = data.data;
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },

    async fetchTopScore() {
      try {
        const { data } = await axios({
          method: 'get',
          url: `${this.mainUrl}/top-score-PL`,
        });
        this.topScore = data.data;
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },
  },
});
