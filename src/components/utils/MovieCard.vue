<script>
import { RouterLink } from "vue-router";

export default {
  name: "MovieCard",
  props: ["id", "image", "title", "note", "description", "date"],
  data() {
    return {
      preUrl: "https://image.tmdb.org/t/p/original/",
    };
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      // Then specify how you want your dates to be formatted
      return new Intl.DateTimeFormat("default", { dateStyle: "long" }).format(
        date
      );
    },
  },
};
</script>

<template>
  <div id="card">
    <RouterLink :to="`/movie/${id}`">
      <h3>{{ title }} - {{ note }} ⭐</h3>
      <img :src="preUrl + image" alt="" />
      <p id="description">{{ description.substring(0, 200) + "..." }}</p>
      <p id="release">Date de sortie : {{ formatDate(date) }}</p>
      <button>Voir plus</button>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";

#card {
  border: 1px solid rgba(86, 86, 86, 0.354);
  border-radius: 5px;
  margin: 0.5rem;
  width: 20rem;
  height: 900px;
  padding-bottom: 2%;
  a{
    color: black;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:visited{
      color: black;
    }
  h3 {
    color: $color1;
    text-align: center;
    height: 60px;
    display: flex;
    align-items: center;
    font-family: "Paytone One", sans-serif;
  }
  img {
    width: 100%;
    height: 480px;
  }
  #description {
    padding: 0 10%;
    text-align: justify;
  }
  p {
    font-family: "Ubuntu", sans-serif;
  }
  #release{
    font-weight: bold;
  }
  button{
    background: $color1;
    color: $color2;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    padding: 1rem;
    justify-self: flex-end;
    align-self: normal;
    margin: 2rem;
  }
}
}
</style>
