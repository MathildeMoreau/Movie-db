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
    <RouterLink to="/AmericanMovies">🇺🇸</RouterLink>
    <RouterLink to="/FrenchMovies">🇫🇷</RouterLink>
    <RouterLink to="/TopRated">Top 50</RouterLink>
    <RouterLink to="/LastMovies">Derniers films</RouterLink>
    <RouterLink to="/Search">🔍</RouterLink>
  </nav>
</template>

<style lang="scss" scoped>

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

  @media all and (max-width: 480px){
    nav{
      flex-direction: column;
      a{
        font-size: 1.1rem;
      }
    }
  }
</style>
