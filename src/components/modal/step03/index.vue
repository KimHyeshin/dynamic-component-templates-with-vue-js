<template>
  <div>
    <div class="popup_wrap">
      <div class="popup">
        <div class="card">
          <div class="card-header">
            <strong>step03</strong>
          </div><!--//card-header-->

          <div class="card-body">
            <ul>
              <li>step03</li>
            </ul>
          </div><!--//card-body-->

          <!--버튼-->
          <div class="card-footer">
            <button @click="hideSubModal">닫기</button>
          </div>
          <!--//버튼-->

        </div><!--//card-->
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapMutations } from 'vuex';

  export default {
    name: 'Step03',
    data() {
      return {
        component: null,
        originData: {},
        listData: []
      }
    },
    methods: {
      ...mapMutations(['hideSubModal']),
    },
  }
</script>

<style scoped>
  .popup_wrap {
    /*사이드바 위로 보이도록 position, z-index 추가 */
    position: absolute;
    z-index: 9999;

    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    text-align: center;

    top: 0;
    left: 0;
  }
  .popup_wrap:after{
    content:"";
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
  }
  .popup {
    width: 300px;
    height: 300px;
    padding: 80px;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    background: #fff;
    text-align: center;
    border: 2px solid orange;
  }
  ul {
    list-style: none;
    padding: 0;
  }
</style>
