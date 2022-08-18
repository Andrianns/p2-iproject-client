<template>
  <div class="product-card bg-black">
    <section v-for="(team, index) in teams" :key="team.id">
      <div style="padding-top: 20px">
        <div class="card bg-light" style="width: 18rem; height: auto">
          <img class="card-img-top" :src="team.logo" alt="Card image cap" />
          <div class="card-body rounded bg-secondary">
            <h5 class="card-title text-black">{{ team.team }}</h5>
            <p class="card-text"></p>
            <span class="bi bi-pin-map text-black">{{ team.stadium }}</span>
            <br />
            <br />
            <div>
              <router-link
                :to="{ name: 'detailTeam', params: { id: team.id } }"
              >
                <button class="btn-primary rounded text-black">Detail</button>
              </router-link>
              <button
                class="btn-primary rounded text-black"
                @click.prevent="handleChoose(team.id)"
              >
                Choose Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import router from '../router';
import { useCounterStore } from '../stores/counter';
import Swal from 'sweetalert2';
export default {
  props: ['teams'],
  methods: {
    ...mapActions(useCounterStore, ['chooseTeam']),
    handleChoose(id) {
      if (!localStorage.access_token) {
        router.push({ name: 'login' });
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You need login first',
        });
      } else {
        this.chooseTeam(id);
      }
    },
  },
};
</script>
