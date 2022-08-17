<template>
  <section
    class="navbarr bg-light"
    style="
      background-image: url(https://img.freepik.com/free-photo/football-player-with-blue-uniform-front-lights_306105-813.jpg?w=1380&t=st=1660753582~exp=1660754182~hmac=3aeebb7bbc48340007fe860795a04dd1d3abaf22c0f9329de7f25a6271beb340);
    "
  >
    <nav>
      <div class="dashboard bg-light" style="padding: 35px 15px">
        <h2>Miracle Of Football</h2>
      </div>

      <div class="dropdown">
        <div class="dropdown-center">
          <button
            class="btn bg-light dropdown-toggle text-black"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Premier League
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="" @click.prevent="handleTopScore"
                >Top Score</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="" @click.prevent="handleStandings"
                >Standings</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="right bg-light" v-if="isLogin">
        <h5>Hello, {{ username }}</h5>

        <div class="logout">
          <button class="btn btn-danger" @click.prevent="handleLogout">
            logout
          </button>
        </div>
      </div>
    </nav>
    <hr style="margin: 0" />
  </section>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';
export default {
  data() {
    return {
      username: localStorage.username,
    };
  },
  methods: {
    handleTopScore() {
      this.$router.push({ name: 'topScore' });
    },
    handleStandings() {
      this.$router.push({ name: 'standings' });
    },
    handleLogout() {
      localStorage.clear();
      this.$router.push({ name: 'home' });
      this.isLogin = false;
    },
  },
  computed: {
    ...mapState(useCounterStore, ['isLogin']),
  },
  created() {
    this.isLogin;
  },
};
</script>
