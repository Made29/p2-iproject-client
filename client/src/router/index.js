import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue"
import LoginPage from "@/views/LoginPage.vue"
import RegisterPage from "@/views/RegisterPage.vue"
import StockPage from "@/views/StockPage.vue" 
import Favstock from "@/views/Favstock.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/stock",
      name: "stock",
      component: StockPage,
    },
    {
      path: "/watchlist",
      name: "watchlist",
      component: Favstock,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === 'login' && localStorage.getItem("access_token")) next({ name: 'home' })
  if (to.name === 'register' && localStorage.getItem("access_token")) next({ name: 'home' })
  else if (to.name === 'home' && !localStorage.getItem("access_token")) next({ name: 'login' })
  else if (to.name === 'stock' && !localStorage.getItem("access_token")) next({ name: 'login' })
  else if (to.name === 'watchlist' && !localStorage.getItem("access_token")) next({ name: 'login' })
  else next()
})

export default router;
