import Vue from 'vue'
import Router from 'vue-router'
import InterventionsList from '@/components/Interventions/InterventionsList.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'InterventionsList',
      component: InterventionsList
    }
  ]
})
