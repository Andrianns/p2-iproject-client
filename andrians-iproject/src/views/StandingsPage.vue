<template>
  <NavBar />
  <SideBar />
  <TableStandings :stands="standings" />
</template>
<script>
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';
import TableStandings from '../components/TableStandings.vue';
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
  components: {
    NavBar,
    SideBar,
    TableStandings,
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchStandings']),
  },
  computed: {
    ...mapState(useCounterStore, ['standings']),
  },
  created() {
    this.fetchStandings();
  },
};
</script>
