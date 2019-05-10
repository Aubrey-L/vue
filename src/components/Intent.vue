<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <h1>标题</h1>
    <ul>
      <li v-for="(item ,index) in items" v-bind:key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Hello',
  data () {
    return {
      items: [1, 2, 3, 4, 5, 67, 8, 9, 0, 0, 23, 23, 543, 1, 2323, 4, 23, 42, 3, 42, 34, 1]
    }
  }
}

</script>

<style scoped>
li{
  height: 60px;
  border-bottom: 1px solid cadetblue;
}
</style>
