<template>
  <div class="product-card bg-black">
    <section v-for="(favo, index) in fav" :key="fav.id">
      <div style="padding-top: 20px">
        <div class="card bg-light" style="width: 18rem; height: auto">
          <img
            class="card-img-top"
            :src="favo.Team.logo"
            alt="Card image cap"
          />
          <div class="card-body rounded bg-secondary">
            <h5 class="card-title text-black">{{ favo.Team.name }}</h5>
            <p class="card-text"></p>
            <span class="bi bi-pin-map text-black">{{
              favo.Team.stadium
            }}</span>
            <br />
            <br />
            <div>
              <button class="btn-primary rounded text-black">Notif Me!</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['fav'],
};
</script>
