<template>
  <section>
    <div class="col-lg-6-border table-list">
      <div class="container">
        <h2>Premier League 2022-2023</h2>

        <div class="card">
          <h2 style="padding: 10px 15px 0px 15px">Standings</h2>
          <div class="text-center">
            <table class="table table-success table-striped">
              <thead>
                <tr>
                  <th>Club</th>
                  <th>Team</th>
                  <th>Position</th>
                  <th>Played Games</th>
                  <th>Win</th>
                  <th>Draw</th>
                  <th>Lost</th>
                  <th>Former</th>
                </tr>
              </thead>
              <tbody
                id="tableBody"
                v-for="(standings, index) in stands"
                :key="standings.id"
              >
                <tr>
                  <td><img :src="standings.logo" alt="" class="imgTable" /></td>
                  <td>{{ standings.team }}</td>
                  <td>{{ standings.position }}</td>
                  <td>{{ standings.playedGames }}</td>
                  <td>{{ standings.won }}</td>
                  <td>{{ standings.draw }}</td>
                  <td>{{ standings.lost }}</td>
                  <td>{{ standings.form }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ['stands'],
};
</script>
