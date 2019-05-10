<template>
  <div >
    <div >{{count}}</div>
  </div>

</template>
<script>
export default {
  name:'quote',
  data () {
    return {

    }
  },
  computed:{
    count(){
      return this.$store.state.count;
    }
  },
}
</script>

<style scoped>

</style>
