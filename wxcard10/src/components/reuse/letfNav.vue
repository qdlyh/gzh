<template>
  <div>
    <div class="menu">
      <div @click="toggle()" class="icon-btn">
        <img src="../../images/631561651.png" alt="">
      </div>
      <div class="letfNav" :class="{open,block}" v-for="(msg , index) in menuMsg" :key="index">
        <ul>
          <div class="Message-box">
            <div class="menu-img">
              <img src="../../images/logo.png" :src="'http://hx.tunnel.qydev.com/image/'+msg.picture">
            </div>
            <div class="menuMsg">
              <span>{{msg.name}}</span>
              <i><img src="../../images/1165165.png" alt=""></i>
              <p class="occupation">{{msg.department}}</p>
            </div>
            <!--          <div class="menuMsg-number" @click="toggle()">
                <div>
                  <p>收藏量</p>
                  <p>{{msg.number}}</p>
                </div>
                <div class="line"></div>
                <div>
                  <p>名片量</p>
                  <p>{{msg.numbers}}</p>
                </div>
              </div> -->
          </div>
          <div class="menNav">
            <li @click="toggle()" v-for="(nav,index) in menuNav" :key="index">{{nav.name}}</li>
          </div>
        </ul>
        <div class="cover" @click="toggle()"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { WechatPlugin } from 'vux'
export default {
  data() {
    return {
      /* menuMsg: [{ myname: '伊利丹', occupation: '广告摄影师', number: '123', numbers: '321', mycard: '我的名片', namea: '我的收藏', nameb: '名片夹', namec: '扫一扫' }], */
      menuMsg:[],
      menuNav: [{ name: '我的名片' }, { name: '我的收藏' }, { name: '名片夹' }, { name: '扫一扫' }],
      open: false,
      block: false,
    }
  },
  mounted() {
    this.$http.get('http://hx.tunnel.qydev.com/con/move/?openId=o03n2w4MHPzjlYMkRQ7qeYXQi4X0')
      .then(response => {
        //console.log(response);
        //console.log(response.data);
        console.log('菜单栏成功');
        this.menuMsg = response.data
      })
      .catch(error => {
        console.log(error);
        console.log('网络错误，不能访问');
      })
  },
  methods: {
    toggle() {
      if (!this.open) {
        this.block = true;
        setTimeout(() => {
          this.open = true;
          console.log(this.$wechat)
        }, 0);
      } else {
        this.open = false;
        setTimeout(() => {
          this.block = false;
        }, 300)
      }
    },
  }

}
</script>


<style lang="scss" scoped>
.icon-btn {
  width: 88px;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Message-box {
  background: #34363c;
  margin-bottom: 36px;
  height: 320px;
}

.menu-img {
  text-align: center;
  padding-top: 36px;
  img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    /* background: #fff; */
  }
}

.menuMsg {
  margin-bottom: 24px;
  span {
    display: inline-block;
    height: 48px;
    color: #fefefe;
    font-size: 24px;
    line-height: 48px;
    img {
      margin-left: 12px;
    }
  }
  .occupation {
    font-size: 20px;
    color: #fff;
  }
}

.menuMsg-number {
  width: 360px;
  height: 72px;
  div {
    width: 179.5px;
    float: left;
    display: inline-block;
    color: #c6c6c6;
    cursor: pointer;
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      padding-bottom: 12px;
    }
  }
  .line {
    height: 38px;
    width: 1px;
    background: #fff;
    margin-top: 16px;
  }
}

.letfNav {
  position: fixed;
  z-index: 9999;
  display: none;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  ul {
    position: fixed;
    z-index: 9999;
    margin-top: 88px;
    float: left;
    width: 360px;
    height: 100%;
    overflow: auto;
    /* background: rgba(91, 116, 146, 0.75); */
    background: #2b2e35;
    transform: translate(-100%, 0);
    transition: transform 0.3s ease;
    -webkit-overflow-scrolling: touch;
  }
  .menNav {
    width: 360px;
    li {
      height: 84px;
      font-size: 28px;
      color: #fff;
      line-height: 84px;
      text-align: left;
      padding-left: 100px;
      &:active {
        background: #ccc;
      }
    }
  }
  .cover {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9998;
    display: none;
    /* background: rgba(172, 185, 201, 0.40); */
    background: #000;
    transition: opacity 0.3s ease;
  }
  &.open {
    display: block;
    ul {
      transform: translate(0);
    }
    .cover {
      opacity: 0.6;
      display: block;
    }
  }
  &.block {
    display: block;
  }
}
</style>
