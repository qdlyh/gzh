<template>
    <div>
        <div class="myform">
            <div class="myform-top">
                <span class="cancel">
                    <div class="cancel-warn">
                        <input type="checkbox" v-model="show"></input>
                    </div>
                    <div>
                        <confirm v-model="show" :title="('信息还没保存')" @on-cancel="onCancel" @on-confirm="onConfirm">
                            <p style="text-align:center;">{{ ('是否需要保存信息') }}</p>
                        </confirm>
                    </div>
                    <a href="#"><img src="../../images/1561651.png" alt=""></a>
                </span>
                <span class="affirm" @click="affirm()">
                    <a href="#"><img src="../../images/21651561.png" alt=""></a>
                </span>
            </div>
            <!-- <button @click="affirm()">确认</button> -->
            <!-- 列表 -->
            <div v-for="(item,index) in formTab" :key="index">
                <span>{{ item.tabname }};</span>
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
                    <li v-for="(item, index) in items" :key="index" @click="add(item,index)" :class="{'tabActive':tabIndex === index}">
                        {{item.tabname}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { Confirm } from 'vux'
export default {
    components: {
        Confirm,
    },
    data() {
        return {
            activeIndex: 0,
            tabIndex: 0,
            show: false,
            tabBox: [],
            formTab: [],
            option: [{ name: '选项1' }, { name: '选项2' }, { name: '选项3' }, { name: '选项4' }, { name: '选项5' }],
            tabData: [
                [{ tabname: '标签1', }, { tabname: '标签12', }, { tabname: '好吗好的15', }, { tabname: '大叔大婶多', }, { tabname: '啊啊撒1啊撒', }],
                [{ tabname: '标签2', }, { tabname: '标签13', }, { tabname: '好吗好的125', }, { tabname: '大叔大婶2多', }, { tabname: '啊啊5撒啊撒', }],
                [{ tabname: '标签33', }, { tabname: '标签314', }, { tabname: '好吗好的15223', }, { tabname: '大叔大婶45多', }, { tabname: '大叔大婶s423多', }],
                [{ tabname: '标签13', }, { tabname: '标签134', }, { tabname: '好吗好的15323', }, { tabname: '大叔大婶46多', }, { tabname: '大叔大婶s42多', }],
                [{ tabname: '标签23', }, { tabname: '标签414', }, { tabname: '好吗好的15343', }, { tabname: '大叔大婶47多', }, { tabname: '大叔大婶s344多', }],
            ],
        }
    },
    methods: {
        changeIndex(index) {
            this.activeIndex = index
        },
        add(item, index) {
            let ifHave = false;
            for (let i = 0; i < this.tabBox.length; i++) {
                console.log(this.tabBox[i].tabname)
                if (this.tabBox[i].tabname === item.tabname) {
                    ifHave = true;
                }
            }
            if (this.tabBox.length === 3) {
                alert('不能超过三个')
                return false;
            }

            if (!ifHave) {
                let newName = { tabname: item.tabname, }
                this.tabBox.push(newName);
            }
            this.tabIndex = index
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
        },
        onCancel() {
            console.log('on cancel')
        },
        onConfirm(msg) {
            console.log('on confirm')
            this.affirm()
        },
    },
    computed: {
        tabCount(tabs) {
            return this.tabBox.filter((num) => {
                return !num.tabs
            }).length
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../css/myForm'
</style>