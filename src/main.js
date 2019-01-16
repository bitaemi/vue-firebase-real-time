import Vue from 'vue';
import App from './App.vue';

Vue.filter('snippet', val => {
  if(!val || typeof(val) != 'string') {
    return ' ';
  }
  val = val.slice(0, 50);
  return val + '...';
});

new Vue({
  el: '#app',
  render: h => h(App)
});
