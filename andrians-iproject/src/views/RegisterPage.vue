<template>
  <NavBar />
  <SideBar />
  <section id="register" class="navbarr">
    <div class="container register mt-5">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <form id="formRegister" @submit.prevent="handleRegister">
            <h1 class="h3 mb-3 font-weight-normal">
              Register <i class="bi bi-arrow-right-square"></i>
            </h1>

            <!-- username -->
            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Username"
                v-model="registerForm.username"
              />
              <label for="phonenNumber">Username</label>
            </div>
            <!-- phone number -->
            <div class="form-floating">
              <input
                type="number"
                class="form-control"
                id="registerPhoneNumber"
                placeholder="Phone Number"
                v-model="registerForm.phoneNumber"
              />
              <label for="phonenNumber">Phone Number</label>
            </div>
            <!-- email -->
            <div class="form-floating">
              <input
                type="email"
                class="form-control"
                id="registerEmail"
                placeholder="Email"
                v-model="registerForm.email"
              />
              <label for="email">Email</label>
            </div>

            <!-- password -->
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="registerPassword"
                placeholder="Password"
                v-model="registerForm.password"
              />
              <label for="password">Password</label>
            </div>

            <div class="d-grid">
              <button
                class="btn btn-lg btn-primary btn-block mt-2"
                type="submit"
              >
                Register
              </button>
              <br />
              <button
                class="btn btn-lg btn-primary btn-block mt-2"
                id="cancelRegister"
                @click.prevent="handleLogin"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
  components: {
    NavBar,
    SideBar,
  },
  data() {
    return {
      registerForm: {
        username: '',
        phoneNumber: '',
        email: '',
        password: '',
      },
    };
  },

  methods: {
    ...mapActions(useCounterStore, ['register']),
    handleLogin() {
      this.$router.push({ name: 'login' });
    },
    handleRegister() {
      this.register(this.registerForm);
    },
  },
};
</script>
