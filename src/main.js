import Vue from 'vue'
import App from './App.vue'
//引入字体适配
import "@/mobile/flexible"
//引入清除默认样式
import "@/styles/reset.css"
import router from "@/router"

import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
