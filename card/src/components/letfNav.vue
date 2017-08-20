<template>
  <div>
    <div class="menu">
      <button class="icon iconfont icon-ic_menu" @click="toggle()">菜单</button>
      <div class="letfNav" :class="{open,block}" @click="toggle()">
        <ul>
          <li>菜单一</li>
          <li>菜单一</li>
          <li>菜单一</li>
          <li>菜单一</li>
          <li>菜单一</li>
          <li>菜单一</li>
        </ul>
        <div class="cover"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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

<style lang="scss" >
.icon{
  position: fixed;
  top: 50px;
  left:30px;
}
.letfNav {
  display: none;
  z-index: 11;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: fixed;
  &::-webkit-scrollbar {
    display: none!important;
    width: 0!important;
    height: 0!important;
    -webkit-appearance: none;
    opacity: 0!important;
  }
  ul {
    margin: 0;
    float: left;
    width: 60%;
    height: 100%;
    padding: 1.3rem 0.5rem 0.5rem;
    overflow: auto;
    background: rgba(91, 116, 146, 0.75);
    transform: translate(-100%, 0);
    transition: transform 0.3s ease;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none!important;
      width: 0!important;
      height: 0!important;
      -webkit-appearance: none;
      opacity: 0!important;
    }
  }
  li {
    cursor: pointer;
    font-size: 0.43rem;
    list-style: none;
    color: #fff;
    margin-top: 20px;
    .iconfont {
      float: right;
      font-size: 0.6rem;
    }
    &.chose {
      color: #FFD300;
    }
  }
  .cover {
    width: 100%;
    height: 100%;
    opacity: 0;
    display: none;
    background: rgba(172, 185, 201, 0.40);
    transition: opacity 0.3s ease;
  }
  &.open {
    display: block;
    ul {
      transform: translate(0);
    }
    .cover {
      opacity: 1;
      display: block;
    }
  }
  &.block {
    display: block;
  }
}
</style>
