<template>
    <div>
        <div class="cardBox">
            <div class="page-top">
                <letfNav v-show="letNavIcon">
                    <a href="javascript:;"><img src="../../images/631561651.png" alt=""></a>
                </letfNav>
                <span v-show="cancelIcon" @click="cancelCard()">
                    <x-button @click.native="disabled = false" type="primary" :disabled="!disabled" id="delete-false">{{('可操作') }}</x-button>
                    <a href="javascript:;"><img src="../../images/1561651.png" alt=""></a>
                </span>
                <div v-show="seekIcon" class="page-seek">
                    <input type="text" placeholder="请输入关键字">
                    <i><img src="../../images/15165156.png" alt=""></i>
                </div>
                <span v-show="navIcon" @click="navSelect()">
                    <a href="javascript:;"><img src="../../images/165165651.png" alt=""></a>
                </span>
                <span v-show="deleteIcon" @click="cardWarn()">
                    <a href="javascript:;"><img src="../../images/14151561.png" alt=""></a>
                </span>
            </div>
            <div class="nav-select">
                <ul v-show="navLi" @click="navSelect()">
                    <li @click="showDelete()">选择更多
                        <x-button @click.native="disabled = true" type="warn" :disabled="disabled" id="delete-true">{{('不可操作') }}</x-button>
                    </li>
                    <li>选择更多</li>
                </ul>
            </div>
            <!-- 删除多选框 -->
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
            <!-- 字母 -->
            <transition name="slide-fade">
                <div class="right-menu" v-show="!rightMenu">
                    <div class="right-menu-box" v-for="(keys , index) in carditemText" :key="index">
                        <a href="javascript:;" @click="onLetter('#letter'+ keys)">{{keys}}</a>
                    </div>
                </div>
            </transition>
            <div class="card-list" v-for="(items, keys ,index) in carditem" :key="keys">
                <!-- <div>{{carditemText[activeIndex]}}</div> -->
                <div class="item-wire" :id="'letter'+ keys">{{keys}}</div>
                <swipeout v-for="(item,index) in items" :key="index">
                    <swipeout-item underlay-color="#fff" @on-open="openDelete('open')" @on-close="closeDelete('close')" :right-menu-width="144" :disabled="disabled">
                        <div slot="right-menu">
                            <swipeout-button @click.native="onDeleteCard(index,keys)" :width="144" background-color="#383c43" id="button-right"><img src="../../images/14151561.png" alt=""></swipeout-button>
                        </div>
                        <div slot="content" class="demo-content vux-1px-tb">
                            <a href="javascript:;">
                                <div class="card-item">
                                    <div class="card-item-box">
                                        <div class="item-img">
                                            <img src="../../images/logo.png" alt="" :src="'http://hx.tunnel.qydev.com/image/'+item.picture">
                                        </div>
                                        <div class="item-msg">
                                            <div class="item-name">
                                                <span>{{item.name}}</span>
                                                <img src="../../images/1165165.png" alt="">
                                            </div>
                                            <div class="item-occupation">
                                                <p>{{item.occupation}}</p>
                                            </div>
                                            <div class="item-company">
                                                <p>{{item.company}}</p>
                                            </div>
                                        </div>
                                        <div class="item-checkbox" v-show="checkbox">
                                            <label>
                                                <input type="checkbox" v-model="item.val">
                                                <i></i>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </swipeout-item>
                </swipeout>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { Swipeout, SwipeoutItem, SwipeoutButton, XButton } from 'vux'
import letfNav from '@/components/reuse/letfNav'
export default {
    components: {
        Swipeout,
        SwipeoutItem,
        SwipeoutButton,
        XButton,
        letfNav
    },
    data() {
        return {
            /*         carditem: {
                        A: [{ name: '伊利丹1', occupation: '广告摄影师', company: '公司', val: false }, { "name": '伊利丹1', occupation: '广告摄影师', company: '公司', val: false },],
                        B: [{ name: '伊利丹2', occupation: '广告摄影师', company: '公司', val: false },],
                        C: [{ name: '伊利丹3', occupation: '广告摄影师', company: '公司', val: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', val: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', val: false }],
                        D: [{ name: '伊利丹4', occupation: '广告摄影师', company: '公司', val: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', val: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', val: false }],
                        E: [{ name: '伊利丹5', occupation: '广告摄影师', company: '公司', val: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', val: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', val: false }],
                        F: [{ name: '伊利丹6', occupation: '广告摄影师', company: '公司', val: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', val: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', val: false }],
                        G: [{ name: '伊利丹7', occupation: '广告摄影师', company: '公司', val: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', val: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', val: false }],
                        H: [{ name: '伊利丹7', occupation: '广告摄影师', company: '公司', val: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', val: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', val: false }],
                        I: [{ name: '伊利丹7', occupation: '广告摄影师', company: '公司', val: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', val: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', val: false }],
                        J: [{ name: '伊利丹7', occupation: '广告摄影师', company: '公司', val: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', val: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', val: false }],
                        K: [{ name: '伊利丹7', occupation: '广告摄影师', company: '公司', val: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', val: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', val: false }],
                    }, */
            carditem: {},
            activeIndex: 0,
            disabled: false,
            letNavIcon: true,
            navIcon: true,
            seekIcon: true,
            rightMenu: false,
            cancelIcon: false,
            navLi: false,
            deleteIcon: false,
            checkbox: false,
            weuiDialog: false,
        }
    },
    mounted() {
        axios.get('http://hx.tunnel.qydev.com/con/move/list?openId=o03n2w4MHPzjlYMkRQ7qeYXQi4X0')
            .then(response => {
                console.log(response);
                console.log(response.data);
                console.log('成功');
                this.carditem = response.data
            })
            .catch(error => {
                console.log(error);
                console.log('网络错误，不能访问');
            })
    },
    methods: {
        navSelect() {
            if (!this.navLi) {
                this.navLi = !false;
            } else {
                this.navLi = false;
            }
        },
        showDelete() {
            this.deleteIcon = !false;
            this.cancelIcon = !false;
            this.checkbox = !false;
            this.rightMenu = !false;
            this.navIcon = false;
            this.letNavIcon = false;
            this.seekIcon = false;
        },
        cancelCard() {
            this.deleteIcon = false;
            this.cancelIcon = false;
            this.checkbox = false;
            this.rightMenu = false;
            this.seekIcon = !false;
            this.navIcon = !false;
            this.letNavIcon = !false;
        },
        cardWarn() {
            this.weuiDialog = !false
        },
        removeAll() {
            for (let keys in this.carditem) {
                this.carditem[keys] = this.carditem[keys].filter((all) => {
                    //console.log(all.val)
                    return all.val === false;
                })
                if (!this.carditem[keys].length) {
                    delete this.carditem[keys]
                }
            }
            this.weuiDialog = false
        },
        onDeleteCard(index, keys) {
            this.carditem[keys].splice(index, 1);

            if (!this.carditem[keys].length) {
                delete this.carditem[keys]
            }

        },
        openDelete(type) {
            this.rightMenu = !false;
        },
        closeDelete(type) {
            this.rightMenu = false;
        },
        onLetter(keys) {
            let letter = this.$el.querySelector(keys)
            document.body.scrollTop = letter.offsetTop
        }
    },
    computed: {
        carditemText() {
            return Object.keys(this.carditem);
        }
    },

}
</script>
<style lang="scss" scoped>
@import '../../css/cardBox'
</style>





