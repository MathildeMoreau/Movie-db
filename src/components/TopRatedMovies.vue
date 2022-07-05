<script>
import axios from 'axios';
import MoviesList from "./utils/MoviesList.vue";

export default {
  name: "TopRatedMovies",
  data(){
    return{
      topRated: [],
      topRated2: [],
      topRated3: []
    }   
  },
  created(){
      axios.get('https://api.themoviedb.org/3/discover/movie?api_key=ab23ecb6d0327b2f7fe052d49dd9fe3b&language=fr&sort_by=vote_average.desc&include_adult=false&include_video=false&vote_count.gte=1000')
    .then((res) => {
      this.topRated = res.data.results
      console.log(this.topRated)
    })
      axios.get('https://api.themoviedb.org/3/discover/movie?api_key=ab23ecb6d0327b2f7fe052d49dd9fe3b&language=fr&sort_by=vote_average.desc&include_adult=false&include_video=false&page=2&vote_count.gte=1000')
    .then((res) => {
      this.topRated2 = res.data.results
    })
      axios.get('https://api.themoviedb.org/3/discover/movie?api_key=ab23ecb6d0327b2f7fe052d49dd9fe3b&language=fr&sort_by=vote_average.desc&include_adult=false&include_video=false&page=3&vote_count.gte=1000')
    .then((res) => {
      this.topRated3 = res.data.results
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
      <MoviesList :movies="topRated2"/>
      <MoviesList :movies="topRated3"/>
    </div>
  </div>
</template>

<style>

</style>