<template>
  <div id="app">
    <router-view></router-view>
    <app-modal></app-modal>
  </div>
</template>

<script>
  import AppModal from './components/containers/DefaultModal'
export default {
  name: 'app',
  components:{
    AppModal
  }
}
</script>

<style>

</style>
