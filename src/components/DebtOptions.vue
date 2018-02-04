<template>
  <div>
    <p><b>Дата начисления процентов:</b><br>
      <input type="text" size="40" v-model="options.date">
    </p>
    <p>
      <b>{{ messageDate }}</b><br>
    </p>
    <p><b>Процентная ставка(годовые):</b><br>
      <input type="text" size="40" v-model="options.percents">
    </p>
    <p>
      <b>{{ messagePercent }}</b><br>
    </p>
    <input type="button" size="40" value="Расчитать" @click="onBtnClicked">
  </div>
</template>

<script>
  import { store } from '@/store'
  export default {
    data () {
      return {
        options: {
          date: "",
          percents: ""
        },
        messageDate: "",
        messagePercent: ""
      }
    },
    methods: {
      onBtnClicked () {
        console.log("clicked")
        if(this.validateDate() == this.validatePercents() == false) {
          this.message = ""
          this.$store.commit("setCalcOptions", this.options)
        } else {
          this.message = "Неправильные данные"
        }
      },
      validateDate() {
        var result = parseInt(this.options.date) && this.options.date > 0 && this.options.date <= 31
        if (result) {
          this.messageDate = ""
        } else {
          this.messageDate = "Необходимо ввести целое число в диапазоне 1..31"
        }
        return result
      },
      validatePercents() {
        var result = parseFloat(this.options.percents) && this.options.percents >= 0
        if (result) {
          this.messagePercent = ""
        } else {
          this.messagePercent = "Необходимо ввести положительное число"
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
