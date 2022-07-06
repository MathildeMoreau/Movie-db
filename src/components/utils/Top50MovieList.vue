<script>

import MovieCard from './MovieCard.vue';

export default {
  name: "Top50MovieList",
  props: ["movies"],
  components: {
    MovieCard,
  }
}

</script>

<template>
      <div v-for="(movie, index) in movies" id="movie-container" :key="movie.id">
        <MovieCard 
        :id = "movie.id"
        :image = "movie.poster_path"
        :title = "movie.title"
        :note = "movie.vote_average"
        :description = "movie.overview"
        :date = "movie.release_date"
        :index = "index"
        />
      </div>
</template>

<style lang="scss">
  #movie-container{
    display: flex;
    flex-wrap: wrap;
  }
</style>