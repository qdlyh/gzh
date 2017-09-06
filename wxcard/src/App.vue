<template>
  <div id="app">
    <!-- <letfNav></letfNav> -->
    <router-view></router-view>
  </div>
</template>

<script>
/* import letfNav from '@/components/reuse/letfNav' */
export default {
  name: 'app',
  components: {
    /*  letfNav */
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

body {
  max-width: 750px;
  margin: 0 auto;
  background: #f3f3f3;
}



/* 返回 */

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


/* 单选 */

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}

.weui-mask,
.weui-mask_transparent {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  transition: opacity .5s;
}

.weui-dialog {
  position: fixed;
  transition: opacity .5s;
  z-index: 5000;
  width: 80%;
  max-width: 300px;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: #fff;
  text-align: center;
  border-radius: 3px;
  overflow: hidden;
  .weui-dialog__title {
    font-weight: 400;
    font-size: 18px;
  }
  .weui-dialog__bd {
    padding: 0 1.6em .8em;
    min-height: 40px;
    font-size: 15px;
    line-height: 1.3;
    word-wrap: break-word;
    word-break: break-all;
    color: #999;
  }
  .weui-dialog__ft {
    position: relative;
    line-height: 48px;
    font-size: 19px;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
  }
}


.btn-green {
  /*  <x-button type="primary">primary</x-button> */
  margin: 100px 24px 50px;
  a {
    color: #fff;
  }
}

.btn-red {
  /*  <x-button type="warn">Delete</x-button> */
  margin: 100px 24px 50px;
  a {
    color: #fff;
  }
}
</style>

