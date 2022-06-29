<script>
import axios from "axios";
import MoviesList from "./utils/MoviesList.vue";

export default {
  name: "FrenchMovies",
  data() {
    return {
      frenchMovies: [],
    };
  },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=ab23ecb6d0327b2f7fe052d49dd9fe3b&language=fr&sort_by=popularity.desc&page=1&vote_count.gte=1000&with_original_language=fr"
      )
      .then((res) => {
        this.frenchMovies = res.data.results;
        console.log(this.frenchMovies);
      });
  },
  components: {
    MoviesList,
  },
};
</script>

<template>
  <div class="french-films">
    <h2>🇫🇷 Les meilleurs films français 🇫🇷</h2>
    <div class="french-movies">
      <MoviesList :movies="frenchMovies" />
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/style/style.scss';

  .french-films{
    display: flex;
    flex-direction: column;
    h2{
    font-family: 'Paytone One', sans-serif;
    }
    .french-movies{
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
