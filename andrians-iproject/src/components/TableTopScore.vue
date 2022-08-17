<template>
  <section>
    <div class="col-lg-6-border table-list">
      <div class="container">
        <h2>Premier League 2022-2023</h2>

        <div class="card">
          <h2 style="padding: 10px 15px 0px 15px">Top Scores</h2>
          <div class="text-center">
            <table class="table table-success table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Nationality</th>
                  <th>Goals</th>
                  <th>Team</th>
                  <th>Club</th>
                </tr>
              </thead>
              <tbody
                id="tableBody"
                v-for="(topScore, index) in top"
                :key="topScore.id"
              >
                <tr>
                  <td>{{ topScore.name }}</td>
                  <td>{{ topScore.position }}</td>
                  <td>{{ topScore.nationality }}</td>
                  <td>{{ topScore.goals }}</td>
                  <td>{{ topScore.team }}</td>
                  <td><img :src="topScore.logo" alt="" class="imgTable" /></td>
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
  props: ['top'],
};
</script>
