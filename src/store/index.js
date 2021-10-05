import Vuex from "vuex";
import tendringModule from "./trendingFilms";
import searchFilmModule from "./searchFilm";
import tvPopularModule from "./tvPopular";
const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    trending: tendringModule,
    searchFilm: searchFilmModule,
    tvPopular: tvPopularModule
  }
});

export default store;
