import Vue from 'vue'
import Router from 'vue-router'
import DebtPage from '@/components/DebtPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DebtPage',
      component: DebtPage
    }
  ]
})
