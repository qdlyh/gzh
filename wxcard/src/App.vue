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

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style-type: none;
  text-decoration: none;
}
body{
  max-width: 750px;
  margin: 0 auto;
  background: #f3f3f3;
}
.page-top {
  width: 100%;
  height: 88px;
  text-align: center;
  background: #383C43;
  display: flex;
  justify-content: space-between;
  span {
    padding: 0 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.btn-green{
  margin: 100px 24px 50px ;
  a{
    color:#fff;
  }
}
</style>
