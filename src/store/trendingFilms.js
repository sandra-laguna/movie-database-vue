import axios from "axios";

export default {
  state: {
    trending: []
  },
  getters: {},
  mutations: {
    SET_TRENDING: (state, trending) => (state.trending = trending)
  },
  actions: {
    async fetchTrending({ commit }) {
      const response = await axios.get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=a03066c5d8bc0cacef0bf9aeed31def9"
      );
      console.log(response.data.results);
      commit("SET_TRENDING", response.data.results);
    }
  }
};
