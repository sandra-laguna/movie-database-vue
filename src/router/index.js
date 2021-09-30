import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import TrendingFilms from "../views/TrendingFilms.vue";
import SearchFilm from "../views/SearchFilm.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/movies",
    name: "TrendingFilms",
    component: TrendingFilms
  },
  {
    path: "/searchfilm",
    name: "SearchFilm",
    component: SearchFilm
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
