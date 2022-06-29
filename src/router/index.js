import { createRouter, createWebHistory } from "vue-router";
import AmericanMovies from "../components/AmericanMovies.vue";
import FrenchMovies from "../components/FrenchMovies.vue";
import TopRatedMovies from "../components/TopRatedMovies.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/AmericanMovies",
      name: "AmericanMovies",
      component: AmericanMovies,
    },
    {
      path: "/FrenchMovies",
      name: "FrenchMovies",
      component: FrenchMovies,
    },
    {
      path: "/TopRated",
      name: "TopRated",
      component: TopRatedMovies,
    },
  ],
});

export default router;
