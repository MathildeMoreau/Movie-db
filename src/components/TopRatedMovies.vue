<script>
import axios from 'axios';
import MoviesList from "./utils/MoviesList.vue";

export default {
  name: "TopRatedMovies",
  data(){
    return{
      topRated: []
    }   
  },
  created(){
      axios.get('https://api.themoviedb.org/3/discover/movie?api_key=ab23ecb6d0327b2f7fe052d49dd9fe3b&language=fr&sort_by=vote_average.desc&include_adult=false&include_video=false&vote_count.gte=1000')
    .then((res) => {
      this.topRated = res.data.results
      console.log(this.topRated)
    })
  },
  components: {
    MoviesList,
  }
}
</script>

<template>
  <div class="french-films">
    <h2>🔝 Top 50</h2>
    <div class="french-movies">
      <MoviesList :movies="topRated"/>
    </div>
  </div>
</template>

<style>

</style>