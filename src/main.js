import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel';
import Pagination from '@/components/Pagination';
import { Button,MessageBox } from 'element-ui';
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name,Carousel);
Vue.component(Pagination.name,Pagination);
Vue.component(Button.name, Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
import router from '@/router';

import store from '@/store';
Vue.config.productionTip = false
import '@/mock/mockServe';
import 'swiper/css/swiper.css';
import * as API from '@/api';
import VueLazyLoad from 'vue-lazyload';
import lyw from '@/assets/lyw.jpg';
Vue.use(VueLazyLoad,{
  loading:lyw,
});
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this;
    Vue.prototype.$API=API;
  },
  router,
  store
}).$mount('#app')
