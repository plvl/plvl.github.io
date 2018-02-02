<template>
  <div class="container">
    <table>
      <thead>
        <th>Player</th>
        <th>Power Level</th>
        <th>Rank</th>
      </thead>
      <tbody>
        <tr v-for="value in values">
          <td>{{value.player}}</td>
          <td>{{value.powerlevel}}</td>
          <td>#{{value.rank}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';
  import { getData } from './../services/gsx.service';
  import * as Bluebird from 'bluebird';

  @Component
  export default class AppContainer extends Vue {
    public values: Array<{ player: string, powerlevel: string, rank: string }>;

    data() {
      return {
        values: []
      };
    }

    created() {
      getData()
        .then((response) => {
          const promise = new Bluebird((resolve, reject) => {
            response.sheets[0].fetch((err, sheet) => {
              if (err) {
                return reject(err);
              }
              return resolve(sheet);
            });
          });
          return promise;
        })
        .catch((error) => {
          console.log(error);
        })
        .then((data) => {
          this.values = data;
        });
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
  }
  td, th {
    padding: 5px;
  }
</style>
