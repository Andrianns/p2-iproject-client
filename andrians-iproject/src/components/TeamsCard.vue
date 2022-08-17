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
              <button class="btn-primary rounded text-black">Detail</button>

              <button class="btn-primary rounded text-black">
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
export default {
  props: ['teams'],
};
</script>
