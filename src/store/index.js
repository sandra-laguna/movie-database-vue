import Vuex from "vuex";
import tendringModule from "./trendingFilms";
import searchFilmModule from "./searchFilm";

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    trending: tendringModule,
    searchFilm: searchFilmModule
  }
});

export default store;
