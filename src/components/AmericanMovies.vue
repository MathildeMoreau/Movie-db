<script>
import axios from 'axios';
import MoviesList from "./utils/MoviesList.vue";
import SortButtons from "./utils/SortButtons.vue";

export default {
  name: "AmericanMovies",
  data(){
    return{
      americanMovies: []
    }   
  },
  created(){
      axios.get('https://api.themoviedb.org/3/discover/movie?api_key=ab23ecb6d0327b2f7fe052d49dd9fe3b&language=fr&sort_by=popularity.desc&page=1&vote_count.gte=1000&with_original_language=en')
    .then((res) => {
      this.americanMovies = res.data.results
      console.log(this.americanMovies)
    })
  },
  components: {
    MoviesList,
    SortButtons,
  }
}
</script>

<template>
  <div class="french-films">
    <h2>🇺🇸 Les meilleurs films américains 🇺🇸</h2>
    <SortButtons :films="americanMovies"/>
    <div class="french-movies">
      <MoviesList :movies="americanMovies"/>
    </div>
  </div>
</template>

<style>

</style>