<template>
  <div id="sidebar" class="active">
    <div
      class="sidebar-wrapper bg-light"
      style="
        border-right: solid grey;
        background-image: url(https://img.freepik.com/free-vector/realistic-soccer-football-stadium-illustration_52683-60377.jpg?w=996&t=st=1660751789~exp=1660752389~hmac=a1a5c7e70e590ac941cfe74400be4c7570fb8b458d1f10a1ef39546a76626b90);
      "
    >
      <div class="sidebar-header" style="">
        <div class="d-flex justify-content-between">
          <div class="logo">
            <h2 class="bg-light rounded text-center">Home Of Champions</h2>
          </div>
        </div>
      </div>
      <div class="sidebar-menu">
        <ul class="menu">
          <li class="sidebar-item">
            <a
              href=""
              class="sidebar-link hover-overlay"
              style="background: #d2dae2"
              @click.prevent="handleTeam"
            >
              <i class="icon"
                ><img
                  class="icon"
                  src="https://cdn-icons-png.flaticon.com/512/1246/1246386.png?w=826&t=st=1660752965~exp=1660753565~hmac=5288a54e9f75ccaca059f6d4821638611cfdb75834d3aec04a944a40915eb35a"
                  alt=""
              /></i>
              <span class="text-black">Teams</span>
            </a>
          </li>
          <li class="sidebar-item">
            <a
              href=""
              class="sidebar-link"
              style="background: #d2dae2"
              @click.prevent="handleLogin"
            >
              <i
                ><img
                  class="icon"
                  src="https://cdn-icons-png.flaticon.com/512/1209/1209634.png?w=826&t=st=1660752858~exp=1660753458~hmac=d16258fdd746a887bf5aba6fe194fc97914ae210ec1bcc936809b4eb928a4151"
                  alt=""
              /></i>
              <span class="text-black">Login</span>
            </a>
          </li>
          <li class="sidebar-item">
            <a
              href=""
              class="sidebar-link hover-overlay"
              style="background: #d2dae2"
              @click.prevent="handleMyTeam"
            >
              <i class="icon"
                ><img
                  class="icon"
                  src="https://cdn-icons-png.flaticon.com/512/1239/1239281.png?w=826&t=st=1660753183~exp=1660753783~hmac=90214e1e2ac0a9e596acfec28096c0549181bb2637c1894d079cb27ff238db91"
                  alt=""
              /></i>
              <span class="text-black">My Team</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogin() {
      this.$router.push({ name: 'login' });
    },
    handleMyTeam() {
      this.$router.push({ name: 'myTeam' });
    },
    handleTeam() {
      this.$router.push({ name: 'home' });
    },
  },
};
</script>
