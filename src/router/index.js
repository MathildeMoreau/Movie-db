import { createRouter, createWebHistory } from "vue-router";
import AmericanMovies from "../components/AmericanMovies.vue";
import FrenchMovies from "../components/FrenchMovies.vue";
import TopRatedMovies from "../components/TopRatedMovies.vue";
import LastMovies from "../components/LastMovies.vue";
import MovieDetails from "../components/MoviesDetails.vue";
import SearchMovies from "../components/SearchMovies.vue";

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
    {
      path: "/LastMovies",
      name: "LastMovies",
      component: LastMovies,
    },
    {
      path: "/movie/:id",
      name: "Movie Details",
      component: MovieDetails,
    },
    {
      path: "/search",
      name: "Search Movie",
      component: SearchMovies,
    },
  ],
});

export default router;
