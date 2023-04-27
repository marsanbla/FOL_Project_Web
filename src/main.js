import { createApp } from 'vue'
import '../style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Users from './views/Users.vue'
import Hawaii from './views/Hawaii.vue'
import Jamaica from './views/Jamaica.vue'
import Panama from './views/Panama.vue'
import Dashboard from './views/Dashboard.vue'
import '/main.css'




const router = createRouter({

    history: createWebHashHistory(),

    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/about', name: 'About', component: About },
        { path: '/Users', name: 'users', component: Users },
        { path: '/hawaii', name: 'hawaii', component: Hawaii },
        { path: '/jamaica', name: 'jamaica', component: Jamaica },
        { path: '/panama', name: 'panama', component: Panama },
        { path: '/dashboard', name: 'dashboard', component: Dashboard },




    ]

})


createApp(App)
    .use(router)
    .mount('#app')