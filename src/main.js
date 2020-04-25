// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueChatScroll from 'vue-chat-scroll'
import firebase from 'firebase'
import store from './reduxState'

Vue.config.productionTip = false
var reduxState = {
  fields: store.getState().fields
};
var unsub = store.subscribe(function() {
  var state = store.getState();
  // bindings
  reduxState.fields = state.fields;
})
let app = null;

//wait for firebase auth before creating the app:
firebase.auth().onAuthStateChanged(() => {
//init app if not already created:
  if (!app) {
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>',
      data: reduxState,
    })
  }
})

Vue.use(VueChatScroll)

/* eslint-disable no-new */

