import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddSmootie from '@/components/AddSmootie'
import EditSmootie from '@/components/EditSmootie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/add-smootie',
      name: 'AddSmootie',
      component: AddSmootie
    },
    {
      path: '/edit-smootie/:slug',
      name: 'EditSmootie',
      component: EditSmootie
    }
  ]
})
