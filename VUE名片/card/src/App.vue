<template>
  <div id="app">
    <letfNav></letfNav>
    <router-view></router-view>
  </div>
</template>

<script>
import letfNav from '@/components/letfNav'
export default {
  name: 'app',
   components: {
    letfNav
  }
}
</script>

<style>

</style>
