<template>
  <section>
    <div class="col-lg-6-border table-list">
      <div class="container">
        <h2>Premier League 2022-2023</h2>
        <div class="card">
          <h2 style="padding: 10px 15px 0px 15px">{{ detailTeam.name }}</h2>
          <div class="text-center">
            <table class="table table-success table-striped">
              <thead>
                <tr>
                  <th>Logo</th>
                  <th>Coach</th>
                  <th>Address</th>
                  <th>Club Colors</th>
                  <th>Stadium</th>
                  <th>Founded</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody id="tableBody">
                <tr>
                  <td>
                    <img :src="detailTeam.crest" alt="" class="imgTable" />
                  </td>
                  <td>{{ detailTeam.coach.name }}</td>
                  <td>{{ detailTeam.address }}</td>
                  <td>{{ detailTeam.clubColors }}</td>
                  <td>{{ detailTeam.venue }}</td>
                  <td>{{ detailTeam.founded }}</td>
                  <td>{{ detailTeam.website }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="col-lg-6-border table-list">
      <div class="container">
        <div class="card">
          <h2 style="padding: 10px 15px 0px 15px">Squad</h2>
          <div class="text-center">
            <table class="table table-success table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Nationality</th>
                  <th>Position</th>
                  <th>Date Of Birth</th>
                </tr>
              </thead>
              <tbody
                id="tableBody"
                v-for="(team, index) in detailTeam.squad"
                :key="team.id"
              >
                <tr>
                  <td>{{ team.name }}</td>
                  <td>{{ team.position }}</td>
                  <td>{{ team.nationality }}</td>
                  <td>{{ team.dateOfBirth }}</td>
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
  props: ['detailTeam'],
};
</script>
