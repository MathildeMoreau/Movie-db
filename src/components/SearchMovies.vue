<script>
import axios from "axios";
import MovieCard from "./utils/MovieCard.vue";

export default {
  name: "SearchMovies",
  data() {
    return {
      findMovies: [],
      search: "",
    };
  },
  methods: {
    searchMovie() {
      if (this.search.value != "") {
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=ab23ecb6d0327b2f7fe052d49dd9fe3b&language=fr&query=${this.search}`
          )
          .then((res) => {
            this.findMovies = res.data.results;
            console.log(this.findMovies);
          });
      }
    },
  },

  components: {
    MovieCard,
  },
};
</script>

<template>
  <div class="search">
    <input
      type="text"
      v-model="search"
      @keyup="searchMovie()"
      placeholder="Rechercher par nom de film... 🔍"
    />
    <div class="eachMovie">
      <div v-for="movie in findMovies">
        <MovieCard
          :id="movie.id"
          :image="movie.poster_path"
          :title="movie.title"
          :note="movie.vote_average"
          :description="movie.overview"
          :date="movie.release_date"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search {
  display: flex;
  flex-direction: column;
  width: 100%;
  input {
    margin: 3rem;
    padding: 1rem;
    width: 80%;
    border: 1px solid gray;
    border-radius: 5px;
  }
  .eachMovie {
    display: flex;
    flex-wrap: wrap;
    min-height: 300px;
  }
}
</style>
