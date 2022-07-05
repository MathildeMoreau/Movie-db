<script>
import axios from 'axios';
import MoviesList from "./utils/MoviesList.vue";

export default {
  name: "LastMovies",
  data(){
    return{
      lastReleased: []
    }   
  },
  created(){
      axios.get('https://api.themoviedb.org/3/discover/movie?api_key=ab23ecb6d0327b2f7fe052d49dd9fe3b&language=fr&sort_by=release_date.desc&include_adult=false&include_video=false&vote_count.gte=1000')
    .then((res) => {
      this.lastReleased = res.data.results
      console.log(this.lastReleased)
    })
  },
  components: {
    MoviesList,
  }
}
</script>

<template>
  <div class="french-films">
    <h2>🆕 Dernières sorties</h2>
    <div class="french-movies">
      <MoviesList :movies="lastReleased"/>
    </div>
  </div>
</template>

<style>

</style>