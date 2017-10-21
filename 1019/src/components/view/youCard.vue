<template>
    <div>
        <div class="cardForm" style="margin-bottom:100px;">
            <div v-for="(myitem , index) in myData" :key="index">
                <div class="page-subscribe" v-if="myitem.subscribe==0">
                    <p>请关注云之康公众号获取您的名片信息</p>
                </div>
                <div class="page-top" v-if="myitem.subscribe==1">
                    <letfNav>
                        <a href="javascript:;"><img src="../../images/631561651.png" alt=""></a>
                    </letfNav>
                    <div class="icon-right">
                        <span @click="cardWarn()">
                            <a href="javascript:;"><img src="../../images/14151561.png" alt=""></a>
                        </span>
                        <div class="icon-line"></div>
                        <span @click="onwxImg()">
                            <a href="javascript:;"><img src="../../images/15616516.png" alt=""></a>
                        </span>
                        <div class="icon-line"></div>
                    </div>
                </div>
            </div>

            <div v-for="(item , index) in listData" :key="index">
                <div class="company-name">
                    <p>{{item.company}}</p>
                </div>
                <div class="company-logo">
                    <img v-if="item.picture!==null" :src="'/vcard-manage-web/image/'+item.picture">
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
                        <a :href="'tel:'+item.telephone">{{item.telephone}}</a>
                    </div>
                    <div v-if="item.telephone2!=''">
                        <i></i>
                        <a :href="'tel:'+item.telephone2">{{item.telephone2}}</a>
                    </div>
                    <div v-if="item.fixedLine!=''">
                        <i><img src="../../images/41651651.png" alt=""></i>
                        <!-- <p>{{item.fixedLine}}</p> -->
                        <a :href="'tel:'+item.fixedLine">{{item.fixedLine}}</a>
                    </div>
                    <div>
                        <i><img src="../../images/561561651.png" alt=""></i>
                        <p>{{item.email}}</p>
                    </div>
                    <div v-if="item.net!=''">
                        <i><img src="../../images/11651651.png" alt=""></i>
                        <a :href="item.net">{{item.net}}</a>
                        <!-- <a :href="'http://'+item.net">{{item.net}}</a> -->
                    </div>
                    <div>
                        <i><img src="../../images/165165165.png" alt=""></i>
                        <p>{{scopes}}</p>
                    </div>
                    <div>
                        <i><img src="../../images/15165161.png" alt=""></i>
                        <!-- <p>{{item.address}}</p> -->
                        <a href="youMap.html">{{item.address}}</a>
                    </div>
                </div>
                <!-- 微信 -->
                <transition name="fade">
                    <div class="weui-box" v-show="wxImg">
                        <div class="weui-mask" @click="wxImg = false"></div>
                        <div class="weui-Wx">
                            <div><img :src="'/vcard-manage-web/qrcode/'+item.coreFileName" alt=""></div>
                        </div>
                    </div>
                </transition>

                <!-- 删除多选框 -->
                <transition name="fade">
                    <div class="weui-box" v-show="weuiDialog">
                        <div class="weui-mask"></div>
                        <div class="weui-dialog">
                            <div class="weui-dialog__hd">
                                <strong>确认删除吗？</strong>
                            </div>
                            <div class="weui-dialog__bd">
                                <p>删除后信息将不能找回</p>
                            </div>
                            <div class="weui-dialog__ft">
                                <p class="weui-dialog__btn" @click="weuiDialog = !weuiDialog">取消</p>
                                <p class="weui-dialog__btn" @click="removeAll()">确认</p>
                            </div>
                        </div>
                    </div>
                </transition>

                <div class="btn-blue">
                    <!-- <router-link to="listData[0].net">前往企业官网</router-link> -->
                    <a :href="listData[0].net">前往企业官网</a>
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
            listData: [],
            wxImg: false,
            ids: '',
            weuiDialog: false,
        }
    },
    mounted() {
        //  alert(this.$parent.wxOpenId)
        //  return
        this.$http({
            method: 'get',
            url: 'apiData/vcard-manage-web/con/move',
            params: {
                openId: this.$parent.wxOpenId
            }
        })
            .then(response => {
                //console.log(response);
                //console.log(response.data);
                //console.log('成功');
                this.myData = response.data;
            })
            .catch(error => {
                console.log(error);
                console.log('网络错误，不能访问');
            })

        this.$http({
            method: 'get',
            url: 'apiData/vcard-manage-web/con/move?',
            params: {
                openId: this.$route.params.id
            }
        })
            .then(response => {
                //console.log(response);
                //console.log(response.data);
                //console.log('成功');
                this.listData = response.data;
                localStorage.setItem("youAddress", this.listData[0].address)
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
        cardWarn() {
            this.weuiDialog = !false;
        },
        removeAll() {
            //alert(this.$parent.wxOpenId)
            for (let i = 0; i < this.listData.length; i++) {
                //console.log(this.listData[i].id)
                this.ids = this.listData[i].id
            }
            this.$http({
                method: 'get',
                url: '/vcard-manage-web/con/move/delete',
                params: {
                    openId: this.$parent.wxOpenId,
                    ids: this.ids
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .then(response => {
                    //console.log(response);
                    //console.log(response.data); 
                    //console.log('成功');
                    this.weuiDialog = false;
                    this.$router.push('/cardBox')
                })
                .catch(error => {
                    console.log(error);
                    console.log('网络错误，不能访问');
                })
        }
    },
    computed: {
        scopes() {
            let arr = [];
            let scopeBox;
            for (let i = 0; i < this.listData[0].scopes.length; i++) {
                //console.log(this.listData[0].scopes[i].title)
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

