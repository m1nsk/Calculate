<template>
  <div>
    <input type="button" value="user1" @click=onUserClicked(1)>
    <input type="button" value="user2" @click=onUserClicked(2)>
    <debt-table style="float: left; width: 70%"></debt-table>
    <calc-options style="float: left; width: 25%; padding: 20px"></calc-options>
    <percents-table style="width: 70%; padding-top: 300px"></percents-table>
  </div>
</template>

<script>
  import { store } from '@/store'
  import DebtTable from '@/components/DebtTable.vue'
  import PercentsTable from '@/components/PercentsTable.vue'
  import CalcOptions from '@/components/DebtOptions.vue'
  export default {
    components: {
      DebtTable,
      CalcOptions,
      PercentsTable
    },
    name: 'debt',
    data () {
      return {
      }
    },
    methods: {
      onUserClicked (id) {
        this.$store.dispatch('loadData', id)
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
