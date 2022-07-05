<script>

import Navbar from './Navbar.vue';

export default {
  components: {
    Navbar
  }
}

</script>

<template>

  <footer>
    Menu
    <Navbar />

  </footer>

</template>

<style lang="scss">
@import '../../assets/style/style.scss';
  footer{
    background: #3D1C1C;
    padding: 2%;
    color: $color2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    nav{
      display: flex;
      flex-direction: column;
      a{
        color: $color2;
        font-size: 0.8rem;
        &:visited{
          color: $color2;
        }
      }
    }
  }



</style>