<template>
  <div id="app">
    <div >
      <router-view/>
    </div>
    <div class="bottom-tab" v-show="$route.meta.navShow">
      <div class="tab-item" @click="switchTo('/')">
        <img :src="'/' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal">
        <span :class="{on: '/' === $route.path}">首页</span>
      </div>
      <div class="tab-item" @click="switchTo('/need')">
        <img :src="'/need' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal">
        <span :class="{on: '/need' === $route.path}">项目</span>
      </div>
      <div class="tab-item" @click="switchTo('/quote')">
        <img :src="'/quote' === $route.path ? tabBarImgArr[2].selected : tabBarImgArr[2].normal">
        <span :class="{on: '/quote' === $route.path}">体系</span>
      </div>
      <div class="tab-item" @click="switchTo('/Intent')">
        <img :src="'/Intent' === $route.path ? tabBarImgArr[3].selected : tabBarImgArr[3].normal">
        <span :class="{on: '/Intent' === $route.path}">导航</span>
      </div>
      <div class="tab-item" @click="switchTo('/user')">
        <img :src="'/user' === $route.path ? tabBarImgArr[4].selected : tabBarImgArr[4].normal">
        <span :class="{on: '/user' === $route.path}">公众号</span>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data () {
      return {
        tabBarImgArr: [{
          selected: require('@/assets/hy_b.png'),
          normal: require('@/assets/hy_a.png'),
        },
          {
            selected: require('@/assets/hd_b.png'),
            normal: require('@/assets/hd_a.png'),
          },
          {
            selected: require('@/assets/px_b.png'),
            normal: require('@/assets/px_a.png'),
          },
          {
            selected: require('@/assets/qz_b.png'),
            normal: require('@/assets/qz_a.png'),
          },
          {
            selected: require('@/assets/wd_b.png'),
            normal: require('@/assets/wd_a.png'),
          },]
      }
    },
    methods: {
      switchTo: function (path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style>

  img {
    height: 20px;
    width: 20px;
  }

  html {
    width: 100%;
  }

  #app {
    font-size: 14px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  p {
    height: 90px;
    padding-left: 50px;

  }

  #div-tab {
    display: flex;
    flex-direction: row;
    width: 100%;
    position: fixed;
    bottom: 0;
  }

  .bottom-tab {
    width: 100%;
    height: 50px;
    background-color: #fff;
    position: fixed;
    left: 0px;
    bottom: 0px;
    display: flex;
    z-index: 999;
    border-top: 1px solid #d1d1cf;
  }

  .tab-item {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #666;
    img: width 35%;
    margin-bottom: 2px;
  }

  #tab-item {
    display: flex;
    flex-direction: column;
  }

  .on {
    color: #60AFD2;
  }
  body {
    margin: 0;
    background-color: #ededf4;
  }
</style>
