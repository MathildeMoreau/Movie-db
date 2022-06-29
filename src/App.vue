<script>
import Header from "./components/template/Header.vue";
import { RouterView } from "vue-router";
import axios from 'axios';
import Footer from "./components/template/Footer.vue";
import MoviesList from "./components/utils/MoviesList.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer,
    MoviesList,
    RouterView,
  },
  data(){
    return {
      popularMovies: []
    }
  },
  created(){
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=ab23ecb6d0327b2f7fe052d49dd9fe3b&language=fr-FR&sort_by=release_date.desc&page=1&vote_count.gte=1000&with_watch_monetization_types=flatrate')
    .then((res) => {
      this.popularMovies = res.data.results
      console.log(this.popularMovies)
    })
  },
};
</script>

<template>
  <Header />
  <body>
    <div v-if="$route.path == '/'" >
    <h2>Vos films préférés sont sur ce site !</h2>
    <div id="container">
      <MoviesList :movies="popularMovies"/>

    </div>
    </div>
    <div v-else>
      <RouterView />
    </div>
  </body>
  <Footer />
</template>

<style lang="scss">
@import "./assets/style/style.css";

h2{
  text-align: center;
}
#container{
    display: flex;
    flex-wrap: wrap;
    margin: 0 2rem;
    justify-content: space-around;
}
</style>
