import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import './assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store.js'
import Notification from './components/notification'
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Notification)
const router = createRouter()
const store = createStore()

store.registerModule('c', {
    state: {
        text: 'fff'
    }
})
// store.watch((state) => state.count + 1, (newVal) => {
//    console.log('new value' + newVal)
// })
// store.subscribe((mutation, state) => {
//    console.log(mutation.type)
//    console.log(mutation.payload)
// })
store.subscribeAction((action, state) => {
    console.log(action.type)
    console.log(action.payload)
})
router.beforeEach((to, from, next) => {
    console.log('before each')
    next()
})
router.beforeResolve((to, from, next) => {
    console.log('before resolve')
    next()
})
router.afterEach((to, from) => {
    console.log('after each')
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
