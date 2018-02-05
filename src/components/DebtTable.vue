<template>
  <table class="table">
    <thead class="thead-dark">
    <tr>
      <th scope="col">Дата</th>
      <th scope="col">Поступление основного долга</th>
      <th scope="col">Погашение основного долга</th>
    </tr>
    </thead>
    <tbody>
    <table-line v-for="item, index in debtData" :data="item" v-bind:key="index"></table-line>
    <tr>
      <td></td>
      <td>{{ this.debtSum }}</td>
      <td>{{ this.repayment }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  import { store } from '@/store'
  import TableLine from '@/components/DebtLine.vue'
  export default {
    components: {
      TableLine
    },
    name: 'debt',
    data () {
      return {
      }
    },
    methods: {
    },
    created: function () {
    },
    computed: {
      debtData () {
        return this.$store.getters.debtData
      },
      debtSum () {
        return this.debtData.filter(item => item.type.toLowerCase() === "debt").reduce((sum, item) => sum + parseInt(item.value), 0)
      },
      repayment () {
        return this.debtData.filter(item => item.type.toLowerCase() === "repayment").reduce((sum, item) => sum + parseInt(item.value), 0)
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
