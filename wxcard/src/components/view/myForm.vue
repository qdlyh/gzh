<template>
    <div>
        <div class="myform">
            <div id="edit-page" v-show="editForm">
                <div class="page-top">
                    <span>
                        <a href="#"><img src="../../images/1561651.png" alt=""></a>
                    </span>
                </div>
                <div class="edit-form">
                    <div class="company">
                        <input @blur="onLeast1()" type="text" ref="Least1" placeholder="请输入您的公司名字">
                        <span v-show="inputLeast1"><img src="../../images/45561651.png" alt=""></span>
                    </div>
                    <div class="file-box">
                        <img id="file-img" src="../../images/logo.png">
                        <input id="file" type="file">
                    </div>
                    <div class="user-name">
                        <div>
                            <input @blur="onLeast2()" type="text" ref="Least2" placeholder="请输入您的名字">
                            <span v-show="inputLeast2"><img src="../../images/45561651.png" alt=""></span>
                        </div>
                        <div>
                            <input @blur="onLeast3()" type="text" ref="Least3" placeholder="请输入您的职位">
                            <span v-show="inputLeast3"><img src="../../images/45561651.png" alt=""></span>
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
                            <input @blur="onPhone()" ref="Phone" type="text" placeholder="请输入您的手机号码">
                            <span v-show="inputWarn2"><img src="../../images/45561651.png" alt=""></span>
                        </div>
                        <div>
                            <i><img src="../../images/41651651.png" alt=""></i>
                            <input type="text" placeholder="请输入您的座机号码">
                        </div>
                        <div>
                            <i><img src="../../images/561561651.png" alt=""></i>
                            <input @blur="onEmail()" ref="Email" type="text" placeholder="请输入您的邮箱">
                            <span v-show="inputWarn3"><img src="../../images/45561651.png" alt=""></span>
                        </div>
                        <div>
                            <i><img src="../../images/11651651.png" alt=""></i>
                            <input type="text" placeholder="请输入您的公司官方网址">

                        </div>
                        <div @click="goIndustry()">
                            <i><img src="../../images/165165165.png" alt=""></i>
                            <div>
                                <!-- v-model="industryValue" -->
                                <!-- <ul v-for="item in formTab">{{item.tabname}}</ul> -->
                                <input class="edit-industry" @blur="onLeast4()" ref="Least4" v-model="formTab" type="text" placeholder="点击选择公司主营业务">
                                <span v-show="inputLeast4"><img src="../../images/45561651.png" alt=""></span>
                            </div>
                        </div>
                        <div>
                            <i><img src="../../images/15165161.png" alt=""></i>
                            <input @blur="onLeast5()" ref="Least5" type="text" placeholder="请输入公司地址">
                            <span v-show="inputLeast5"><img src="../../images/45561651.png" alt=""></span>
                        </div>
                    </div>
                </div>
                <div class="btn-green" @click="submit()">
                    <x-button type="primary">
                        <a href="#">完成</a>
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
                    <span class="industry-cancel">
                        <div class="industry-warn">
                            <input type="checkbox" v-model="show"></input>
                        </div>
                        <div class="industry-msg">
                            <confirm v-model="show" :title="('信息还没保存')" @on-cancel="onCancel" @on-confirm="onConfirm">
                                <p>{{ ('是否需要保存信息') }}</p>
                            </confirm>
                        </div>
                        <a href="#"><img src="../../images/1561651.png" alt=""></a>
                    </span>
                    <span class="industry-affirm" @click="affirm()">
                        <a href="#"><img src="../../images/21651561.png" alt=""></a>
                    </span>
                </div>

                <div class="industry-content">
                    <div class="industry-box">
                        <span v-for="(tabs,index) in tabBox" :key="index">
                            <span class="industry-active">{{ tabs.tabname }}
                                <i class="delete-industry" @click="deleteTab(tabs)"><img src="../../images/15616161.png" alt=""></i>
                            </span>
                        </span>
                    </div>
                    <i class="num-industr">(已选{{tabCount}}/3)</i>
                </div>
                <div class="tab-box">
                    <ul class="tab-list">
                        <li v-for="(list, index) in option" :key="index" @click="changeIndex(index)" :class="{'switchClass':activeIndex === index}"> {{list.name}}</li>
                    </ul>
                    <ul class="tab-item" v-for="(items, index) in tabData" :key="index" v-show="index===activeIndex">
                        <li v-for="(item, index) in items" :key="index" @click="addition(item,index)" :class="{'tabActive':tabIndex === item}">
                            {{item.tabname}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Confirm, XButton } from 'vux'
export default {
    components: {
        Confirm,
        XButton,
    },
    data() {
        return {
            activeIndex: 0,
            tabIndex: 0,
            editForm: true,
            industry: false,
            SexMan: true,
            SexWoman: false,
            inputWarn1: false,
            inputWarn2: false,
            inputWarn3: false,
            inputLeast1: false,
            inputLeast2: false,
            inputLeast3: false,
            inputLeast4: false,
            inputLeast5: false,
            weuiDialog: false,  //单选框
            show: false,   //多选弹出框
            formTab: [],   //input选中的标签
            tabBox: [],    //tab页选中的标签
            option: [{ name: '选项1' }, { name: '选项2' }, { name: '选项3' }, { name: '选项4' }, { name: '选项5' }, { name: '选项6' }, { name: '选项2' }, { name: '选项3' }, { name: '选项4' }, { name: '选项5' }],
            tabData: [
                [{ tabname: '标签1', }, { tabname: '标签12', }, { tabname: '好吗好的15', }, { tabname: '大叔大婶多', }, { tabname: '啊啊撒1啊撒', }, { tabname: '标签1', }, { tabname: '标签12', }, { tabname: '好吗好的15', }, { tabname: '大叔大婶多', }, { tabname: '啊啊撒1啊撒', },],
                [{ tabname: '标签2', }, { tabname: '标签13', }, { tabname: '好吗好的125', }, { tabname: '大叔大婶2多', }, { tabname: '啊啊5撒啊撒', }],
                [{ tabname: '标签33', }, { tabname: '标签314', }, { tabname: '好吗好的15223', }, { tabname: '大叔大婶45多', }, { tabname: '大叔大婶s423多', }],
                [{ tabname: '标签13', }, { tabname: '标签134', }, { tabname: '好吗好的15323', }, { tabname: '大叔大婶46多', }, { tabname: '大叔大婶s42多', }],
                [{ tabname: '标签23', }, { tabname: '标签414', }, { tabname: '好吗好的15343', }, { tabname: '大叔大婶47多', }, { tabname: '大叔大婶s344多', }],

            ],
        }
    },
    mounted() {
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

    methods: {
        onPhone() {
            /* 手机 */
            /*  var Xinput = document.getElementsByClassName('Xinput') */
            if (this.$refs.Phone.value === '') {
                this.inputWarn2 = !false;
                //console.log('手机为空')
                return false;
            }
            if (!this.$refs.Phone.value.match(/(^1[3|5|8][0-9]{9}$)/)) {
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
            if (this.$refs.Email.value === '') {
                this.inputWarn3 = !false;
                //console.log('邮箱为空')
                return false;
            }
            if (!this.$refs.Email.value.match(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/)) {
                this.inputWarn3 = !false;
                //console.log('邮箱号码错误')
                return false;
            } else {
                this.inputWarn3 = false;
                //console.log('邮箱号码正确')
                return false;
            }
        },
        onLeast1() {
            if (this.$refs.Least1.value === '') {
                this.inputLeast1 = !false;
                return false;
            } else {
                this.inputLeast1 = false;
                return false;
            }
        },
        onLeast2() {
            if (this.$refs.Least2.value === '') {
                this.inputLeast2 = !false;
                return false;
            } else {
                this.inputLeast2 = false;
                return false;
            }
        },
        onLeast3() {
            if (this.$refs.Least3.value === '') {
                this.inputLeast3 = !false;
                return false;
            } else {
                this.inputLeast3 = false;
                return false;
            }
        },
        onLeast4() {
            if (this.formTab.length === 0) {
                this.inputLeast4 = !false;
                //console.log('空')
                console.log(this.formTab.length)
                return false;
            } else {
                this.inputLeast4 = false;
                console.log(this.formTab.length)
                //console.log('不空')
                return false;
            }
        },
        onLeast5() {
            if (this.$refs.Least5.value === '') {
                this.inputLeast5 = !false;
                //console.log('空')
                return false;
            } else {
                this.inputLeast5 = false;
                //console.log('不空')
                return false;
            }
        },

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
            this.onPhone();
            this.onEmail();
            this.onLeast1();
            this.onLeast2();
            this.onLeast3();
            this.onLeast4();
            this.onLeast5();
            if (this.inputWarn2 === !false || this.inputWarn3 === !false || this.inputLeast1 === !false || this.inputLeast2 === !false || this.inputLeast3 === !false || this.inputLeast4 === !false || this.inputLeast5 === !false) {
                //alert('请检查输入是否正确')
                this.weuiDialog = !false;
                return false;
            }/*  else {
                alert('成功')
                return false;
            } */
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
                //console.log(this.tabBox[i].tabname)
                if (this.tabBox[i].tabname === item.tabname) {
                    ifHave = true;
                }
            }
            if (this.tabBox.length === 3) {
                //alert('不能超过三个')
                return false;
            }
            if (!ifHave) {
                let newName = { tabname: item.tabname }
                this.tabBox.push(newName);
            }
            this.tabIndex = item
        },
        deleteTab(tabs) {
            let index = this.tabBox.indexOf(tabs)
            this.tabBox.splice(index, 1);
        },
        affirm() {
            this.formTab = [];
            for (let i = 0; i < this.tabBox.length; i++) {
                let newName = (this.tabBox[i].tabname)
                this.formTab.push(newName);
                //console.log(this.formTab.length)
            }
            this.formTab.join(' ');

            this.onLeast4()
            this.onCancel()
        },
        onCancel() {
            //console.log('on cancel')
            if (this.industry == true) {
                this.industry = false;
                this.editForm = !false;
            }
        },
        onConfirm() {
            //console.log('on confirm')
            this.affirm()
        },
    },
    computed: {
        tabCount(tabs) {
            return this.tabBox.filter((num) => {
                return !num.tabs
            }).length
        },
        /*  industryValue() {
            let arr = [];
            let str = '';
            for (let i = 0; i < this.tabBox.length; i++) {
                let newName = (this.tabBox[i].tabname)
                arr.push(newName + ';')
                //console.log(arr)
            }
            str = arr.join(' ');
            return str;
         } */
    },
}
</script>
<style lang="scss" scoped>
@import '../../css/myForm'
</style>
