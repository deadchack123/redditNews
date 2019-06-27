import Vue from 'vue'
import Router from 'vue-router'
import EverythingNews from '@/components/EverythingNews'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', name: 'EverythingNews', component: EverythingNews
    },
    {
      path: '/:id', name: 'EverythingNews-next',  component: EverythingNews
    }
  ]
})
