<script>

import MovieCard from './MovieCard.vue';

export default {
  name: "MoviesList",
  props: ["movies"],
  components: {
    MovieCard,
  }
}

</script>

<template>
      <div v-for="movie in movies" id="movie-container">
        <MovieCard 
        :image = "movie.poster_path"
        :title = "movie.title"
        :note = "movie.vote_average"
        :description = "movie.overview"
        :date = "movie.release_date"
        />
      </div>
</template>

<style lang="scss">
  #movie-container{
    display: flex;
    flex-wrap: wrap;
  }
</style>