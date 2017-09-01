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
                        <input type="text" placeholder="请输入您的公司名字">
                    </div>
                    <div class="file-box">
                        <img id="file-img" src="../../images/logo.png">
                        <input id="file" type="file">
                    </div>
                    <div class="user-name">
                        <input v-model="Xinput1" type="text" placeholder="请输入您的名字">
                        <span v-show="inputWarn1"><img src="../../images/45561651.png" alt=""></span><br/>
                        <input type="text" placeholder="请输入您的职位">
                    </div>
                    <div class="user-sex" @click="chooseSex()">
                        <i><img src="../../images/141615616.png" alt=""></i>
                        <i><img src="../../images/1651651.png" alt=""></i>
                        <label><input class="nam" type="radio" name="sex" checked="checked">
                            <i></i>男</label>
                        <label><input class="woman" type="radio" name="sex">
                            <i></i>女</label>
                    </div>
                    <div class="user-message">
                        <div>
                            <i><img src="../../images/1561561651.png" alt=""></i>
                            <input @blur="submit()" v-model="Xinput2" type="text" placeholder="请输入您的手机号码">
                            <span v-show="inputWarn2"><img src="../../images/45561651.png" alt=""></span>
                        </div>
                        <div>
                            <i><img src="../../images/41651651.png" alt=""></i>
                            <input type="text" placeholder="请输入您的座机号码">
                        </div>
                        <div>
                            <i><img src="../../images/561561651.png" alt=""></i>
                            <input @blur="submit()" v-model="Xinput3" type="text" placeholder="请输入您的邮箱">
                            <span v-show="inputWarn3"><img src="../../images/45561651.png" alt=""></span>
                        </div>
                        <div>
                            <i><img src="../../images/11651651.png" alt=""></i>
                            <input type="text" placeholder="请输入您的公司官方网址">

                        </div>
                        <div @click="goIndustry()">
                            <i><img src="../../images/165165165.png" alt=""></i>
                            <!-- <span>x</span> -->
                            <div>
                                <ul class="edit-industry" v-for="(item,index) in formTab" :key="index">
                                    <li>{{ item.tabname }};</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <i><img src="../../images/15165161.png" alt=""></i>
                            <input @blur="submit()" v-model="Xinput4" type="text" placeholder="请输入公司地址">
                            <span v-show="inputWarn4"><img src="../../images/45561651.png" alt=""></span>
                        </div>
                    </div>
                </div>
                <div class="btn-green" @click="submit()">
                    <x-button type="primary">
                        <a href="#">完成</a>
                    </x-button>
                </div>
            </div>
            <div id="industry-page" v-show="industry">
                <div class="page-top">
                    <span class="industry-cancel">
                        <div class="cancel-warn">
                            <input type="checkbox" v-model="show"></input>
                        </div>
                        <div class="cancel-msg">
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
import { Confirm, XButton, Group, XInput } from 'vux'
export default {
    components: {
        Confirm,
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
            inputWarn1: false,
            inputWarn2: false,
            inputWarn3: false,
            inputWarn4: false,
            Xinput1: '',
            Xinput2: '',
            Xinput3: '',
            Xinput4: '',
            show: false,   //弹出框
            tabBox: [],
            formTab: [],
            option: [{ name: '选项1' }, { name: '选项2' }, { name: '选项3' }, { name: '选项4' }, { name: '选项5' }, { name: '选项6' }, { name: '选项2' }, { name: '选项3' }, { name: '选项4' }, { name: '选项5' }],
            tabData: [
                [{ tabname: '标签1', }, { tabname: '标签12', }, { tabname: '好吗好的15', }, { tabname: '大叔大婶多', }, { tabname: '啊啊撒1啊撒', }, { tabname: '标签1', }, { tabname: '标签12', }, { tabname: '好吗好的15', }, { tabname: '大叔大婶多', }, { tabname: '啊啊撒1啊撒', }],
                [{ tabname: '标签2', }, { tabname: '标签13', }, { tabname: '好吗好的125', }, { tabname: '大叔大婶2多', }, { tabname: '啊啊5撒啊撒', }],
                [{ tabname: '标签33', }, { tabname: '标签314', }, { tabname: '好吗好的15223', }, { tabname: '大叔大婶45多', }, { tabname: '大叔大婶s423多', }],
                [{ tabname: '标签13', }, { tabname: '标签134', }, { tabname: '好吗好的15323', }, { tabname: '大叔大婶46多', }, { tabname: '大叔大婶s42多', }],
                [{ tabname: '标签23', }, { tabname: '标签414', }, { tabname: '好吗好的15343', }, { tabname: '大叔大婶47多', }, { tabname: '大叔大婶s344多', }],

            ],
        }
    },
    methods: {
        submit() {
            /* 手机 */
            /*  var Xinput = document.getElementsByClassName('Xinput') */
            if (this.Xinput2 === '') {
                this.inputWarn2 = !false;
                console.log('手机为空')
                return false;
            }
            if (!this.Xinput2.match(/(^1[3|5|8][0-9]{9}$)/)) {
                this.inputWarn2 = !false;
                console.log('手机号码错误')
                return false;
            } else {
                this.inputWarn2 = false;
                console.log('手机号码正确')
                return false
            }
        },
        Xinput3() {
            if (this.Xinput3 === '') {
                this.inputWarn3 = !false;
                console.log('邮箱为空')
                return false;
            }
            if (!this.Xinput3.match(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/)) {
                this.inputWarn3 = !false;
                console.log('邮箱号码错误')
                return false;
            } else {
                this.inputWarn3 = false;
                console.log('邮箱号码正确')
            }
        },

        goIndustry() {
            if (this.editForm == true) {
                this.editForm = false
                this.industry = !false;
            }
        },
        chooseSex() {

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
                let newName = { tabname: item.tabname, }
                this.tabBox.push(newName);
            }
            this.tabIndex = item
        },
        deleteTab(tabs) {
            var index = this.tabBox.indexOf(tabs)
            this.tabBox.splice(index, 1);
        },
        affirm() {
            this.formTab = [];
            for (let i = 0; i < this.tabBox.length; i++) {
                let newName = { tabname: this.tabBox[i].tabname }
                this.formTab.push(newName);
            }
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
    }
}
</script>
<style lang="scss" scoped>
@import '../../css/myForm'
</style>