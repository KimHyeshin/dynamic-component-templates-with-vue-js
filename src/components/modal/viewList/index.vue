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
            <button @click="setComponent(0)">Step01 팝업</button>
            <button @click="setComponent(1)">Step02 팝업</button>
            <button @click="setComponent(2)">Step03 팝업</button>
            <button @click="setComponent(3)">Step04 팝업</button>
            <button @click="">닫기</button>
          </div>
          <!--//버튼-->

        </div><!--//card-->
      </div>
    </div>
    <component :is="whichStep" v-if="visible"></component>
    <!--<el-button style="margin-top: 12px;" @click="previous">Previous step</el-button>-->
    <!--<el-button style="margin-top: 12px;" @click="next">Next step</el-button>-->
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapState, mapMutations } from 'vuex';
  import originalData from './data';

  export default {
    name: 'ViewList',
    components: { // 여기서 동적으로 로딩한다
      'Step01': () => import('../step01'),
      'Step02': () => import('../step02'),
      'Step03': () => import('../step03'),
      'Step04': () => import('../step04'),
    },
    data() {
      return {
        component: null,
        originData: {},
        listData: [],
        active: null
      }
    },
    created() {
      this.originData = originalData;
      console.log(this.originData);
      this.listData = Object.values(this.originData);
      console.log(this.listData);
    },
    methods: {
      ...mapMutations(['showSubModal']),
      setComponent(num) {
        console.log("setComponent");
        this.showSubModal();
        this.active = num
      }
    },
    computed: {
      ...mapState({
        visible: 'subModalVisible',
      }),
      whichStep () {
        console.log("whichStep");
        switch (this.active) {
          case 0:
            return 'Step01'
          case 1:
            return 'Step02'
          case 2:
            return 'Step03'
          case 3:
            return 'Step04'
          default:
            return 'Step01'
        }
      }
    }
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
  }
  ul {
    list-style: none;
    padding: 0;
  }
</style>
