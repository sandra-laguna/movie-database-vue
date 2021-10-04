import axios from "axios";

export default {
  state: {
    tvPopular: []
  },
  getters: {},
  mutations: {
    SET_POPULAR: (state, tvPopular) => (state.tvPopular = tvPopular)
  },
  actions: {
    async fetchPopular({ commit }) {
      const response = await axios.get(
        "https://api.themoviedb.org/3/tv/popular?api_key=a03066c5d8bc0cacef0bf9aeed31def9&language=en-US"
      );
      /* console.log(response.data.results); */
      commit("SET_POPULAR", response.data.results);
    }
  }
};
