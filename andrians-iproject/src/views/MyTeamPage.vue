<template>
  <NavBar />
  <SideBar />
  <FavouriteCard :fav="favourite" />
</template>

<script>
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';
import FavouriteCard from '../components/FavouriteCard.vue';
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';
export default {
  components: {
    NavBar,
    SideBar,
    FavouriteCard,
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchFavouriteTeam']),
  },
  computed: {
    ...mapState(useCounterStore, ['isLogin', 'favourite']),
  },

  created() {
    this.fetchFavouriteTeam();
  },
};
</script>
