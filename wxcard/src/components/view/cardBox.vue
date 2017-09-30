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
                    <input type="text" placeholder="请输入关键字" v-model="seartext">
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
            <div class="card-list" v-for="(items, keys ,index) in searchFor(carditem,seartext)" :key="keys">
                <!-- <div>{{carditemText[activeIndex]}}</div> -->
                <div class="item-wire" :id="'letter'+ keys">{{keys}}</div>
                <swipeout v-for="(item,index) in items" :key="index">
                    <swipeout-item underlay-color="#fff" @on-open="openDelete('open')" @on-close="closeDelete('close')" :right-menu-width="144" :disabled="disabled">
                        <div slot="right-menu">
                            <swipeout-button @click.native="onDeleteCard(index,keys)" :width="144" background-color="#383c43" id="button-right"><img src="../../images/14151561.png" alt=""></swipeout-button>
                        </div>
                        <div slot="content" class="demo-content vux-1px-tb">
                            <div class="card-item">
                                <router-link to="/cardForm">
                                    <div class="card-item-box">
                                        <div class="item-img">
                                            <img :src="'http://192.168.112.105/image/'+item.picture" alt="">
                                        </div>
                                        <div class="item-msg">
                                            <!-- <input type="text" name="ids" v-model="item.id" class="input-none"> -->
                                            <div class="item-name">
                                                <span>{{item.name}}</span>
                                                <img v-if="item.sex===1" src="../../images/1165165.png" alt="">
                                                <img v-else src="../../images/1651651.png" alt="">
                                            </div>
                                            <div class="item-occupation">
                                                <p>{{item.department}}</p>
                                            </div>
                                            <div class="item-company">
                                                <p>{{item.company}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </router-link>
                                <div class="item-checkbox" v-show="checkbox">
                                    <label>
                                        <input type="checkbox" v-model="item.flag">
                                        <i></i>
                                    </label>
                                </div>
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
            /*           carditem: {
                                 A: [{name: '张三'},],
                                 B: [{name: '李四'},],
                                 C: [{name: '李四'},],
                                 D: [{name: '李四'},],
                                 E: [{name: '李四'},],
                   } */
            /*     carditem: {
                       A: [{id:"78", name: '伊利丹1', occupation: '广告摄影师', company: '公司', flag: false }, {id:"71", "name": '伊利丹1', occupation: '广告摄影师', company: '公司', flag: false },],
                       B: [{id:"72", name: '伊利丹2', occupation: '广告摄影师', company: '公司', flag: false },],
                       C: [{ id:"71",name: '伊利丹3', occupation: '广告摄影师', company: '公司', flag: false }, {id:"66", name: '伊利丹', occupation: '广告摄影师1', company: '公司1', flag: false }, {id:"65", name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', flag: false }],
                       D: [{ id:"1",name: '伊利丹4', occupation: '广告摄影师', company: '公司', flag: false }, {id:"3", name: '伊利丹', occupation: '广告摄影师1', company: '公司1', flag: false }, { id:"91",name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', flag: false }],
                       E: [{ name: '伊利丹5', occupation: '广告摄影师', company: '公司', flag: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', flag: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', flag: false }],
                       F: [{ name: '伊利丹6', occupation: '广告摄影师', company: '公司', flag: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', flag: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', flag: false }],
                       G: [{ name: '伊利丹7', occupation: '广告摄影师', company: '公司', flag: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', flag: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', flag: false }],
                       H: [{ name: '伊利丹7', occupation: '广告摄影师', company: '公司', flag: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', flag: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', flag: false }],
                       I: [{ name: '伊利丹7', occupation: '广告摄影师', company: '公司', flag: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', flag: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', flag: false }],
                       J: [{ name: '伊利丹7', occupation: '广告摄影师', company: '公司', flag: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', flag: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', flag: false }],
                       K: [{ name: '伊利丹7', occupation: '广告摄影师', company: '公司', flag: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', flag: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', flag: false }],
                       L: [{ name: '伊利丹5', occupation: '广告摄影师', company: '公司', flag: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', flag: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', flag: false }],
                       M: [{ name: '伊利丹5', occupation: '广告摄影师', company: '公司', flag: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', flag: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', flag: false }],
                       N: [{ name: '伊利丹5', occupation: '广告摄影师', company: '公司', flag: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', flag: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', flag: false }],
                       O:[],
                       P:[],
                       Q:[],
                       Z:[],
                       '#':[],
                   },   */
            carditem: {},
            //copycarditem: {},
            //searlist: [],
            arrDelete: [],
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
            seartext: '',
        }
    },
    mounted() {
        this.$http({
            method: 'get',
            url: 'http://192.168.112.105/con/move/list?openId=o03n2w4MHPzjlYMkRQ7qeYXQi4X0',
        })
            .then(response => {
                //console.log('成功');
                this.carditem = response.data;
                //console.log(this.carditem)
                this.copycarditem = this.carditem;
                //console.log(this.copycarditem)
            })
            .catch(error => {
                console.log(error);
                console.log('网络错误，不能访问');
            })
        /*         this.$http({
                    method: 'post',
                    url: 'http://hx.tunnel.qydev.com/con/move/delete?openId=o03n2w4MHPzjlYMkRQ7qeYXQi4X0',
                    data: {
                        userId: "78",
                    },
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                    .then(response => {
                        //console.log(response);
                        //console.log(response.data); 
                        console.log('成功');
                    })
                    .catch(error => {
                        console.log(error);
                        console.log('网络错误，不能访问');
                    }) */
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
                    console.log(all.flag)
                    //console.log(this.carditem[keys][all].id)
                    return all.flag === false;
                })
            }

            this.weuiDialog = false

            this.$http({
                method: 'get',
                url: 'http://192.168.112.105/con/move/delete',
                params: {
                    openId: 'o03n2w4MHPzjlYMkRQ7qeYXQi4X0',
                    ids: '1'
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .then(response => {
                    //console.log(response);
                    //console.log(response.data); 
                    //console.log('删除成功');
                })
                .catch(error => {
                    console.log(error);
                    console.log('网络错误，不能访问');
                })

        },
        onDeleteCard(index, keys) {
            /*   for (let i = 0; i < this.carditem[keys].length; i++) {
                    console.log(this.carditem[keys].id)
              } */
            /*      var deleteId = this.carditem[keys].forEach((element)=>{
                     console.log(element.id);
                     
                })  */
            this.$http({
                method: 'get',
                url: 'http://192.168.112.105/con/move/delete',
                params: {
                    openId: 'o03n2w4MHPzjlYMkRQ7qeYXQi4X0',
                    ids: this.carditem[keys][index].id
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .then(response => {
                    //console.log(response);
                    //console.log(response.data); 
                    //console.log('删除成功');
                })
                .catch(error => {
                    console.log(error);
                    console.log('网络错误，不能访问');
                })
            this.carditem[keys].splice(index, 1);
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
        },
        /* 搜索 */
        searchFor(value, seartext) {
            for (let keys in this.carditem) {
                //console.log(this.carditem[keys])
                if (!this.carditem[keys].length) {
                    delete this.carditem[keys]
                }
            }
            var result = {};  //用result来存放查到的结果
            if (!seartext) { 
                return this.carditem;
            }
            seartext = seartext.trim().toLowerCase();   //把查询的内容转为小写的
            for (var key in this.carditem) {
                for (var i = 0; i < this.carditem[key].length; i++) {
                    if (this.carditem[key][i].name.toLowerCase().indexOf(seartext) != -1) {
                        result[key] = this.carditem[key];
                    }
                }
/*                 for (var i = 0; i < this.carditem[key].length; i++) {
                   if (this.carditem[key][i].company.indexOf(seartext) != -1) {
                         result[key] = this.carditem[key];
                  }
                } */
            }
            return result;
        },
    },
    computed: {
        carditemText() {
            return Object.keys(this.carditem);
        },
        /*        carditemLG() {
                   for (let keys in this.carditem) {
                       //console.log(this.carditem[keys])
                       if (!this.carditem[keys].length) {
                           delete this.carditem[keys]
                       }
                   }
                   return this.carditem
               } */
    },
    watch: {
        /*         seartext(cur) {
                    if (cur == '') {
                        this.carditem = this.copycarditem;
                        //console.log(this.copycarditem)
                    }
                    else {
                        this.searlist = [];
                        for (let keys in this.carditem){
                            //console.log(this.carditem[keys])
                            for (let i = 0; i < this.carditem.length; i++) {
                                if (this.carditem[i].indexOf(cur) >= 0) {
                                    this.searlist.push(this.carditem[i]);
                                }
                            }
                        }
                        this.carditem = this.searlist;
                    }
                } */
    }

    /*     for (let keys in this.carditem){
            //console.log(this.carditem[keys])
            for (let i = 0; i < this.carditem[keys].length; i++) {
                if(this.carditem[key][i].name == cur){
                    
                }
            }
        } */
}
</script>
<style lang="scss" scoped>
@import '../../css/cardBox'
</style>



