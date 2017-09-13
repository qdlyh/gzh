<template>
    <div>
        <div class="userCard">
            <div class="page-top">
                <letfNav>
                    <a href="#"><img src="../../images/631561651.png" alt=""></a>
                </letfNav>
                <div class="icon-right">
                    <span class="deleteCard">
                        <div class="checkbox-warn">
                            <input type="checkbox" v-model="show"></input>
                        </div>
                        <div class="checkbox-msg">
                            <confirm v-model="show" :title="('信息还没保存')" @on-cancel="onCancel" @on-confirm="onConfirm">
                                <p>{{ ('是否需要保存信息') }}</p>
                            </confirm>
                        </div>
                          <a href="#"><img src="../../images/161616515.png" alt=""></a>
                    </span>
                    <div class="icon-line"></div>
                    <span @click="onwxImg()">
                        <a href="#"><img src="../../images/15616516.png" alt=""></a>
                    </span>
                </div>
            </div>
            <!-- 单选 -->
            <div class="weui-box">
                <transition name="fade">
                    <div v-show="wxImg">
                        <div class="weui-mask" @click="wxImg = false"></div>
                        <div class="weui-Wx">
                            <div><img src="../../images/wx.png" alt=""></div>
                        </div>
                    </div>
                </transition>
            </div>

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
            <div class="btn-blue">
                <button link to='/myCard'>前往企业官网</button>
                <router-link to="/myCard">Go to Foo</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { Confirm, XButton } from 'vux'
import letfNav from '@/components/reuse/letfNav'
export default {
    components: {
        Confirm,
        XButton,
        letfNav
    },
    data() {
        return {
            wxImg: false,
            show:false,
        }
    },
    methods: {
        onwxImg() {
            this.wxImg = !false;
        },
        onCancel() {
            console.log('on cancel')

        },
        onConfirm() {
            console.log('on confirm')
        },
    }
}
</script>
<style lang="scss" scoped>
.deleteCard{
    position: relative;
}
.checkbox-warn {
  input {
    width: 88px;
    height: 88px;
    position: absolute;
    top: 0px;
    left:0px;
    opacity: 0;
  }
}
.checkbox-msg {
  p {
    font-size: 20px;
  }
}
@import '../../css/myCard'
</style>

