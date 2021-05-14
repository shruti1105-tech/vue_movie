<template>
  <div class="popular_movie">
    <div class="movies-list">
      <div class="movie" v-for="movie in movies" :key="movie.id">
        <div class="product-image">
          <img :src="'https://image.tmdb.org/t/p/w500'+movie.backdrop_path" alt="Movie Poster" />
        </div>
        <div class="detail">
          <p class="year">Release Date : {{ movie.release_date }}</p>
          <h3>{{ movie.original_title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import {onBeforeMount, ref} from "vue";
import {useRoute} from "vue-router";
import env from '../env.js'
// import env from "../env";

export default {
  name:'popular_movie',
  setup(){
    const movies = ref([]);
    const route = useRoute();

    onBeforeMount(() => {
      fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${env.apikey}`)
          .then(response => response.json())
          .then(data => {
            // console.log(data);
            movies.value = data.results;
          });
    });

    return{
      movies,
      route
    }
  }
}
</script>
<style lang="scss">
.movies-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0px 8px;
  .movie {
    max-width: 25%;
    flex: 1 1 50%;
    padding: 16px 8px;
    .product-image {
      position: relative;
      display: block;
      img {
        display: block;
        width: 100%;
        height: 275px;
        object-fit: cover;
      }
      .type {
        position: absolute;
        padding: 8px 16px;
        background-color: #42B883;
        color: #FFF;
        bottom: 16px;
        left: 0px;
        text-transform: capitalize;
      }
    }
    .detail {
      background-color: #496583;
      padding: 16px 8px;
      flex: 1 1 100%;
      border-radius: 0px 0px 8px 8px;
      .year {
        color: #AAA;
        font-size: 14px;
      }
      h3 {
        color: #FFF;
        font-weight: 600;
        font-size: 18px;
      }
    }
  }
}
</style>