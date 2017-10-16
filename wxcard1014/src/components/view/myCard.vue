<template>
    <div>

        <div class="empty" v-if="!this.listData">
            <img src="../../images/41485156.png" alt="">
            <p>尚未填写您的名片信息</p>
            <div class="btn-blue">
                <router-link to="/myForm">完善资料</router-link>
            </div>
        </div>

        <div class="myCard" v-else>
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
                        <router-link to="/myForm"><img src="../../images/156165165.png" alt=""></router-link>
                    </span>
                </div>
            </div>

            <div v-for="(item , index) in listData" :key="index">
                <div class="company-name">
                    <p>{{item.company}}</p>
                </div>
                <div class="company-logo">
                    <img v-if="item.picture!==null" :src="'api/image/'+item.picture">
                    <img v-else src="../../images/logo.png">
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
                        <p>{{scopes}}</p>
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
                            <div><img :src="'api/qrcode/'+item.coreFileName" alt=""></div>
                        </div>
                    </div>
                </transition>
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
            listData: [],
            wxImg: false,
        }
    },
    mounted() {
        //  alert(this.$parent.wxOpenId)
        //  return
        this.$http({
            method: 'get',
            url: 'api/con/move',
            params: {
                openId: this.$parent.wxOpenId
            }
        })
            .then(response => {
                //console.log(response);
                //console.log(response.data);
                //console.log('成功');
                this.listData = response.data;
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
    computed: {
        scopes() {
            let arr = [];
            let scopeBox;
            for (let i = 0; i < this.listData[0].scopes.length; i++) {
                console.log(this.listData[0].scopes[i].title)
                arr.push(this.listData[0].scopes[i].title)
            }
            scopeBox = arr.join("; ")
            //console.log(scopeBox)
            return scopeBox
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../css/myCard'
</style>

