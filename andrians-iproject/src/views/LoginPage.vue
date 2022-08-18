<template>
  <NavBar />
  <SideBar />
  <section id="login" class="navbarr">
    <div class="container login mt-5">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <form id="formLogin" @submit.prevent="handleLogin">
            <h1 class="h3 mb-3 font-weight-normal">
              Login <i class="bi bi-arrow-right-square"></i>
            </h1>

            <div class="form-floating">
              <input
                type="email"
                class="form-control"
                id="loginEmail"
                placeholder="Email"
                v-model="loginForm.email"
              />
              <label for="email">Email</label>
            </div>

            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="loginPassword"
                placeholder="Password"
                v-model="loginForm.password"
              />
              <label for="password">Password</label>
            </div>

            <div class="d-grid">
              <button
                class="btn btn-lg btn-primary btn-block mt-2"
                id="btnLogin"
              >
                Login
              </button>
              <br />
              <div
                id="buttonDiv"
                data-client_id=""
                data-login_uri="https://your.domain/your_login_endpoint"
                data-auto_prompt="false"
              ></div>
              <br />
              No have account ?
              <button
                id="btnRegister"
                class="btn btn-lg btn-primary btn-block mt-2"
                @click.prevent="hanldeRegister"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';

export default {
  components: {
    NavBar,
    SideBar,
  },
  data() {
    return {
      loginForm: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ['login', 'handleCredentialResponse']),
    handleLogin() {
      this.login(this.loginForm);
    },
    hanldeRegister() {
      this.$router.push('register');
    },
  },
  mounted() {
    const cb = this.handleCredentialResponse;
    window.onload = function () {
      google.accounts.id.initialize({
        client_id:
          '740813234781-3912m8lu6epnos2kvi6tc0rh56vbb7ma.apps.googleusercontent.com',
        callback: cb,
      });
      google.accounts.id.renderButton(
        document.getElementById('buttonDiv'),
        { theme: 'outline', size: 'large' } // customization attributes
      );
      // google.accounts.id.prompt(); // also display the One Tap dialog
    };
  },
};
</script>
