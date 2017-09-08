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
                <span v-show="deleteIcon" @click="deleteCard()">
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
                    <div class="right-menu-box">
                        <a href="#">A</a>
                        <a href="#">B</a>
                        <a href="#">C</a>
                        <a href="#">D</a>
                        <a href="#">E</a>
                        <a href="#">F</a>
                        <a href="#">G</a>
                        <a href="#">H</a>
                        <a href="#">I</a>
                        <a href="#">J</a>
                        <a href="#">K</a>
                        <a href="#">L</a>
                        <a href="#">M</a>
                        <a href="#">N</a>
                        <a href="#">O</a>
                        <a href="#">P</a>
                        <a href="#">Q</a>
                        <a href="#">R</a>
                        <a href="#">S</a>
                        <a href="#">T</a>
                        <a href="#">U</a>
                        <a href="#">V</a>
                        <a href="#">W</a>
                        <a href="#">S</a>
                        <a href="#">Y</a>
                        <a href="#">Z</a>
                        <a href="#">#</a>
                    </div>
                </div>
            </transition>
            <div class="card-list">
                <div class="item-wire" id="item-A">A</div>
                <swipeout v-for="(item,index) in Carditem1" :key="index">
                    <swipeout-item underlay-color="#fff" @on-open="openDelete('open')" @on-close="closeDelete('close')" :right-menu-width="144" :disabled="disabled">
                        <div slot="right-menu">
                            <swipeout-button @click.native="onDeleteCard(index)" :width="144" background-color="#383c43"><img src="../../images/14151561.png" alt=""></swipeout-button>
                        </div>
                        <div slot="content" class="demo-content vux-1px-tb">
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
                                    <div class="item-checkbox" v-show="checkbox">
                                        <label>
                                            <input type="checkbox">
                                            <i></i>
                                        </label>
                                    </div>
                                </div>
                                <div class="small-wire"></div>
                            </div>
                        </div>
                    </swipeout-item>
                </swipeout>
                <x-button @click.native="disabled = false" type="primary" :disabled="!disabled" id="delete-false">{{('可操作') }}</x-button>
                <x-button @click.native="disabled = true" type="warn" :disabled="disabled" id="delete-true">{{('不可操作') }}</x-button>
                <div class="item-wire" id="item-B">B</div>
                <swipeout>
                    <swipeout-item :threshold="0" underlay-color="#ccc">
                        <div slot="right-menu">
                            <swipeout-button @click.native="onDeleteCard(index)" background-color="#D23934">{{('删除')}}</swipeout-button>
                        </div>
                        <div slot="content" class="demo-content vux-1px-tb">
                            <div class="card-item">
                                <div class="card-item-box">
                                    <div class="item-img">
                                        <img src="../../images/logo.png" alt="">
                                    </div>
                                    <div class="item-msg">
                                        <div class="item-name">
                                            <span>伊利丹</span>
                                            <img src="../../images/1165165.png" alt="">
                                        </div>
                                        <div class="item-occupation">
                                            <p>广告摄影师</p>
                                        </div>
                                        <div class="item-company">
                                            <p>求其有限公司</p>
                                        </div>
                                    </div>
                                    <div class="item-checkbox" v-show="checkbox">
                                        <label>
                                            <input type="checkbox">
                                            <i></i>
                                        </label>
                                    </div>
                                </div>
                                <div class="small-wire"></div>
                            </div>
                        </div>
                    </swipeout-item>
                </swipeout>

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
            Carditem1: [
                [{ name: '伊利丹', occupation: '广告摄影师', company: '公司' }, { name: '伊利丹1', occupation: '广告摄影师1', company: '公司1' }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2' },],
                [{ namea: '伊利丹', occupationa: '广告摄影师', company: '公司' }, { name: '伊利丹1', occupation: '广告摄影师1', company: '公司1' }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2' },]
            ],
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
        deleteCard() {

        },
        onDeleteCard(index) {
            this.Carditem1.splice(index, 1);
            console.log(index)
        },
        openDelete(type) {
            this.rightMenu = !false;
            //console.log('event: ', type)
        },
        closeDelete(type) {
            this.rightMenu = false;
            //console.log('event: ', type)
        }
    },

}
</script>
<style lang="scss" scoped>
@import '../../css/cardBox'
</style>



