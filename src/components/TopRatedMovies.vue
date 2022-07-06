<script>
import axios from 'axios';
import Top50MovieList from "./utils/Top50MovieList.vue";
import SortButtons from "./utils/SortButtons.vue";

export default {
  name: "TopRatedMovies",
  data(){
    return{
      topRated: [],
      topRated2: [],
      topRated3: [],
      allRated: [],
      allRated60: []
    }   
  },
  created(){
      axios.get('https://api.themoviedb.org/3/discover/movie?api_key=ab23ecb6d0327b2f7fe052d49dd9fe3b&language=fr&sort_by=vote_average.desc&include_adult=false&include_video=false&vote_count.gte=1000')
    .then((res) => {
      this.topRated = res.data.results
    })
      axios.get('https://api.themoviedb.org/3/discover/movie?api_key=ab23ecb6d0327b2f7fe052d49dd9fe3b&language=fr&sort_by=vote_average.desc&include_adult=false&include_video=false&page=2&vote_count.gte=1000')
    .then((res) => {
      this.topRated2 = res.data.results
      this.allRated = this.topRated.concat(this.topRated2)
    })
      axios.get('https://api.themoviedb.org/3/discover/movie?api_key=ab23ecb6d0327b2f7fe052d49dd9fe3b&language=fr&sort_by=vote_average.desc&include_adult=false&include_video=false&page=3&vote_count.gte=1000')
    .then((res) => {
      this.topRated3 = res.data.results
      this.allRated60 = this.allRated.concat(this.topRated3)
      console.log(this.allRated60)
    })
  },
  components: {
    Top50MovieList,
    SortButtons
}
}
</script>

<template>
  <div class="french-films">
    <h2>🔝 Top 50</h2>
    <SortButtons :films="allRated60" />
    <div class="french-movies">
      <Top50MovieList :movies="allRated60.slice(0, 50)"/>
    </div>
  </div>
</template>

<style>

</style>