<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data() {
    return {
  
    }
  },
   mounted() {
         function UrlSearch() {
            var name, value;
            var str = location.href; //取得整个地址栏
            var num = str.indexOf("?")
            str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]

            var arr = str.split("&"); //各个参数放到数组里
            for (var i = 0; i < arr.length; i++) {
                num = arr[i].indexOf("=");
                if (num > 0) {
                    name = arr[i].substring(0, num);
                    value = arr[i].substr(num + 1);
                    this[name] = value;
                }
            }
        }
        var OpenId = new UrlSearch(); //实例化
        //alert(OpenId.id); 

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
  -webkit-tap-highlight-color: transparent;
}




/* x-input红色警告伪类 */

.vux-input-icon.weui-icon-warn:before,
.vux-input-icon.weui-icon-success:before {
  font-size: 28px !important;
}


/* 表单公司居中 */

.company-center {
  input {
    text-align: center;
  }
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
  .weui-dialog__hd {
    padding: 1.3em 1.6em .5em;
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
    &::after {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 1px;
      border-top: 1px solid #d5d5d6;
      -webkit-transform: scaleY(.5);
    }
  }
  .weui-dialog__btn {
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    color: #3cc51f;
    text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    position: relative;
    &::after {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      width: 1px;
      bottom: 0;
      border-left: 1px solid #d5d5d6;
      -webkit-transform-origin: 0 0;
      -webkit-transform: scaleX(.5);
      transform: scaleX(.5);
    }
  }
}












/* 微信图片弹出 */

.weui-Wx {
  position: fixed;
  transition: opacity .5s;
  z-index: 5000;
  width: 430px;
  height: 430px;
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
  a {
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
