<template>
  <NavBar />
  <SideBar />
  <TeamsCard :teams="teams" />

  <h1>TEST</h1>
</template>
<script>
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';
import TeamsCard from '../components/TeamsCard.vue';
import { useCounterStore } from '../stores/counter';
import { mapActions, mapState } from 'pinia';

export default {
  components: {
    NavBar,
    SideBar,
    TeamsCard,
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchTeams']),
  },
  computed: {
    ...mapState(useCounterStore, ['teams']),
  },
  created() {
    this.fetchTeams();
  },
};
</script>
