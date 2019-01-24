<template>
  <div>
    <div class="popup_wrap">
      <div class="popup">
        <div class="card">
          <div class="card-header">
            <strong>목록</strong>
          </div><!--//card-header-->

          <div class="card-body">
            <ul>
              <li v-for="item in listData">{{item.name}}</li>
            </ul>
          </div><!--//card-body-->

          <!--버튼-->
          <div class="card-footer">
            <button @click="showSubModal('step01')">Step01 팝업</button>
            <button @click="showSubModal('step02')">Step02 팝업</button>
            <button @click="showSubModal('step03')">Step03 팝업</button>
            <button @click="showSubModal('step04')">Step04 팝업</button>
            <button @click="hideModal">닫기</button>
          </div>
          <!--//버튼-->

        </div><!--//card-->
      </div>
    </div>
    <sub-modal v-bind:value-data="valueData"></sub-modal>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapMutations } from 'vuex';
  import originalData from './data';
  import SubModal from '../../containers/defaultSubModal'

  export default {
    name: 'ViewList',
    components: {
      SubModal
    },
    data() {
      return {
        component: null,
        originData: {},
        listData: [],
        active: null,
        valueData: {
          name : 'Kim',
          age : '33'
        }
      }
    },
    created() {
      this.originData = originalData;
      this.listData = Object.values(this.originData);
    },
    methods: {
      ...mapMutations(['showSubModal', 'hideModal']),
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
    width: 500px;
    min-height: 200px;
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    background: #fff;
    text-align: center;
    border: 2px solid skyblue;
  }
  ul {
    list-style: none;
    padding: 0;
  }
</style>
