<template>
  <div class="c-container">
    <div>Home</div>
    <button @click="showModal('viewList')">리스트 팝업</button>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name : 'Home',
    methods: {
      ...mapMutations([`showModal`]),
    }
  }
</script>

<style>

</style>
