<script>
import { RouterLink } from "vue-router";

export default {
  name: "Navbar",
  components: {
    RouterLink,
  }
};
</script>

<template>
  <nav>
    <RouterLink to="/AmericanMovies">Films américains</RouterLink>
    <RouterLink to="/FrenchMovies">Films français</RouterLink>
    <RouterLink to="/LastMovies">Derniers films</RouterLink>
  </nav>
</template>

<style lang="scss">

@import '../../assets/style/style.scss';


  nav{
    display: flex;
    flex-wrap: wrap;
    a{
      margin-left: 1rem;
      margin-right: 3rem;
      text-decoration: none;
      font-size: 1.5rem;
      color: $color1;
      font-family: 'Paytone One', sans-serif;
      &:visited{
        color: $color1;
      }
    }
  }
</style>
