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
    /**
     * modal
     * @param state
     * @param componentName
     */
    showModal(state, componentName) {
      state.modalVisible = true;
      state.modalComponent = componentName;
    },
    hideModal(state) {
      state.modalVisible = false;
    },
    /**
     * subModal
     * @param state
     * @param componentName
     */
    showSubModal(state) {
      state.subModalVisible = true;
    },
    hideSubModal(state) {
      state.subModalVisible = false;
    },
  }
})

export default store
