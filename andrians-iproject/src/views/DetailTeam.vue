<template>
  <SideBar />
  <DetailTeam :detailTeam="teamDetail" />
</template>

<script>
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';
import DetailTeam from '../components/DetailTeam.vue';
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';
export default {
  components: {
    NavBar,
    SideBar,
    DetailTeam,
  },

  methods: {
    ...mapActions(useCounterStore, ['detailTeam']),
  },
  computed: {
    ...mapState(useCounterStore, ['teamDetail']),
  },
  created() {
    this.detailTeam(this.$route.params.id);
  },
};
</script>
