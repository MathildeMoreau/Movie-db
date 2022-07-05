<script>
import axios from "axios";

export default {
  name: "MovieDetails",
  computed: {
    movieId() {
      return parseInt(this.$route.params.id);
    },
  },
  data() {
    return {
      movieItem: [],
      videoItem: [],
      preUrl: "https://image.tmdb.org/t/p/original/",
    };
  },
  created() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=ab23ecb6d0327b2f7fe052d49dd9fe3b&language=fr`
      )
      .then((res) => {
        this.movieItem = res.data;
        console.log(this.movieItem);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.id}/videos?api_key=ab23ecb6d0327b2f7fe052d49dd9fe3b&language=fr`
      )
      .then((res) => {
        for (let i = 0; i < res.data.results.length; i++) {
          if (res.data.results[i].type === "Trailer") {
            this.videoItem = res.data.results[i];
            break;
          }
        }
        console.log(this.videoItem);
      });
  },
};
</script>

<template>
  <div class="titles">
    <h2>{{ movieItem.title }}</h2>
    <h3>{{ movieItem.tagline }}</h3>
  </div>

  <div class="content">
    <div class="media-content">
      <img :src="preUrl + movieItem.poster_path" alt="" />
    </div>
    <div class="text-content">
      <div id="genre-container">
        <span v-for="item in movieItem.genres">{{item.name}}</span>
      </div>
      <p>{{ movieItem.vote_average }} ⭐ - {{ movieItem.vote_count }} 👍</p>
      <p>{{ movieItem.overview }}</p>
      <div class="prods">
        <div v-for="prod in movieItem.production_companies" id="productions">
          <img
            v-if="prod.logo_path != null"
            :src="preUrl + prod.logo_path"
            :alt="prod.name"
          />
        </div>
      </div>
    </div>
  </div>

  <div id="trailers">
    <iframe
      :src="'https://youtube.com/embed/' + videoItem.key"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/style/style.scss";

.titles {
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: $color1;
    font-size: 2rem;
  }
  h3 {
    font-style: italic;
  }
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Ubuntu", sans-serif;
  .media-content {
    img {
      width: 450px;
    }
  }
  .text-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    #genre-container{
      width: 30%;
      display: flex;
      justify-content: space-around;
    }
    p {
      margin: 2rem;
      text-align: justify;
      font-size: 1.5rem;
      align-self: center;
    }
    .prods {
      display: flex;
      justify-content: space-around;
      align-items: center;
      #productions {
        img {
          max-width: 100px;
        }
      }
    }
  }
}

#trailers {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  iframe {
    width: 80%;
    height: 30rem;
    margin: 2rem 0;
  }
}
</style>
