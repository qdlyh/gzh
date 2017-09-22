<template>
    <div>
        <div class="myform">
            <div id="edit-page" v-show="editForm">
                <div class="page-top">
                    <span>
                        <a href="javascript:;"><img src="../../images/1561651.png" alt=""></a>
                    </span>
                </div>
                <div class="edit-form" v-for="(item, index) in listData" :key="index">
                    <div class="company company-center">
                        <x-input name="company" @click="onLeast1()" ref="Least1" v-model="item.company" placeholder="请输入您的公司名字" :show-clear="false" :required="true" :min="5" :max="20"></x-input>
                    </div>
                    <div class="file-box">
                        <img id="file-img" src="../../images/logo.png" :src="'http://hx.tunnel.qydev.com/image/'+item.picture">
                        <input id="file" name="picture" type="file">
                    </div>
                    <div class="user-name">
                        <div style="margin-top:20px;">
                            <x-input name="name" v-model="item.name" placeholder="请输入您的名字" :show-clear="false" :required="true" :min="2" :max="6"></x-input>
                        </div>
                        <div>
                            <x-input name="department" v-model="item.department" placeholder="请输入您的职位" :show-clear="false" :required="true" :min="2" :max="6"></x-input>
                        </div>
                    </div>
                    <div class="user-sex" @click="chooseSex()">
                        <i v-show="SexMan"><img src="../../images/141615616.png" alt=""></i>
                        <i v-show="SexWoman"><img src="../../images/1651651.png" alt=""></i>
                        <label><input class="nam" ref="man" type="radio" name="sex" checked="checked">
                            <i></i>男</label>
                        <label><input class="woman" ref="woman" type="radio" name="sex">
                            <i></i>女</label>
                    </div>
                    <div class="user-message">
                        <div>
                            <i><img src="../../images/1561561651.png" alt=""></i>
                            <x-input name="telephone" v-model="item.telephone" placeholder="请输入手机号码" :show-clear="false" :required="true" keyboard="number" is-type="china-mobile"></x-input>

                        </div>
                        <div>
                            <i><img src="../../images/41651651.png" alt=""></i>
                            <input type="text" v-model="item.fixedLine" name="fixedLine" placeholder="请输入您的座机号码">
                        </div>
                        <div>
                            <i><img src="../../images/561561651.png" alt=""></i>
                            <x-input name="email" placeholder="请输入邮箱地址" :show-clear="false" :required="true" is-type="email"></x-input>

                        </div>
                        <div>
                            <i><img src="../../images/11651651.png" alt=""></i>
                            <input type="text" v-model="item.net" name="net" placeholder="请输入您的公司官方网址">
                        </div>
                        <div @click="goIndustry()">
                            <i><img src="../../images/165165165.png" alt=""></i>
                            <input @blur="onLeast4()" name="scope" v-model="industryValue" :key="index" type="text" placeholder="点击选择公司主营业务">
                            <span class="WarnIcon" v-show="inputLeast4"></span>
                        </div>
                        <div>
                            <i><img src="../../images/15165161.png" alt=""></i>
                            <x-input v-model="item.address" placeholder="请输入公司地址" :show-clear="false" :required="true" :min="4" :max="30"></x-input>
                        </div>
                    </div>
                </div>
                <div class="btn-green" @click="submit()">
                    <x-button type="primary">
                        <a link="/cardBox">完成</a>
                    </x-button>
                </div>

                <transition name="fade">
                    <div class="weui-box" v-show="weuiDialog">
                        <div class="weui-mask"></div>
                        <div class="weui-dialog">
                            <div class="weui-dialog__hd">
                                <strong>输入错误</strong>
                            </div>
                            <div class="weui-dialog__bd">
                                <p>请检查输入是否有误</p>
                            </div>
                            <div class="weui-dialog__ft">
                                <p class="weui-dialog__btn" @click="weuiWarn">确认</p>
                            </div>
                        </div>
                    </div>
                </transition>

            </div>
            <div id="industry-page" v-show="industry">
                <div class="page-top">
                    <div>
                        <!--    <a href="javascript:;" @click="onCancel()"><img src="../../images/1561651.png" alt=""></a> -->
                    </div>
                    <span @click="affirm()">
                        <a href="javascript:;"><img src="../../images/21651561.png" alt=""></a>
                    </span>
                </div>

                <div class="industry-content">
                    <div class="industry-box">
                        <span v-for="(tabs,index) in tabBox" :key="index">
                            <span class="industry-active">{{ tabs.title }}
                                <i class="delete-industry" @click="deleteTab(tabs)"><img src="../../images/15616161.png" alt=""></i>
                            </span>
                        </span>
                    </div>
                    <i class="num-industr">(已选{{tabCount}}/3)</i>
                </div>
                <div class="tab-box">
                    <ul class="tab-list">
                        <li v-for="(list, index) in option" :key="index" @click="changeIndex(index)" :class="{'switchClass':activeIndex === index}"> {{list.title}}</li>
                    </ul>
                    <ul class="tab-item" v-for="(items, index) in tabData" :key="index" v-show="index===activeIndex">
                        <li v-for="(item, index) in items" :key="index" @click="addition(item,index)" :class="{'tabActive':tabIndex === item}">
                            {{item.title}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { Group, XInput, XButton } from 'vux'
export default {
    components: {
        XButton,
        Group,
        XInput
    },
    data() {
        return {
            activeIndex: 0,
            tabIndex: 0,
            editForm: true,
            industry: false,
            SexMan: true,
            SexWoman: false,
            /*             Phone: '',
                        Email: '',
                        Least1: '',
                        Least2: '',
                        Least3: '',
                        Least4: '',
                        Least5: '', */
            /*             inputWarn1: false,
                        inputWarn2: false,
                        inputWarn3: false,
                        inputLeast1: false,
                        inputLeast2: false,
                        inputLeast3: false, 
                        inputLeast5: false, */
            inputLeast4: false,
            weuiDialog: false,  //单选框
            listData: [],
            formTab: [],   //input选中的标签
            tabBox: [
                {
                    title: "电脑",
                },
                {
                    title: "房地产",
                }
            ],    //tab页选中的标签
            option: [],  //tab左边
            tabData: [   //tab右边
                [],
                [],
                [],
                [],
                [],
            ],
        }
    },
    updated() {
        var $file = document.getElementById('file')
        var $fileImg = document.getElementById('file-img')

        function readFile() {
            var file = this.files[0];
            if (!/image\/\w+/.test(file.type)) {
                //alert("请选择图片类型");
                return false;
            }
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(e) {
                $fileImg.src = this.result;

            }
        }
        $file.onchange = readFile;
    },

    mounted() {
        axios.get('http://hx.tunnel.qydev.com/con/move?openId=o03n2w4MHPzjlYMkRQ7qeYXQi4X0')
            .then(response => {
                //console.log(response.data);
                console.log('form成功');
                this.listData = response.data
            })
            .catch(error => {
                console.log(error);
                console.log('网络错误，不能访问');
            })

        axios.get('http://hx.tunnel.qydev.com/con/scope?openId=o03n2w4MHPzjlYMkRQ7qeYXQi4X0')
            .then(response => {
                console.log('tab成功');
                this.option = response.data
            })
            .catch(error => {
                console.log(error);
                console.log('网络错误，不能访问');
            })
        axios.get('http://hx.tunnel.qydev.com/con/scope/allChild?openId=o03n2w4MHPzjlYMkRQ7qeYXQi4X0')
            .then(response => {
                console.log('tabs成功');
                this.tabData = response.data
            })
            .catch(error => {
                console.log(error);
                console.log('网络错误，不能访问');
            })
    },

    methods: {
        /*         onPhone() {
                    //  var Xinput = document.getElementsByClassName('Xinput') 
                    if (this.Phone === '') {
                        this.inputWarn2 = !false;
                        //console.log('手机为空')
                        return false;
                    }
                    if (!this.Phone.match(/(^1[3|5|8][0-9]{9}$)/)) {
                        this.inputWarn2 = !false;
                        //console.log('手机号码错误')
                        return false;
                    } else {
                        this.inputWarn2 = false;
                        //console.log('手机号码正确')
                        return false
                    }
                },
                onEmail() {
                    if (this.Email === '') {
                        this.inputWarn3 = !false;
                        //console.log('邮箱为空')
                        return false;
                    }
                    if (!this.Email.match(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/)) {
                        this.inputWarn3 = !false;
                        //console.log('邮箱号码错误')
                        return false;
                    } else {
                        this.inputWarn3 = false;
                        //console.log('邮箱号码正确')
                        return false;
                    }
                }, */
        onLeast1() {
            if (this.$refs.Least1.value === '') {
                console.log('不空')
                console.log(this.$refs.Least1.value)
                return false;
            } else {
                console.log('空')
                 console.log(this.$refs.Least1.value)
                return false;
            }
        },
        /*  onLeast2() {
             if (this.$refs.Least2.value === '') {
                 this.inputLeast2 = !false;
                 return false;
             } else {
                 console.log(this.$refs.Least2.value + '2')
                 this.inputLeast2 = false;
                 return false;
             }
         },
         onLeast3() {
             if (this.$refs.Least3.value === '') {
                 this.inputLeast3 = !false;
                 return false;
             } else {
                 console.log(this.$refs.Least3.value + '3')
                 this.inputLeast3 = false;
                 return false;
             }
         },*/
        onLeast4() {
            if (this.industryValue.length === 0) {
                this.inputLeast4 = !false;
                //console.log('空')
                //console.log(this.industryValue.length)
                return false;
            } else {
                this.inputLeast4 = false;
                //console.log(this.formTab.length)
                //console.log('不空')
                return false;
            }
        },
        /*         onLeast5() {
                    if (this.$refs.Least5.value === '') {
                        this.inputLeast5 = !false;
                        //console.log('空')
                        return false;
                    } else {
                        console.log(this.$refs.Least5.value + '5')
                        this.inputLeast5 = false;
                        //console.log('不空')
                        return false;
                    }
                }, */
        goIndustry() {
            if (this.editForm === true) {
                this.editForm = false
                this.industry = !false;
            }
        },
        chooseSex() {
            if (this.$refs.man.checked === true) {
                this.SexMan = !false;
                this.SexWoman = false;
            }
            if (this.$refs.woman.checked === true) {
                this.SexMan = false;
                this.SexWoman = !false;
            }
        },

        submit() {
            this.onLeast1()
            this.onLeast4();
        },
        weuiWarn() {
            this.weuiDialog = false;
        },

        /* 主营选择 */
        changeIndex(index) {
            this.activeIndex = index
        },
        addition(item) {
            let ifHave = false;
            for (let i = 0; i < this.tabBox.length; i++) {
                //console.log(this.tabBox[i].title)
                if (this.tabBox[i].title === item.title) {
                    ifHave = true;
                }
            }
            if (this.tabBox.length === 3) {
                //alert('不能超过三个')
                return false;
            }
            if (!ifHave) {
                let newName = { title: item.title }
                this.tabBox.push(newName);
            }
            this.tabIndex = item
        },
        deleteTab(tabs) {
            let index = this.tabBox.indexOf(tabs)
            this.tabBox.splice(index, 1);
            //console.log(index)
        },
        affirm() {
            this.formTab = [];
            for (let i = 0; i < this.tabBox.length; i++) {
                let newName = (this.tabBox[i].title)
                this.formTab.push(newName);
                //console.log(this.formTab.length)
            }
            if (this.industry === true) {
                this.industry = false;
                this.editForm = !false;
            }
            //this.formTab.join(' ');

            this.onLeast4()
            /*  this.onCancel() */
        },
        /*         onCancel() {
                    //console.log('on cancel')
                    if (this.industry === true) {
                        this.industry = false;
                        this.editForm = !false;
                    }
                }, */
    },
    computed: {
        tabCount(tabs) {
            return this.tabBox.filter((num) => {
                return !num.tabs
            }).length
        },
        /* formTabs() {
            let str = '';
            return this.str = this.formTab.join('; ');
        } */

        industryValue() {
            let arr = [];
            let str = '';
            for (let i = 0; i < this.tabBox.length; i++) {
                let newName = (this.tabBox[i].title)
                arr.push(newName)
                //console.log(arr)
            }
            str = arr.join('; ');
            return str;
        }

    },
}
</script>
<style lang="scss" scoped>
@import '../../css/myForm'
</style>
