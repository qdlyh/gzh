<template>
    <div>
        <div class="box">
            标签<br/>
            <button @click="cancel()">取消</button><br/>

            <button @click="affirm()">确认</button>
            <div v-for="item in formTab">
                <span>{{ item.tabname }};</span>
            </div>

            <div class="industry">
                <span v-for="tabs in tabBox">
                    <span class="active">{{ tabs.tabname }}
                        <span @click="deleteTab(tabs)">x</span>
                    </span>
                </span>
                <i>{{tabCount}}</i>
            </div>
        </div>

        <div class="tab">
            <ul>
                <li class='ventor' v-for="(vendor, $index) in vendors" @click="changeIndex($index)" :class="{active: activeIndex === $index,'switchClass':activeIndex === $index}">
                    <span>{{vendor.name}}</span>
                </li>
            </ul>
            <ul v-for="(items, $index) in tabData" v-show="$index===activeIndex" class="list-ranking">
                <li v-for="(item, $index) in items">
                    <span @click="add(item,$index)" :class="[item.checked==true?'text-success':'text-successs']">{{item.tabname}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeIndex: 0,
            tabBox: [],
            formTab: [],
            vendors: [{
                name: '选项1',
            }, {
                name: '选项2',
            }, {
                name: '选项3',
            }],
            tabData: [
                [{ tabname: '标签1', checked: false }, { tabname: '标签12', checked: false }, { tabname: '好吗好的15', checked: false }, { tabname: '大叔大婶多', checked: false }, { tabname: '啊啊撒1啊撒', checked: false }],
                [{ tabname: '标签2', checked: false }, { tabname: '标签13', checked: false }, { tabname: '好吗好的125', checked: false }, { tabname: '大叔大婶2多', checked: false }, { tabname: '啊啊5撒啊撒', checked: false }],
                [{ tabname: '标签3', checked: false }, { tabname: '标签14', checked: false }, { tabname: '好吗好的153', checked: false }, { tabname: '大叔大婶4多', checked: false }, { tabname: '啊啊撒56啊撒', checked: false }],
            ],
        }
    },
    methods: {
        changeIndex(index) {
            this.activeIndex = index
        },
        add(item, $index) {
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
                let newName = { tabname: item.tabname, checked: false }
                this.tabBox.push(newName);
            }
            //this.tabBox[$index].checked = true;

        },
        deleteTab(i) {
            var index = this.tabBox.indexOf(i)
            this.tabBox.splice(index, 1);
        },

        affirm() {
            this.formTab = [];
            for (let i = 0, j = this.tabBox.length; i < j; i++) {
                let newName = { tabname: this.tabBox[i].tabname }
                this.formTab.push(newName);
            }
        }
    },
    //计算插入tab的数量
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
.affirm {
    width: 200px;
    height: 200px;
    border: 1px solid #000;
}

.black {
    color: #000;
}

.text-success {
    color: #369;
}

.text-successs {
    color: #ff0000;
}

.itemTab {
    color: #369;
}

.active {
    background: #000;
    margin: 15px;
    color: #fff;
}

.box {
    margin: 0 auto;
    text-align: center;
}

.industry {
    width: 500px;
    height: 500px;
    margin: 0 auto;
    border: 1px solid #000;
    text-align: center;
    margin-top: 10%;
}

.tab {
    text-align: center;
}

.ventor {
    display: inline-block;
    margin-right: 10px;
    padding: 5px;
    background: #369;
}

.switchClass {
    background: #963;
}
</style>
