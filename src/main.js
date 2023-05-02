import { createApp } from 'vue'
//import '../style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Users from './views/Users.vue'
import Stats from './views/Stats.vue'
import LoginView from './views/LoginView.vue'
import Panama from './views/Panama.vue'
import Dashboard from './views/Dashboard.vue'
//import '/main.css'
import Chart from 'chart.js/auto';
//import Vuetify from 'vuetify'
//import 'vuetify/dist/vuetify.css'



//const vuetify = new Vuetify()


const router = createRouter({

    history: createWebHashHistory(),

    routes: [
        { path: '/home', name: 'Home', component: Home },
        { path: '/about', name: 'About', component: About },
        { path: '/users', name: 'users', component: Users },
        { path: '/stats', name: 'stats', component: Stats },
        { path: '/', name: 'login', component: LoginView },
        { path: '/panama', name: 'panama', component: Panama },
        { path: '/dashboard', name: 'dashboard', component: Dashboard },




    ]

})


createApp(App)
    .use(router)
    //.use(vuetify)
    .mount('#app')