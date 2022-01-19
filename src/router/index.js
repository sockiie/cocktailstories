import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Cocktails from "../views/Cocktails.vue";
import Favorites from "../views/Favorites.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Favorites",
    name: "Favorites",
    component: Favorites,
  },
  {
    path: "/Cocktails",
    name: "Cocktails",
    component: Cocktails,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
