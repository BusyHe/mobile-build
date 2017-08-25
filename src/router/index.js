import Vue from 'vue'
import Router from 'vue-router'

const Main = resolve => require(['@/page/main.vue'], resolve);

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        }
    ]
})
