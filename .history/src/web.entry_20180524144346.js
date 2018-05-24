import Vue from 'vue'
import './style.scss'

import moment from 'moment-timezone'
moment.tz.setDefault('UTC')

import App from './components/App.vue';


new Vue({
  el: '#app',
  components: {
  App
  }
});
