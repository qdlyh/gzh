<template>
  <div>
    <div>
      <div class="menu">
        <!-- <button class="icon iconfont icon-ic_menu" @click="toggle()">菜单</button> -->
        <div class="letfNav" :class="{open,block}">
          <ul>
            <div class="file-top">
              <img id="file-img" src="../images/logo.png">
              <input id="file" type="file">
            </div>
            <span>收藏
              <i>132</i>
            </span>|
            <span>数量
              <i>132</i>
            </span>
            <li v-for="(x,index) in menu" @click="toggle()" :key="index">{{x.name}}</li>
          </ul>
          <div class="cover" @click="toggle()"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [{ name: '菜单1' }, { name: '菜单2' }, { name: '菜单3' }],
      open: false,
      block: false,
    }
  },
  mounted() {
    var $file = document.getElementById('file')
    var $fileImg = document.getElementById('file-img')

    function readFile() {
      var file = this.files[0];
      if (!/image\/\w+/.test(file.type)) {
        alert("请选择图片类型");
        return false;
      }
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        $fileImg.src = this.result;

      }
    }
    $file.onchange = readFile;

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
.icon {
  position: fixed;
  top: 50px;
  left: 30px;
}

.file-top {
  width: 160px;
  height: 160px;
  margin: 0 auto;
  border-radius: 50%;
  img {
    @extend .file-top;
    position: absolute;
  }
  input {
    @extend .file-top;
    opacity: 0;
  }
}

.letfNav {
  position: fixed;
  display: none;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  ul {
    float: left;
    width: 15%;
    height: 100%;
    overflow: auto;
    /* background: rgba(91, 116, 146, 0.75); */
    background: #000;
    transform: translate(-100%, 0);
    transition: transform 0.3s ease;
    -webkit-overflow-scrolling: touch;
  }
  li {
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    color: #fff;
    margin-top: 20px;
  }
  span {
    display: inline-block;
    color: #fff;
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
