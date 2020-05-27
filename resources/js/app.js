require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import Scrollspy from 'vue2-scrollspy';
Vue.use(Scrollspy);

// Register Comp
import App from './App.vue';
import Body from './components/Body'
import Show_1 from './components/Show_1'
import Show_2 from './components/Show_2'


// Router 
const router = new VueRouter({
    mode:'history',
    routes:[
        {
            name:'body',
            path:'/',
            component:Body
        },
        {
            name:'show_1',
            path:'/show-1',
            component:Show_1
        },
        {
            name:'show_2',
            path:'/show-2',
            component:Show_2
        }
    ]
});

Vue.router = router
App.router = Vue.router

// Rendering
new Vue({
    el: '#app',
    render: h => h(App)
});