import { createRouter, createWebHistory } from "vue-router";
import AmericanMovies from "../components/AmericanMovies.vue";
import FrenchMovies from "../components/FrenchMovies.vue";
import LastMovies from "../components/LastMovies.vue";

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
      path: "/LastMovies",
      name: "LastMovies",
      component: LastMovies,
    },
  ],
});

export default router;
