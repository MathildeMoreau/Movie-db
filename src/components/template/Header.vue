<script>

import Navbar from './Navbar.vue';
import { RouterLink, RouterView } from "vue-router";

export default {
  name: 'Header',
  components: {
    Navbar,
    RouterLink
  }
}

</script>


<template>

  <header>
    <div id="logo">
      <RouterLink to="/">
        <img src="../../assets/img/woolly-popcorn.png" alt="Pop-corn">
        <h1>Popcorn Movie</h1>
      </RouterLink>

    </div>
    <Navbar />

  </header>

</template>

<style lang="scss">
@import '../../assets/style/style.scss';

  header{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: $color1;
    background: $color2;
    #logo{
      display: flex;
      align-items: center;
      a{
        color: $color1;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-family: 'Paytone One', sans-serif;
        &:visited{
          color: $color1;
        }
      }
      img{
        width: 10%;
      }
      h1{
        font-size: 2rem;
        margin: 0 2rem;
        font-family: 'Paytone One', sans-serif;
      }
    }

  }

    @media all and (max-width: 480px){
      #logo{
        width: 50%;
      }
    
    }


</style>