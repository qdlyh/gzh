<template>
    <div>
        <div class="cardBox">
            <div class="page-top">
                <letfNav v-show="letNavIcon">
                    <a href="#"><img src="../../images/631561651.png" alt=""></a>
                </letfNav>
                <span v-show="cancelIcon" @click="cancelCard()">
                    <a href="#"><img src="../../images/1561651.png" alt=""></a>
                </span>
                <div v-show="seekIcon" class="page-seek">
                    <input type="text" placeholder="请输入关键字">
                    <i><img src="../../images/15165156.png" alt=""></i>
                </div>
                <span v-show="navIcon" @click="navSelect()">
                    <a href="#"><img src="../../images/165165651.png" alt=""></a>
                </span>
                <span v-show="!deleteIcon" @click="deleteCard(item,text)">
                    <a href="#"><img src="../../images/14151561.png" alt=""></a>
                </span>
            </div>
            <div class="nav-select">
                <ul v-show="navLi" @click="navSelect()">
                    <li @click="showDelete()">选择更多</li>
                    <li>选择更多</li>
                </ul>
            </div>
            <transition name="slide-fade">
                <div class="right-menu" v-show="!rightMenu">
                    <div class="right-menu-box" v-for="(text , index) in CarditemText" :key="index">
                        <a href="javascript:;" @click="onLetter('#letter'+index)">{{text}}</a>
                    </div>
                </div>
            </transition>
            <div class="card-list" v-for="(items, text ,index) in Carditem" :key="text">
                <!-- <div>{{CarditemText[activeIndex]}}</div> -->
                <div class="item-wire" :id="'letter'+index">{{text}}</div>
                <swipeout v-for="(item,index) in items" :key="index">
                    <swipeout-item underlay-color="#fff" @on-open="openDelete('open')" @on-close="closeDelete('close')" :right-menu-width="144" :disabled="disabled">
                        <div slot="right-menu">
                            <swipeout-button @click.native="onDeleteCard(index,text)" :width="144" background-color="#383c43"><img src="../../images/14151561.png" alt=""></swipeout-button>
                        </div>
                        <div slot="content" class="demo-content vux-1px-tb">
                            <a href="#">
                                <div class="card-item">
                                    <div class="card-item-box">
                                        <div class="item-img">
                                            <img src="../../images/logo.png" alt="">
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
                                        <div class="item-checkbox" v-show="!checkbox">
                                            <label>
                                                <input type="checkbox" v-model="checkedx" @click="item.checkedx=!item.checkedx">
                                                <i></i>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </swipeout-item>
                </swipeout>
                <x-button @click.native="disabled = false" type="primary" :disabled="!disabled" id="delete-false">{{('可操作') }}</x-button>
                <x-button @click.native="disabled = true" type="warn" :disabled="disabled" id="delete-true">{{('不可操作') }}</x-button>

            </div>
        </div>
    </div>
</template>
<script>
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
            Carditem: {
                A: [{ name: '伊利丹1', occupation: '广告摄影师', company: '公司' }, { name: '伊利丹2', occupation: '广告摄影师', company: '公司' }, { name: '伊利丹3', occupation: '广告摄影师1', company: '公司1' }, { name: '伊利丹', occupation: '广告摄影师2', company: '公司2' }],
                B: [{ name: '伊利丹2', occupation: '广告摄影师', company: '公司' }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1' }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2' }],
                C: [{ name: '伊利丹3', occupation: '广告摄影师', company: '公司' }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1' }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2' }],
                D: [{ name: '伊利丹4', occupation: '广告摄影师', company: '公司' }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1' }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2' }],
                E: [{ name: '伊利丹5', occupation: '广告摄影师', company: '公司' }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1' }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2' }],
                F: [{ name: '伊利丹6', occupation: '广告摄影师', company: '公司' }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1' }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2' }],
                G: [{ name: '伊利丹7', occupation: '广告摄影师', company: '公司' }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1' }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2' }],
                H: [{ name: '伊利丹7', occupation: '广告摄影师', company: '公司' }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1' }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2' }],
                I: [{ name: '伊利丹7', occupation: '广告摄影师', company: '公司' }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1' }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2' }],
                J: [{ name: '伊利丹7', occupation: '广告摄影师', company: '公司' }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1' }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2' }],
                K: [{ name: '伊利丹7', occupation: '广告摄影师', company: '公司' }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1' }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2' }],
            },
            activeIndex: 0,
            checkedx: '',
            disabled: false,
            letNavIcon: true,
            navIcon: true,
            seekIcon: true,
            rightMenu: false,
            cancelIcon: false,
            navLi: false,
            deleteIcon: false,
            checkbox: false,
        }
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
        deleteCard(text,item) {
            let list = Object.keys(this.Carditem);
             /* this.items = this.items.filter(function(items) { return !item.checkedx }) */
             let targetKey = keys.find( key => this.Carditem[key] === item )
             
        },
        onDeleteCard(index,text) {
            this.Carditem[text].splice(index, 1);
        },
        openDelete(type) {
            this.rightMenu = !false;
        },
        closeDelete(type) {
            this.rightMenu = false;
        },
        onLetter(text) {
            let letter = this.$el.querySelector(text)
            document.body.scrollTop = letter.offsetTop
        }
    },
    computed: {
        CarditemText() {
            return Object.keys(this.Carditem);
        }
    },

}
</script>
<style lang="scss" scoped>
@import '../../css/cardBox'
</style>




