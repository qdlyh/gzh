<template>
  <div ref="carBrand" class="car-brand">
    <div v-for="(list, letter, index) in brandList" class="brand-list" :key="letter">
      <h1 :id="'item' + index" class="brand-letter">{{letter}}</h1>
      <div v-for="item in list" class="brand-item" :key="item.id">
        <router-link :to="{path: '/carModels/' + $route.params.target + '/' + item.id + '/' + encodeURIComponent(item.img)}" replace>
          <div class="brand-icon">
            <img width="100%" :src="item.img" :alt="item.name">
          </div>
          <span>{{item.name}}</span>
        </router-link>
      </div>
    </div>
    <div class="letters-box">
      <div ref="letters"     class="letters-cell" @click="jumpHandle">
        <a :class="{active: activeIndex === index}" v-for="(letter, index) in brandLetters" :data-target="index" :key="letter"><span>{{letter}}</span></a>
      </div>
    </div>
    <div class="active-letter">
      {{brandLetters[activeIndex]}}
    </div>
  </div>
</template>

<script>


export default {
  name: 'carBrand',
  data () {
    
    return {
      brandList: {
                A: [{ name: '伊利丹1', occupation: '广告摄影师', company: '公司' }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1' }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2' }],
                B: [{ name: '伊利丹2', occupation: '广告摄影师', company: '公司' }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1' }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2' }],
                C: [{ name: '伊利丹3', occupation: '广告摄影师', company: '公司' }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1' }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2' }],
                D: [{ name: '伊利丹4', occupation: '广告摄影师', company: '公司' }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1' }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2' }],
                E: [{ name: '伊利丹5', occupation: '广告摄影师', company: '公司' }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1' }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2' }],
                F: [{ name: '伊利丹6', occupation: '广告摄影师', company: '公司' }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1' }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2' }],
                G: [{ name: '伊利丹7', occupation: '广告摄影师', company: '公司' }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1' }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2' }],
            },
      activeIndex: 0,
      scrollTops: [],
      stime: null
    }
  },
  computed: {
    brandLetters () {
      return Object.keys(this.brandList)
    },
    scroller () {
      return this.$refs.carBrand.parentNode
    }
  },
 created () {
    // 此组件有缓存
    /*  getVehicleBrand().then(response => {
      const result = response.data
      if (result.code === 1) {
        const list = result.data
        const data = {}
        for (let k of list) {
          data[k.short_name] = data[k.short_name] || []
          data[k.short_name].push(k)
        }
        this.brandList = data
      } else {
        this.toast.text('获取品牌列表失败')
      }
    })*/
      // 数据跟新完毕，等待v-for渲染完成
      this.$nextTick(function () {
        let tops = []
        Array.prototype.forEach.call(document.querySelectorAll('.brand-letter'), (v, k) => {
          tops.push(v.parentNode.offsetTop - 46)
        })
        this.scrollTops = tops
        this.scroller.addEventListener('scroll', this.scrollHandle, false)
      })
 /*    })*/
  },  
  activated () {
    let tops = []
    Array.prototype.forEach.call(document.querySelectorAll('.brand-letter'), (v, k) => {
      tops.push(v.parentNode.offsetTop - 46)
    })
    this.scrollTops = tops
    this.activeIndex = 0
    this.scroller.addEventListener('scroll', this.scrollHandle, false)
  },
  deactivated () {
    this.scroller.removeEventListener('scroll', this.scrollHandle)
    console.log(deactivated)
  },
  methods: {
    jumpHandle (event) {
      let id
      if (event.target.tagName.toLowerCase() === 'a') {
        id = event.target.getAttribute('data-target')
        /* console.log(id) */
      } else {
        id = event.target.parentNode.getAttribute('data-target')
       /*  console.log(id) */
      }
      const top = this.scrollTops[id]
     /*  console.log(top) */
      this.scroller.scrollTop = top
    },
    scrollHandle (event) {
      const top = event.target.scrollTop
     /*  console.log(top) */
      const len = this.scrollTops.length
     /*  console.log(len) */
      this.stime = this.stime || Date.now()
      /* console.log(this.stime) */
      if (Date.now() - this.stime > 50) {
        for (let i = 0; i < len; i++) {
          if (this.scrollTops[i] > top) {
            this.activeIndex = i - 1 < 0 ? 0 : i - 1
            break
          }
        }
        this.stime = Date.now()
       /*  console.log(this.stime) */
      }
    }
  }
}
</script>

<style lang="scss">
.car-brand{
  .brand-list{
    h1{
      padding: 0 15px;
      font-size: 16px;
      &+.brand-item a{
        border: none;
      }
    }
    .brand-item{
      padding: 0 30px 0 15px;
      font-size: 14px;
      background-color: #fff;
      a{
        display: block;
        padding: 2px 0;
        height: 50px;
        line-height: 50px;
        border-top: 1px solid #D9D9D9;
        font-size: 0;
        color: #333
      }
      span{
        display: inline-block;
        font-size: 14px;
        vertical-align: middle
      }
      .brand-icon{
        display: inline-block;
        box-sizing: border-box;
        width: 50px;
        height: 50px;
        padding: 5px;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
  }
  .letters-box{
    display: table;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 30px;
    height: 100%;
    z-index: 2;
    .letters-cell{
      position: absolute;
      top: 78px;
      width: 100%
    }
    a{
      display: block;
      font-size: 12px;
      text-align: center;
      span{
        display: block;
        height: 18px;
        width: 18px;
        margin: 0 auto;
        line-height: 18px;
      }
      &.active span {
        font-weight: bold;
        color: #fff;
        border-radius: 50%;
        background-color: green;
      }
    }
  }
  .active-letter{
    box-sizing: border-box;
    position: fixed;
    top: 46px;
    left: 0;
    right: 0;
    padding: 0 15px;
    height: 25px;
    font-weight: bold;
    background-color: #eeeeee;
    z-index: 1;
  }
}
</style>


