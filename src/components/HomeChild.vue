<template>
<div>二级页面

<div  @click="back">返回</div>
</div>
</template>

<script>
  export default {
    name: '',
    methods:{
      back:function () {
        console.error(1111111111)
        this.$router.go(-1);
      }
    }
  }

</script>

<style scoped>

</style>
