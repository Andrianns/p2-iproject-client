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
    mainUrl: 'https://web-production-676df.up.railway.app',
    teams: [],
    favourite: [],
    topScore: [],
    standingsClub: [],
    teamDetail: {},
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
    async fetchStandings() {
      try {
        const { data } = await axios({
          method: 'get',
          url: `${this.mainUrl}/standings-PL`,
        });
        this.standings = data.data;
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },

    async chooseTeam(id) {
      try {
        const { data } = await axios({
          method: 'post',
          url: `${this.mainUrl}/teamsFavourite/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });

        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, choose it!',
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Choosed!', 'You just selected this team ', 'success');
            router.push({ name: 'myTeam' });
          } else {
            router.push({ name: 'home' });
          }
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },

    async sendMail(id) {
      try {
        const { data } = await axios({
          method: 'get',
          url: `${this.mainUrl}/sendMail/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: `We're send email to you, check your inbox!`,
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },

    async detailTeam(id) {
      try {
        const { data } = await axios({
          method: 'get',
          url: `${this.mainUrl}/teams/${id}`,
        });
        this.teamDetail = data.teams;
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },

    async handleCredentialResponse(response) {
      try {
        const { data } = await axios({
          method: 'post',
          url: `${this.mainUrl}/user/google-signin`,
          headers: {
            token_google: response.credential,
          },
        });
        console.log(data);
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('email', data.email);
        localStorage.setItem('username', data.username);
        router.push({ name: 'home' });
        // this.fetchProduct();
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
