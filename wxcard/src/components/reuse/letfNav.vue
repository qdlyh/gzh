<template>
  <div>
    <div class="menu">
      <img @click="toggle()" src="../../images/631561651.png" alt="">
      <div class="letfNav" :class="{open,block}">
        <ul>
          <div class="Message-box">
            <div class="menu-img">
              <img src="../../images/logo.png">
            </div>
            <div class="menuMsg">
              <p>伊利丹<img src="../../images/1165165.png" alt=""></p>
              <p class="occupation">广告摄影师</p>
            </div>
            <div class="menuMsg-number" @click="toggle()">
              <div>
                <p>收藏量</p>
                <p>123</p>
              </div>
              <div class="line"></div>
              <div>
                <p>名片量</p>
                <p>312</p>
              </div>
            </div>
          </div>
          <li class="menNav" @click="toggle()" v-for="(nav,index) in menuNav" :key="index">{{nav.name}}</li>
        </ul>
        <div class="cover" @click="toggle()"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuMsg: [{ name: '伊利丹' }, { occupation: '广告摄影师' }],
      menuMsg_number: [{ number: '123' }, { numbers: '321' }],
      menuNav: [{ name: '我的名片' }, { name: '我的收藏' }, { name: '名片夹' }, { name: '扫一扫' }, { name: '添加名片' }],
      open: false,
      block: false,
    }
  },
  methods: {
    toggle() {
      if (!this.open) {
        this.block = true;
        setTimeout(() => {
          this.open = true;
        }, 0);
      } else {
        this.open = false;
        setTimeout(() => {
          this.block = false;
        }, 300)
      }
    }
  }

}
</script>


<style lang="scss" scoped>
.Message-box {
  background: #34363c;
  margin-bottom: 36px;
  height: 392px;
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
  p {
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
  display: none;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  ul {
    position: fixed;
    z-index: 1000;
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
  li {
    height: 84px;
    font-size: 28px;
    cursor: pointer;
    color: #fff;
    line-height: 84px;
    width: 260px;
    text-align: left;
    float: right;
  }
  .cover {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 999;
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
