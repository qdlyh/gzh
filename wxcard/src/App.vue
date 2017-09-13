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
    width: 88px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:active {
      background: #43464C;
    }
  }
  .menu {
    height: 88px;
    @extend span;
    &:active {
      background: #43464C;
    }
  }
  .icon-right {
    display: flex;
    justify-content: flex-end;
  }
  .icon-line {
    height: 36px;
    background: #87888a;
    width: 1px;
    margin-top: 23px;
  }
}





/* 单选 */

.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s
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
  background: #000;
  opacity: 0.6;
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





/* 微信弹出 */

.weui-Wx {
  position: fixed;
  transition: opacity .5s;
  z-index: 5000;
  width: 400px;
  height: 400px;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  overflow: hidden;
}



.btn-green {
  /*  <x-button type="primary">primary</x-button> */
  margin: 100px 24px;
  a {
    color: #fff;
  }
}

.btn-red {
  /*  <x-button type="warn">Delete</x-button> */
  margin: 100px 24px;
  a {
    color: #fff;
  }
}

.btn-blue {
  margin: 100px 0;
  text-align: center;
  a{
    display: inline-block;
    line-height: 70px;
    height: 70px;
    width: 90%;
    background: #17B4EE;
    border-radius: 10px;
    font-size: 24px;
    color: #fff;
    text-overflow: ellipsis;
    border: none;
    outline: none;
    &:active {
      background: #78b4ed;
    }
  }
}
</style>
