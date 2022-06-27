import Vue from 'vue'
import App from './App.vue'
//引入字体适配
import "@/mobile/flexible"
//引入清除默认样式
import "@/styles/reset.css"
import router from "@/router"

import { Tabbar, TabbarItem, NavBar } from 'vant';

import {recommendMusicAPI} from '@/api'
async function fn(){
  const res = await recommendMusicAPI()
  console.log(res);
}
fn()


Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
