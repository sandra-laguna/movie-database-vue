import axios from "axios";

export default {
  state: {
    searchFilm: ""
  },
  getters: {},
  mutations: {
    SET_SEARCH_FILM: (state, searchFilm) => (state.searchFilm = searchFilm)
  },
  actions: {
    async fetchSearchFilm({ commit }, query) {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie?api_key=a03066c5d8bc0cacef0bf9aeed31def9&language=en-US&query=" +
          query
      );
      commit("SET_SEARCH_FILM", response.data.results);
    }
  }
};
