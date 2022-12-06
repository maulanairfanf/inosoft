import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    uom: [],
    currency: [],
    charge: [],
  },
  getters: {
    getUOM(state) {
      return state.uom;
    },
    getCurrency(state) {
      return state.currency;
    },
    getCharge(state) {
      return state.charge;
    },
  },
  mutations: {
    SET_UOM(state, uom) {
      state.uom = uom;
    },
    SET_CURRENCY(state, currency) {
      state.currency = currency;
    },
    SET_CHARGE(state, charge) {
      state.charge = charge;
    },
  },
  actions: {
    async fetchUOM({ commit }) {
      try {
        const data = await axios.get(`${process.env.VUE_APP_URL}uom`);

        commit('SET_UOM', data.data);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCurrency({ commit }) {
      try {
        const data = await axios.get(`${process.env.VUE_APP_URL}currency`);

        commit('SET_CURRENCY', data.data);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCharge({ commit }) {
      try {
        const data = await axios.get(`${process.env.VUE_APP_URL}charge`);

        commit('SET_CHARGE', data.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
