import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
  strict: true,  // 开启严格模式  确保state 中的数据只能 mutations 修改
  state: {
    count: 0,
    list:''
  },
  mutations: { // 更改数据的方法
    add (state,list) {
      state.count++
      state.list=list
    }
  }
})

export default store
