<template>
  <div id="trending">
    <h1>Trending films</h1>
    <div v-for="film in trending" :key="film.id" class="flex flex-col items-center border-b-2 border-blue-500 py-12">
      <img class="w-56 pb-6" :src="`${urlImg}${film.poster_path}`" />
      <p>{{ film.original_title }}</p>
      <p>{{ film.overview }}</p>
      <p>Release date: {{ film.release_date }}</p>
      <p>Adult film: {{ film.adult }}</p>
      <!-- <img class="h-36" :src="`${urlImg}${film.backdrop_path}`" /> -->
      <!-- <p>{{ film.backdrop_path }}</p> -->
      <p>Votes: {{ film.vote_count }}</p>
      <p>Genre: {{ film.genre_ids }}</p>
      <p>Film id: {{ film.id }}</p>
      <p>Original language: {{ film.original_language }}</p>
      <p>Vote average: {{ film.vote_average }}</p>
      <p>Popularity: {{ film.popularity }}</p>
      <p>Media type: {{ film.media_type }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urlImg: "https://image.tmdb.org/t/p/original/"
    };
  },
  computed: {
    trending() {
      console.log(this.$store.state.trending);
      return this.$store.state.trending.trending;
    }
  },
  methods: {},
  async mounted() {
    await this.$store.dispatch("fetchTrending");
  }
};
</script>
