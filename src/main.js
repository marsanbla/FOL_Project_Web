import { createApp } from "vue";
//import '../style.css'
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Users from "./views/Users.vue";
import Stats from "./views/Stats.vue";
import LoginView from "./views/LoginView.vue";
import UserP from "./views/UserP.vue";
import Dashboard from "./views/Dashboard.vue";
//import '/main.css'
import TemasLibro from "./views/TemasLibro.vue";
import Chart from "chart.js/auto";
//import Vuetify from 'vuetify'
//import 'vuetify/dist/vuetify.css'

//const vuetify = new Vuetify()

const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: "/home",
      name: "Home",
      component: Home,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "dashboard",
          name: "Dashboard",
          component: Dashboard,
        },
        {
          path: "users",
          name: "Users",
          component: Users,
        },
        {
          path: "stats",
          name: "Stats",
          component: Stats,
        },
        {
          path: "userp",
          name: "User Panel",
          component: UserP,
        },
        {
          path: "temas",
          name: "Temas Libro",
          component: TemasLibro,
        },
      ],
    },
    { path: "/about", name: "About", component: About },
    { path: "/users", name: "users", component: Users },
    { path: "/stats", name: "stats", component: Stats },
    { path: "/", name: "login", component: LoginView },
    { path: "/userp", name: "user", component: UserP },
    { path: "/dashboard", name: "dashboard", component: Dashboard },
    { path: "/temas", name: "temas", component: TemasLibro }
  ],
});

createApp(App)
  .use(router)
  //.use(vuetify)
  .mount("#app");
