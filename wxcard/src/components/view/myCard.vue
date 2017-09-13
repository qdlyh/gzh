<template>
    <div>
        <div class="myCard">
            <div class="page-top">
                <letfNav>
                    <a href="javascript:;"><img src="../../images/631561651.png" alt=""></a>
                </letfNav>
                <div class="icon-right">
                    <div class="icon-line"></div>
                    <span @click="onwxImg()">
                        <a href="javascript:;"><img src="../../images/15616516.png" alt=""></a>
                    </span>
                    <div class="icon-line"></div>
                    <span>
                        <router-link to='/cardBox'><img src="../../images/156165165.png" alt=""></router-link>
                    </span>
                </div>
            </div>
            <transition name="fade">
                <div class="weui-box" v-show="wxImg">
                    <div class="weui-mask" @click="wxImg = false"></div>
                    <div class="weui-Wx">
                        <div><img src="../../images/wx.png" alt=""></div>
                    </div>
                </div>
            </transition>
            <div v-for="(item , index) in listData" :key="index">
                <div class="company-name">
                    <p>{{item.company}}</p>
                </div>
                <div class="company-logo">
                    <img src="../../images/logo.png" alt="">
                </div>
                <div class="message-name">
                    <ul>
                        <li>{{item.name}}</li>
                        <li :src="item.picture"></li>
                        <li class="sex"><img src="../../images/1651661.png" alt=""></li>
                        <li class="message-name-line"></li>
                        <li>{{item.department}}</li>
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
            /*  listData: [{name:'哦哦哦',company:'求其公司',sex:'男',Phone:'110110110',Phone2:'132321123',email:'345745@qq.com',website:'www.baidu.com',industry:'杀猪,卖猪,吃素',site:'鸣泉居'}], */
            listData: [],
            wxImg: false,
        }
    },
    mounted() {
        /* function GetQueryString(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        }
        console.log(GetQueryString("id")); */
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
        var Request = new UrlSearch(); //实例化
        //alert(Request.id);

        axios.get('http://hx.tunnel.qydev.com/con/move?openId='+Request.id)
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
    }
}
</script>
<style lang="scss" scoped>
@import '../../css/myCard'
</style>

