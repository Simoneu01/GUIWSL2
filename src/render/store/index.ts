import { createStore } from 'vuex'
import { sendSync, send, clear } from './ipc'

export type State = { counter: number };


const state: State = {
  counter: sendSync('store:get:sync', 'counter') || 0
};

export const store = createStore({
  state,
  mutations: {
    increment(state, payload) {
      state.counter++;
      send('store:set', 'counter', state.counter)
    }
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
    clear() {
      clear();
    }
  },

  getters: {
    counter(state) {
      return state.counter;
    }
  },
  modules: {}
});