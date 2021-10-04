<template>
  <div id="tvPopular" class="font-abel">
    <p class="font-bold uppercase">Tv popular</p>

    <div class="grid grid-cols-5 text-center justify-items-center">
      <div v-for="show in tvPopular" :key="show.id" class="relative flex flex-col items-center py-12 w-64">
        <img class="w-56 h-80 rounded-md shadow-poster" :src="`${urlImg}${show.poster_path}`" />

        <p
          class="
            text-xl text-black
            font-bold
            absolute
            top-3.5
            left-1.5
            h-16
            w-16
            bg-no-repeat
            flex
            items-center
            justify-center
          "
          :style="{ 'background-image': 'url(' + voteStar + ')' }"
        >
          {{ show.vote_average }}</p
        >
        <p>Vote count: {{ show.vote_count }}</p>
        <p>Genre: {{ show.genre_ids }}</p>
        <p>Popularity: {{ show.popularity }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urlImg: "https://image.tmdb.org/t/p/original",
      voteStar: `${require("@/assets/img/star.svg")}`
    };
  },
  computed: {
    tvPopular() {
      return this.$store.state.tvPopular.tvPopular;
    }
  },
  methods: {},

  async mounted() {
    await this.$store.dispatch("fetchPopular");
  }
};
</script>
