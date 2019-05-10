<template>
  <div id="app" >
    <Swiper v-if="slidesReal.length > 0" :autoPlay='true' :showIndicator='true' interval="2500" duration="500">
  <Slide v-for="(item,index) in slidesReal" :key="index">
    <img :src="item.imagePath" />
  </Slide>
</Swiper>

    <div id="list"  v-for="(item ,index ) in bodyList" >
      <div class="wh-tab"><span>作者:{{item.author}}</span><span>分类:{{item.chapterName}}</span></div>
      <div><span>{{item.title}}</span></div>
      <div class="wh-tab"><span>时间:{{item.niceDate}}</span><span id="list-tab" @click="take">{{item.superChapterName}}</span></div>
    </div>
  </div>

</template>
<script>
  import { Swiper, Slide } from 'vue-swiper-component'
export default {
  name: 'home',
  // props: ['slidesReal'],
  data () {
    return {
      slidesReal: [],
      bodyList:[]
    }
  },
  components: {
    Swiper,
    Slide
  },
  created() {
    this.$http.get('/api/banner/json').then((response) => {
      // success callback
      this.slidesReal=response.body.data
      console.log(response)
    }, (response) => {
      // error callback
    })

    this.$http.get('/api/article/list/1/json').then((response) => {
      // success callback
      this.bodyList=response.body.data.datas
      console.log(response.body.data.datas)
    }, (response) => {
      // error callback
    })
  },
  methods: {
    take:function () {

    }
    }
  }
</script>

<style scoped>
  div img{
    height: 150px;
    width: 100%;
  }
  .wh-tab{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    color:#7B7B7B;

  }
  #app {
    margin-bottom: 48px;
  }
  #list div{

    line-height: 30px;
  }
  #list {
    background: white;
    padding: 10px;
    margin-top: 1px;
  }
  #list-tab{
border: 1px solid #0fc37c;
    padding-left: 10px;
    padding-right: 10px;
    color:#0fc37c;
    border-radius: 5px;
  }
</style>
