<template>
    <div>
        <div class="myCard">
            <div class="page-top">
                <letfNav>
                    <a href="#"><img src="../../images/631561651.png" alt=""></a>
                </letfNav>
                <div class="icon-right">
                    <div class="icon-line"></div>
                    <span @click="onwxImg()">
                        <a href="#"><img src="../../images/15616516.png" alt=""></a>
                    </span>
                    <div class="icon-line"></div>
                    <span>
                        <a href="#"><img src="../../images/156165165.png" alt=""></a>
                    </span>
                </div>
            </div>
            <transition name="fade">
                <div class="weui-box" v-show="wxImg">
                    <div class="weui-mask"  @click="wxImg = false"></div>
                    <div class="weui-Wx">
                        <div><img src="../../images/wx.png" alt=""></div>
                    </div>
                </div>
            </transition>
            <div class="company-name">
                <p>求其有限公司</p>
            </div>
            <div class="company-logo">
                <img src="../../images/logo.png" alt="">
            </div>
            <div class="message-name">
                <ul>
                    <li>伊利丹</li>
                    <li class="sex"><img src="../../images/1651661.png" alt=""></li>
                    <li class="message-name-line"></li>
                    <li>广告摄影师</li>
                </ul>
            </div>
            <div class="message-form">
                <div>
                    <i><img src="../../images/1561561651.png" alt=""></i>
                    <p>1321321</p>
                </div>
                <div>
                    <i><img src="../../images/41651651.png" alt=""></i>
                    <p>啊啊啊啊啊啊啊啊啊啊啊啊</p>
                </div>
                <div>
                    <i><img src="../../images/561561651.png" alt=""></i>
                    <p>啊啊啊啊啊啊啊啊啊啊啊啊</p>
                </div>
                <div>
                    <i><img src="../../images/11651651.png" alt=""></i>
                    <p>啊啊啊啊啊啊啊啊啊啊啊啊</p>

                </div>
                <div @click="goIndustry()">
                    <i><img src="../../images/165165165.png" alt=""></i>
                    <p>啊啊啊啊啊啊啊啊啊啊啊啊</p>
                </div>
                <div>
                    <i><img src="../../images/15165161.png" alt=""></i>
                    <p>啊啊啊啊啊啊啊啊啊啊啊啊</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { XButton } from 'vux'
import letfNav from '@/components/reuse/letfNav'
export default {
    components: {
        XButton,
        letfNav
    },
    data() {
        return {
            wxImg: false,
        }
    },
    methods: {
        onwxImg() {
             this.wxImg = !false;
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../css/myCard'
</style>

