<template>
  <div>
    <router-view/>
    <h1>需求</h1>
    <input v-model="inputVue">
    <button @click="tp(inputVue)">提交</button>
  </div>
</template>

<script>
  export default {
    name: 'need',
    data () {
      return {
        need: '需求',
        inputVue: ''
      }
    },

    methods: {
      tp: function (e) {
        console.log(e)
        this.$router.push('/homeChild')
        this.$store.commit('add',{});
      }
    }
  }
</script>

<style scoped>

</style>
