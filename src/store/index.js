import Vuex from "vuex";
import tendringModule from "./trendingFilms";
import searchFilmModule from "./searchFilm";
import tvPopularModule from "./tvPopular";
import modals from "./modals";

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    trending: tendringModule,
    searchFilm: searchFilmModule,
    tvPopular: tvPopularModule,
    modals
  }
});

export default store;
