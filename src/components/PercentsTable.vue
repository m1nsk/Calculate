<template>
  <table class="table">
    <thead class="thead-dark">
    <tr>
      <th scope="col">Дата</th>
      <th scope="col">Начисленно за месяц</th>
    </tr>
    </thead>
    <tbody>
    <percents-line v-for="item, index in percentsData" :data="item" v-bind:key="index"></percents-line>
    <tr>
      <td></td>
      <td>{{ this.percentsSum }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  import { store } from '@/store'
  import getPercents from '@/helpers/percentHelper'
  import PercentsLine from '@/components/PercentsLine.vue'
  import percentHelper from "../helpers/percentHelper";
  export default {
    components: {
      PercentsLine
    },
    name: 'debt',
    data () {
      return {
      }
    },
    computed: {
      debtData () {
        return this.$store.getters.debtData
      },
      debtOptions () {
        return this.$store.getters.debtOptions
      },
      percentsData () {
        if (this.debtOptions.date !== "" && this.debtOptions.percents !== "") {
          return percentHelper(this.debtData, this.debtOptions)
        }
        return []
      },
      percentsSum () {
        return Math.round(this.percentsData.reduce((sum, item) => sum += item.percents, 0) * 100) / 100
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
