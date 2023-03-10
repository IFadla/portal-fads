import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const API_DUMMY = 'http://localhost:3000/articles'

export default new Vuex.Store({
  state: {
    news: [],
  },
  mutations: {
    setNews(state, news) {
      state.news = news
    },
    UPDATE_DATA(state, data) {
      let updatedNews = state.news.map(berita => {
        if(berita.id === data.id) {
          return Object.assign({}, berita, data);
        }
        return berita;
      })
      state.news = updatedNews.slice();
    },
  },
  actions: {
    fetchNews({ commit }) {
      axios.get(`${API_DUMMY}`)
      .then(res => { 
        commit('setNews', res.data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    updateData({ commit }, payload) {
      axios.put(`${API_DUMMY}/${payload.id}`, payload)
      .then(response => {
        commit('UPDATE_DATA', response.data);
      })
      .catch(error => {
        console.log(error)
      });
    },
  },
  getters: {},
  modules: {},
});