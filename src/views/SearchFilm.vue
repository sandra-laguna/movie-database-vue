<template>
  <div class="w-full">
    <h1 class="font-abel text-center text-5xl font-bold py-8">Search a film</h1>
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
      <div v-for="(film, index) in searchFilm" :key="index" class="flex flex-col items-center">
        <p class="text-center h-16 flex items-center text-xl">{{ film.original_title }}</p>
        <img
          v-if="film.poster_path"
          class="w-56 h-80 rounded-md"
          :src="`${urlImg}${film.poster_path}`"
          :alt="`${film.original_title}`"
          @click="showDialog(index, film)"
        />
        <img v-else class="w-56 h-80 rounded-md" src="@/assets/img/noimg.png" alt="no-image" @click="open('simple')" />
      </div>
    </div>
  </div>

  <div class="modal w-3/6 h-144 fixed inset-0 m-auto opacity-100 bg-white rounded-md shadow-xl p-5" v-show="modal">
    <div
      class="h-80 bg-cover flex items-end rounded-md"
      :style="{
        'background-image':
          'linear-gradient(to bottom, rgba(11,30,57, 0.15), rgba(0, 0, 0, 0.90)), url(' +
          urlImg +
          contentModal.backdrop_path +
          ')'
      }"
    >
      <h1 class="text-center text-5xl p-4">{{ contentModal.original_title }}</h1>
    </div>
    <p class="h-40 text-black text-xl py-6">
      {{ truncate(`${contentModal.overview}`, 300) }}
    </p>

    <div class="flex justify-between">
      <div class="flex flex-row">
        <div class="bg-blue-600 py-1 px-4 text-2xl">{{ contentModal.vote_average }}</div>
        <div class="text-black border border-blue-600 text-center py-1 px-4 text-xs font-extrabold ml-2">
          {{ contentModal.vote_count }}<br />Ratings
        </div>
      </div>
      <button v-on:click="modal = !modal" class="py-1 px-4 bg-red-500 text-lg rounded-lg hover:bg-red-400">
        Close
      </button>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="bgModal block fixed top-0 left-0 opacity-100 w-screen h-screen"
    v-show="modal"
    v-on:click="modal = !modal"
  ></div>
  <!-- End modal -->
</template>

<script>
export default {
  name: "SearchFilm",
  data() {
    return {
      search: "",
      urlImg: "https://image.tmdb.org/t/p/original",
      modal: false,
      contentModal: ""
    };
  },
  computed: {
    searchFilm() {
      return this.$store.state.searchFilm.searchFilm;
    }
  },
  methods: {
    getSearchResults(search) {
      console.log(search);
      return this.$store.dispatch("fetchSearchFilm", search);
    },
    open(name) {
      this.$store.dispatch("modals/open", name);
    },
    showDialog: function (num, name) {
      this.modal = true;
      this.contentModal = name;
      let modal = "toggleModal " + num;
      this[modal] = true;
    },
    truncate: function (str, num) {
      return str.length > num ? str.substr(0, num - 1) + "..." : str;
    }
  }
  /*   async mounted() {
    await this.$store.dispatch("fetchSearchFilm", "Dune");
  } */
};
</script>

<style>
.modal {
  padding: 12px;
  z-index: 10001;
  transition: 0.6s;
}

.bgModal {
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10000;
  transition: 0.3s;
}

.block-ellipsis {
  display: block;
  display: -webkit-box;
  max-width: 100%;
  height: 43px;
  margin: 0 auto;
  font-size: 14px;
  line-height: 1;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
