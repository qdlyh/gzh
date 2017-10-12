<template>
    <div>
        <div class="myCard">
            <div class="page-top">
                <letfNav>
                    <a href="javascript:;"><img src="../../images/631561651.png" alt=""></a>
                </letfNav>
                <div class="icon-right">
                    <span>
                        <a href="javascript:;"><img src="../../images/14151561.png" alt=""></a>
                    </span>
                    <div class="icon-line"></div>
                    <span @click="onwxImg()">
                        <a href="javascript:;"><img src="../../images/15616516.png" alt=""></a>
                    </span>
                    <div class="icon-line"></div>
                    <span>
                        <router-link to='/myForm'><img src="../../images/156165165.png" alt=""></router-link>
                    </span>
                </div>
            </div>

            <div v-for="(item , index) in listData" :key="index">
                <div class="company-name">
                    <p>{{item.company}}</p>
                </div>
                <div class="company-logo">
                    <img :src="'http://hx.tunnel.qydev.com/image/'+item.picture" alt="">
                </div>
                <div class="message-name">
                    <ul>
                        <li>{{item.name}}</li>
                        <li class="sex">
                            <i v-if="item.sex===1"><img src="../../images/141615616.png" alt=""></i>
                            <i v-else><img src="../../images/1651651.png" alt=""></i>
                        </li>
                        <li class="message-name-line"></li>
                        <li>{{item.department}}</li>
                    </ul>
                </div>
                <div class="message-form">
                    <div>
                        <i><img src="../../images/1561561651.png" alt=""></i>
                        <p>{{item.telephone}}</p>
                    </div>
                    <div>
                        <i><img src="../../images/41651651.png" alt=""></i>
                        <p>{{item.fixedLine}}</p>
                    </div>
                    <div>
                        <i><img src="../../images/561561651.png" alt=""></i>
                        <p>{{item.email}}</p>
                    </div>
                    <div>
                        <i><img src="../../images/11651651.png" alt=""></i>
                        <p>{{item.net}}</p>
                    </div>
                    <div>
                        <i><img src="../../images/165165165.png" alt=""></i>
                        <!-- <p>{{item.scopes[0].title}};{{item.scopes[1].title}};</p> -->
                        <div class="industry-p">
                            <span v-for="(t , index) in item.scopes" :key="index">{{t.title}}</span>
                        </div>
                    </div>
                    <div>
                        <i><img src="../../images/15165161.png" alt=""></i>
                        <p>{{item.address}}</p>
                    </div>
                </div>
                <transition name="fade">
                    <div class="weui-box" v-show="wxImg">
                        <div class="weui-mask" @click="wxImg = false"></div>
                        <div class="weui-Wx">
                            <div><img :src="'http://hx.tunnel.qydev.com/qrcode/'+item.coreFileName" alt=""></div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { XButton } from 'vux'
import letfNav from '@/components/reuse/letfNav'
export default {
    components: {
        XButton,
        letfNav
    },
    data() {
        return {
            listData: [],
            wxImg: false,
        }
    },
    mounted() {
        this.$http.get('http://hx.tunnel.qydev.com/con/move?openId=o03n2w4MHPzjlYMkRQ7qeYXQi4X0')
            .then(response => {
                console.log(response);
                console.log(response.data);
                console.log('成功');
                this.listData = response.data
            })
            .catch(error => {
                console.log(error);
                console.log('网络错误，不能访问');
            })
    },
    methods: {
        onwxImg() {
            this.wxImg = !false;
        },
    },
}
</script>
<style lang="scss" scoped>
@import '../../css/myCard'
</style>

