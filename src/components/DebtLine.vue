<template>
  <tr>
    <td>{{ formatDate }}</td>
    <td>{{ debt }}</td>
    <td>{{ repayment }}</td>
  </tr>
</template>

<script>
  import { store } from '@/store'
  export default {
    props: ['data'],
    methods: {
    },
    computed: {
      formatDate () {
        var options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
        var date = new Date(this.data.date)
        return date.toLocaleString('ru', options)
      },
      debt () {
        return this.data.type === "debt" ? this.data.value : ""
      },
      repayment () {
        return this.data.type === "repayment" ? this.data.value : ""
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
