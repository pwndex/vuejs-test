import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';
import { setItem, getItem } from '@/helpers/localStorage';

Vue.use(Vuex);

export default new Vuex.Store({

  state: () => ({
    data: [],
    isLoading: false,
    isCached: false,
  }),

  mutations: {
    set(state, value) {
      Object.entries(value).forEach(([key, data]) => {
        if (!Array.isArray(state[key]) && state[key] && typeof state[key] === 'object') {
          state[key] = {
            ...state[key],
            ...data,
          };
        } else {
          state[key] = data;
        }
      });
    },
  },

  actions: {
    async load({ commit }, params = {}) {
      commit('set', { isLoading: true });

      try {
        const { data } = await api.getPayments(params);

        if (Array.isArray(data)) {
          setItem('paymentsData', data);
          commit('set', { data });
          commit('set', { isCached: true });
        }
      } catch (e) {
        // eslint-disable-next-line no-alert
        alert(e?.message);
      } finally {
        commit('set', { isLoading: false });
      }
    },
    clear({ commit }) {
      setItem('paymentsData', {});
      commit('set', { isCached: false });
    },
  },
});
