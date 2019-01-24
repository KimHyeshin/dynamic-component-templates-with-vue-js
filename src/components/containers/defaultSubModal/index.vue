<template>
  <div class="c-subModal">
    <component :is="component" v-if="visible" v-bind:value-data="valueData"/>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex'

  export default {
    name: 'DefaultSubModal',
    props: ['valueData'],
    data() {
      return {
        component: null,
        oValues: null,
      }
    },
    mounted(){
      console.log("DefaultSubModal");
      console.log(this.valueData);
    },
    computed: {
      ...mapState({
        visible: 'subModalVisible',
        modalComponent: 'subModalComponent',
      })
    },
    watch: {
      modalComponent(componentName) {
        // 방어로직
        if (!componentName) return;

        Vue.component(componentName, () => import(`../../modal/${componentName}`));
        this.component = componentName;
      },
    }
  }
</script>

<style scoped>

</style>
