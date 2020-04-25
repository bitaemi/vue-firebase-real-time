import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Chat from '@/components/Chat'
import GMap from '@/components/home/GMap'
import SignUp from '@/components/auth/SignUp'
import Login from '@/components/auth/Login'
import firebase from 'firebase'
import ViewProfile from '@/components/profile/ViewProfile'
import GameCanvas from '@/components/GameCanvas'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/gmap',
      name: 'GMap',
      component: GMap,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/view-profile/:id',
      name: 'ViewProfile',
      component: ViewProfile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
        if (to.params.name) {
          next()
        }
        else {
          next({name: 'Welcome'})
        }
      }
    },
    {
      path: '/tiny-redux',
      name: 'GameCanvas',
      component: GameCanvas
    },
  ]
})

router.beforeEach((to, from, next) => {
  //check to see if route requires auth

  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    // check auth state of user
    let user = firebase.auth().currentUser
    if (user) {
        // user signed in proceed to route
        next()
        } else {
        // no  user signed in, redirect to home
        next({name: 'Login'})
        }
   } else {
       next()
  }
})

export default router