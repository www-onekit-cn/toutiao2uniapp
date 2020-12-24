import Vue from 'vue'
import App from './App'
import toutiao2uniapp from "../toutiao2uniapp"
Vue.use(toutiao2uniapp);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
