import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    modalVisible: false,
    modalComponent: null,
    subModalVisible: false,
  },
  mutations: {
    showModal(state, componentName) {
      state.modalVisible = true;
      state.modalComponent = componentName;
    },
    showSubModal(state) {
      state.subModalVisible = true;
    },
    hideModal(state) {
      state.modalVisible = false;
    },
  }
})

export default store
