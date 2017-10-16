<template>
    <div>
        <div class="myform" v-for="(item, index) in listData" :key="index">
            <div id="edit-page" v-show="editForm">
                <div class="page-top">
                    <span>
                        <router-link to="/myCard"><img src="../../images/1561651.png" alt=""></router-link>
                    </span>
                </div>
                <form action="api/con/move/update" method="post" enctype="multipart/form-data">
                    <div class="edit-form">
                        <input type="text" name="id" v-model="item.id" hidden>
                        <input type="text" name="openId" v-model="item.openId" hidden>
                        <div class="company company-center">
                            <x-input name="company" @on-blur="onLeast()" ref="Least" v-model="item.company" placeholder="请输入您的公司名字" :show-clear="false" :required="true" :min="5" :max="20"></x-input>
                        </div>
                        <div class="file-box">
                            <img id="file-img" name="picture" :src="'api/image/'+item.picture">
                            <input id="file" name="file" type="file">
                            <input type="text" name="oldImg" :value="item.picture" hidden>
                        </div>
                        <div class="user-name">
                            <div style="margin-top:20px;">
                                <x-input name="name" v-model="item.name" @on-blur="onLeast2()" ref="Least2" placeholder="请输入您的名字" :show-clear="false" :required="true" :min="2" :max="6"></x-input>
                            </div>
                            <div>
                                <x-input name="department" v-model="item.department" @on-blur="onLeast3()" ref="Least3" placeholder="请输入您的职位" :show-clear="false" :required="true" :min="2" :max="6"></x-input>
                            </div>
                        </div>
                        <div class="user-sex">
                            <i v-if="item.sex===1"><img src="../../images/141615616.png" alt=""></i>
                            <i v-else><img src="../../images/1651651.png" alt=""></i>
                            <label><input ref="man" type="radio" name="sex" value="1" :checked="item.sex" @change="chooseSex">
                                <i></i>男</label>
                            <label><input ref="woman" type="radio" name="sex" value="0" :checked="!item.sex" @change="chooseSex">
                                <i></i>女</label>
                        </div>
                        <div class="user-message">
                            <div>
                                <i><img src="../../images/1561561651.png" alt=""></i>
                                <x-input name="telephone" v-model="item.telephone" @on-blur="onLeast4()" ref="Least4" placeholder="请输入手机号码" :show-clear="false" :required="true" keyboard="number" is-type="china-mobile"></x-input>
                            </div>
                            <div>
                                <i><img src="../../images/41651651.png" alt=""></i>
                                <x-input v-model="item.fixedLine" name="fixedLine" :show-clear="false" :min="7" :max="15" placeholder="请输入您的座机号码"></x-input>
                            </div>
                            <div>
                                <i><img src="../../images/561561651.png" alt=""></i>
                                <x-input name="email" v-model="item.email" placeholder="请输入邮箱地址" @on-blur="onLeast5()" ref="Least5" :show-clear="false" :required="true" is-type="email"></x-input>

                            </div>
                            <div>
                                <i><img src="../../images/11651651.png" alt=""></i>
                                <x-input v-model="item.net" name="net" :show-clear="false" placeholder="请输入您的公司官方网址"></x-input>
                            </div>
                            <div @click="goIndustry()">
                                <i><img src="../../images/165165165.png" alt=""></i>
                                <input @blur="industryLeast()" v-model="industryValue" type="text" placeholder="点击选择公司主营业务">
                                <span class="WarnIcon" v-show="inputLeast"></span>
                            </div>
                            <div>
                                <i><img src="../../images/15165161.png" alt=""></i>
                                <x-input name="address" v-model="item.address" placeholder="请输入公司地址" @on-blur="onLeast6()" ref="Least6" :show-clear="false" :required="true" :min="4" :max="30"></x-input>
                            </div>
                        </div>
                    </div>
                </form>

                <div class="btn-green" @click="submit()">
                    <x-button type="primary">
                        <p>完成</p>
                    </x-button>
                </div>

                <transition name="fade">
                    <div class="weui-box" v-show="weuiDialog">
                        <div class="weui-mask"></div>
                        <div class="weui-dialog">
                            <div class="weui-dialog__hd">
                                <strong>信息不完整</strong>
                            </div>
                            <div class="weui-dialog__bd">
                                <p>请填写您的基本信息</p>
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
            inputLeast: false,
            weuiDialog: false,  //单选框
            submitTrue: false,
            submitFalse: false,
            succeed: false,
            succeed2: false,
            succeed3: false,
            succeed4: false,
            succeed5: false,
            succeed6: false,
            listData: [],
            scopesId: [],    //存放选中主营的ID
            //tabBox: [],
            //formTab: [],   //input选中的标签
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
        function readFile() {
            var $fileImg = document.getElementById('file-img')
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
        this.$http({
            method: 'get',
            url: 'api/con/move',
            params: {
                openId: this.$parent.wxOpenId
            }
        })
            .then(response => {
                //console.log(response.data);
                //console.log('form成功');
                this.listData = response.data
                //console.log(this.listData)
            })
            .catch(error => {
                console.log(error);
                console.log('网络错误，不能访问');
            })

        // this.$http.get('api/con/scope?openId=' + this.$route.params.id)
        this.$http({
            method: 'get',
            url: 'api/con/scope',
            params: {
                openId: this.$parent.wxOpenId
            }
        })
            .then(response => {
                //console.log('tab成功');
                this.option = response.data
            })
            .catch(error => {
                console.log(error);
                console.log('网络错误，不能访问');
            })
        // this.$http.get('api/con/scope/allChild?openId=' + this.$route.params.id)
        this.$http({
            method: 'get',
            url: 'api/con/scope/allChild',
            params: {
                openId: this.$parent.wxOpenId
            }
        })
            .then(response => {
                //console.log('tabs成功');
                this.tabData = response.data
            })
            .catch(error => {
                console.log(error);
                console.log('网络错误，不能访问');
            })
    },

    methods: {
        goIndustry() {
            if (this.editForm === true) {
                this.editForm = false
                this.industry = !false;
            }
        },

        chooseSex() {
            if (!this.listData[0].sex === true) {
                this.listData[0].sex = 1;
                //console.log(this.listData[0].sex)
            } else {
                this.listData[0].sex = 0;
                //console.log(this.listData[0].sex)
            }
        },

        onLeast() {
            for (let i = 0; i < this.$refs.Least.length; i++) {
                if (!this.$refs.Least[i].valid) {
                    //console.log('公司错误')
                    //console.log(this.$refs.Least[i].valid)
                    this.succeed = false;
                    return false;
                } else {
                    //console.log('公司正确')
                    //console.log(this.$refs.Least[i].valid)
                    this.succeed = !false;
                    return false;
                }
            }
        },
        onLeast2() {
            for (let i = 0; i < this.$refs.Least2.length; i++) {
                if (!this.$refs.Least[i].valid) {
                    //console.log('名字错误')
                    //console.log(this.$refs.Least2[i].valid)
                    this.succeed2 = false;
                    return false;
                } else {
                    //console.log('名字正确')
                    //console.log(this.$refs.Least2[i].valid)
                    this.succeed2 = !false;
                    return false;
                }
            }
        },
        onLeast3() {
            for (let i = 0; i < this.$refs.Least3.length; i++) {
                if (!this.$refs.Least3[i].valid) {
                    //console.log('职业错误')
                    //console.log(this.$refs.Least3[i].valid)
                    this.succeed3 = false;
                    return false;
                } else {
                    //console.log('职业正确')
                    //console.log(this.$refs.Least3[i].valid)
                    this.succeed3 = !false;
                    return false;
                }
            }
        },
        onLeast4() {
            for (let i = 0; i < this.$refs.Least4.length; i++) {
                if (!this.$refs.Least4[i].valid) {
                    //console.log('手机错误')
                    //console.log(this.$refs.Least4[i].valid)
                    this.succeed4 = false;
                    return false;
                } else {
                    //console.log('手机正确')
                    //console.log(this.$refs.Least4[i].valid)
                    this.succeed4 = !false;
                    return false;
                }
            }
        },
        onLeast5() {
            for (let i = 0; i < this.$refs.Least5.length; i++) {
                if (!this.$refs.Least5[i].valid) {
                    //console.log('邮箱错误')
                    //console.log(this.$refs.Least5[i].valid)
                    this.succeed5 = false;
                    return false;
                } else {
                    //console.log('邮箱正确')
                    //console.log(this.$refs.Least5[i].valid)
                    this.succeed5 = !false;
                    return false;
                }
            }
        },
        onLeast6() {
            for (let i = 0; i < this.$refs.Least6.length; i++) {
                if (!this.$refs.Least6[i].valid) {
                    //console.log('地址错误')
                    //console.log(this.$refs.Least6[i].valid)
                    this.succeed6 = false;
                    return false;
                } else {
                    //console.log('地址正确')
                    //console.log(this.$refs.Least6[i].valid)
                    this.succeed6 = !false;
                    return false;
                }
            }
        },
        industryLeast() {
            if (this.industryValue.length === 0) {
                this.inputLeast = !false;
                //console.log('空')
                //console.log(this.industryValue.length)
                return false;
            } else {
                this.inputLeast = false;
                //console.log(this.industryValue.length)
                //console.log('不空')
                return false;
            }
        },

        submit() {
            let arr = [];
            let scopesId = '';
            for (let i = 0; i < this.tabBox.length; i++) {
                let newName = (this.tabBox[i].id)
                arr.push(newName)
                //console.log(arr)
            }
            scopesId = arr.join(',');
            this.onLeast();
            this.onLeast2();
            this.onLeast3();
            this.onLeast4();
            this.onLeast5();
            this.onLeast6();
            this.industryLeast();
            if (this.succeed === false || this.succeed2 === false || this.succeed3 === false || this.succeed4 === false || this.succeed5 === false || this.succeed6 === false || this.inputLeast === !false) {
                //alert('失败')
                this.weuiDialog = !false;
                return false;
            } else {
                //alert('成功')
                let formData = new FormData();
                formData.append('id', this.listData[0].id);
                formData.append('openId', this.listData[0].openId);
                formData.append('company', this.listData[0].company);
                formData.append("file", document.getElementById('file').files[0]);
                formData.append('oldImg', this.listData[0].picture);
                formData.append('name', this.listData[0].name);
                formData.append('department', this.listData[0].department);
                formData.append('sex', this.listData[0].sex);
                formData.append('telephone', this.listData[0].telephone);
                formData.append('fixedLine', this.listData[0].fixedLine);
                formData.append('email', this.listData[0].email);
                //formData.append('scope', arr);
                formData.append('scope', scopesId);
                formData.append('net', this.listData[0].net);
                formData.append('address', this.listData[0].address);
                //console.log(formData)
                this.$http({
                    method: 'post',
                    url: 'api/con/move/update',
                    headers: { 'Content-Type': 'multipart/form-data' },
                    data: formData,
                })
                    .then(response => {
                        console.log(response)
                        //console.log('post成功');
                    })
                    .catch(error => {
                        //console.log(error);
                        console.log('网络错误，不能访问');
                    })
                this.$router.push('/myCard')
                //this.$router.replace('/myCard')
                return false;
            }
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
                let newName = { title: item.title, id: item.id };
                this.tabBox.push(newName);
                //console.log(this.tabBox)
            }
            this.tabIndex = item
        },
        deleteTab(tabs) {
            let index = this.tabBox.indexOf(tabs)
            this.tabBox.splice(index, 1);
            //console.log(index)
            for (let i = 0; i < this.scopesId.length; i++) {
                console.log(this.scopesId[i].id)
                this.scopesId.splice(i, 1);
            }
        },
        affirm() {
            /*          this.formTab = [];
                     for (let i = 0; i < this.tabBox.length; i++) {
                         let newName = (this.tabBox[i].title)
                         this.formTab.push(newName);
                         //console.log(this.formTab.length)
                     } */
            if (this.industry === true) {
                this.industry = false;
                this.editForm = !false;
            }
            this.industryLeast();
            /*  this.onCancel() */
        },
    },
    computed: {
        tabCount(tabs) {
            return this.tabBox.filter((num) => {
                return !num.tabs
            }).length
        },
        //formTabs() {
        // let str = '';
        // return this.str = this.formTab.join('; ');
        //} 

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
        },
        //计算tabBox=scopes 
        tabBox() {
            if (!this.listData) return;
            return this.listData[0].scopes;
        }
    },
}
</script>
<style lang="scss" scoped>
@import '../../css/myForm'
</style>
