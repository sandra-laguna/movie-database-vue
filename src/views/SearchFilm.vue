<template>
  <div class="w-full">
    <h1 class="text-center text-5xl font-bold py-8">Search a film</h1>
    <div class="flex items-center justify-center">
      <div class="flex border-2 border-gray-200 rounded">
        <input
          type="text"
          class="px-4 py-2 w-80 text-black"
          placeholder="Search..."
          v-model="search"
          v-on:keyup.enter="getSearchResults(search)"
        />
        <button class="px-4 text-white bg-gray-600 border-l hover:bg-gray-500" @click="getSearchResults(search)">
          Search
        </button>
      </div>
    </div>

    <div class="grid grid-cols-6 px-4 gap-y-6 mt-8">
      <div v-for="film in searchFilm" :key="film.id" class="flex flex-col items-center">
        <p class="text-center h-16 flex items-center text-xl">{{ film.original_title }}</p>

        <img
          v-if="film.poster_path"
          class="w-56 h-80 rounded-md"
          :src="`${urlImg}${film.poster_path}`"
          :alt="`{film.poster_path}`"
        />
        <img v-else class="w-56 h-80 rounded-md" src="@/assets/img/noimg.png" alt="no-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchFilm",
  data() {
    return {
      search: "",
      urlImg: "https://image.tmdb.org/t/p/original"
    };
  },
  computed: {
    searchFilm() {
      console.log(this.$store.state.searchFilm);
      return this.$store.state.searchFilm.searchFilm;
    }
  },
  methods: {
    getSearchResults(search) {
      console.log(search);
      return this.$store.dispatch("fetchSearchFilm", search);
    }
  }
  /*   async mounted() {
    await this.$store.dispatch("fetchSearchFilm", "Dune");
  } */
};
</script>
