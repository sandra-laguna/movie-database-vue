<template>
  <div id="trending" class="font-abel">
    <div
      v-if="selectedImage"
      :style="{
        'background-image':
          'linear-gradient(to bottom, rgba(11,30,57, 0.15), rgba(0, 0, 0, 0.90)), url(' + selectedImage + ')'
      }"
      class="w-full h-96 bg-no-repeat bg-cover bg-bottom flex items-end"
    >
      <p class="font-bold text-7xl uppercase p-12">Trending films</p>
    </div>

    <div class="text-center grid justify-items-center pt-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
      <div v-for="(film, index) in trending" :key="index" class="relative flex flex-col items-center py-4 w-64">
        <img
          v-if="film.poster_path"
          class="w-44 h-64 rounded-md cursor-pointer"
          :src="`${urlImg}${film.poster_path}`"
          :alt="`${film.original_title}`"
          @click="showDialog(index, film)"
        />
        <img v-else class="w-56 h-80 rounded-md" src="@/assets/img/noimg.png" alt="no-image" />
        <p class="text-2xl font-bold uppercase py-4">{{ truncate(`${film.title}`, 40) }}</p>
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
          {{ film.vote_average }}</p
        >
        <!-- <p>Genre: {{ film.genre_ids }}</p> -->
      </div>
    </div>

    <!-- Pagination -->
    <div class="flex justify-center gap-x-2 pb-6">
      <button @click.prevent="prevPage" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
        Previous
      </button>
      <button @click.prevent="nextPage" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
        Next
      </button>
    </div>
    <!-- End of pagination -->
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
  data() {
    return {
      urlImg: "https://image.tmdb.org/t/p/original",
      images: [
        "https://d5v6f6t5.rocketcdn.me/wp-content/uploads/2015/09/20150925-2-1-1280x640.jpg",
        "https://darkroom.bbfc.co.uk/1920/819ad7550455fd18deaa00c62c1be59b:07f1d17a4c91afaec0b553655e0ead94/fight-club-1999.png",
        "https://images.squarespace-cdn.com/content/v1/56e834ebd51cd466c99178e5/1622497289721-CUYEGKK6E3YB35D9F8NN/Amelie_02.jpg",
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/08/interstellar-2032707.jpg"
      ],
      selectedImage: null,
      voteStar: `${require("@/assets/img/star.svg")}`,
      modal: false,
      contentModal: "",
      page: 1
    };
  },
  computed: {
    trending() {
      return this.$store.state.trending.trending;
    }
  },
  methods: {
    randomItem(items) {
      return items[Math.floor(Math.random() * items.length)];
    },
    showDialog: function (num, name) {
      this.modal = true;
      this.contentModal = name;
      let modal = "toggleModal " + num;
      this[modal] = true;
    },
    truncate: function (str, num) {
      return str.length > num ? str.substr(0, num - 1) + "..." : str;
    },
    prevPage() {
      if (this.page > 1) {
        this.page--;
        return this.$store.dispatch("fetchTrending", this.page);
      }
    },
    nextPage() {
      this.page++;
      return this.$store.dispatch("fetchTrending", this.page);
    }
  },
  created() {
    this.selectedImage = this.randomItem(this.images);
  },
  async mounted() {
    await this.$store.dispatch("fetchTrending", this.page);
  }
};
</script>

