<script>

export default {
  name: "SortButtons",
  props: ["films"],
  methods: {
    sortByDate(){
      if (!this.sortedByDate){
        this.films.sort(function (a,b){
          if (a.release_date < b.release_date){
            return 1;
          } else if (a.release_date > b.release_date){
            return -1;
          }
        })
        this.sortedByDate = true;
      } else {
        this.films.sort(function (a,b){
          if (a.release_date > b.release_date){
            return 1;
          } else if (a.release_date < b.release_date){
            return -1;
          }
        })
        this.sortedByDate = false;
      }
    },
    sortByTitle(){
      if (!this.sortedByTitle){
        this.films.sort(function (a,b){
          if (a.title > b.title){
            return 1;
          } else if (a.title < b.title){
            return -1;
          }
        })
        this.sortedByTitle = true;
      } else {
        this.films.sort(function (a,b){
          if (a.title < b.title){
            return 1;
          } else if (a.title > b.title){
            return -1;
          }
        })
        this.sortedByTitle = false;
      }
    },
    sortByRate(){
      if (!this.sortedByRate){
        this.films.sort(function (a,b){
        return a.vote_average - b.vote_average;
      })
      this.sortedByRate = true;
      } else {
        this.films.sort(function (a,b){
        return b.vote_average - a.vote_average;
      })
      this.sortedByRate = false;
      }
    }
  },
  data(){
    return{
      sortedByDate: false,
      sortedByTitle: false,
      sortedByRate: false,
    }
  }

}

</script>

<template>
<div class="allbuttons">
    <button @click="sortByTitle">Tri par titre</button>
    <button @click="sortByDate">Tri par date</button>
    <button @click="sortByRate">Tri par note</button>
</div>
</template>

<style lang="scss" scoped>
@import '../../assets/style/style.scss';
.allbuttons{
  display: flex;
  justify-content: space-around;
  button{
    width: 100px;
    height: 50px;
    background: $color1;
    color: $color2;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    i{
      font-size: 1.5rem;
    }
  }
}

</style>