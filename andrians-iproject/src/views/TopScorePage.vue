<template>
  <NavBar />
  <SideBar />
  <TableTopScore :top="topScore" />
</template>
<script>
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';
import TableTopScore from '../components/TableTopScore.vue';
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
  components: {
    NavBar,
    SideBar,
    TableTopScore,
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchTopScore']),
  },
  computed: {
    ...mapState(useCounterStore, ['topScore']),
  },
  created() {
    this.fetchTopScore();
  },
};
</script>
