import Vue from 'vue';
import App from './App.vue';
import store from './store';
import dateFilter from './filters/date';
import numberFilter from './filters/amount';
import './components';

import './assets/sass/index.scss';

Vue.filter('toFormatedDate', dateFilter.formatedDate);
Vue.filter('toFormatedAmount', numberFilter.formatedAmount);
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
