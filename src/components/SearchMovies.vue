<template>

  <input type="text" v-model="search" @keyup="searchMovie">

</template>

<script>
import axios from 'axios';

export default {
  name: "SearchMovies",
  data(){
    return{
      findMovies: []
    }   
  },
  methods: {
    searchMovie() {
      if (search.value != ""){
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=ab23ecb6d0327b2f7fe052d49dd9fe3b&language=fr&query=' + search.value)
      .then((res) => {
        this.findMovies = res.data.results
        console.log(this.findMovies)
      })
      }
    }
  },
}
</script>



<style>

</style>