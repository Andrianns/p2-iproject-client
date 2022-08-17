<template>
  <NavBar />
  <SideBar />
  <TableStandings />
</template>
<script>
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';
import TableStandings from '../components/TableStandings.vue';
export default {
  components: {
    NavBar,
    SideBar,
    TableStandings,
  },
};
</script>
