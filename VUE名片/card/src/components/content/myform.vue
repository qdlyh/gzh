<template>
    <div>
        <div class="box">
            标签
            <div class="industry">
                <span class="active">{{ tabBox }}</span>
                <button class="destroy" @click='deleteTab(item)'>X</button>
                <i>{{tabNum}}</i>
            </div>
        </div>
    
        <div class="tab">
            <ul>
                <li class='ventor' v-for="(vendor, $index) in vendors" @click="changeIndex($index)" :class="{active: activeIndex == $index}">
                    <span>{{vendor.name}}</span>
                </li>
            </ul>
            <ul v-for="(items, $index) in tabData" v-show="$index==activeIndex" class="list-ranking">
                <li v-for="(item, $index) in items">
                    <span @click="add(item)">{{item.tabname}}</span>
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
            tabCount: 0,
            vendors: [{
                name: '选项1',

            }, {
                name: '选项2',

            }, {
                name: '选项3',

            }],
            tabData: [
                [{ tabId: 1, tabname: '岛上书店1' }, { tabId: 2, tabname: '孤独深处12' }, { tabId: 3, tabname: '好吗好的15' }, { tabId: 4, tabname: '大叔大婶多' }, { tabId: 5, tabname: '啊啊撒1啊撒' }, { tabId: 6, tabname: '啊啊撒啊2撒' }],
                [{ tabId: 1, tabname: '岛上书店31' }, { tabId: 2, tabname: '孤独深处121' }, { tabId: 3, tabname: '好吗好的125' }, { tabId: 4, tabname: '大叔大婶2多' }, { tabId: 5, tabname: '啊啊5撒啊撒' }, { tabId: 1, tabname: '啊啊3撒啊撒' }],
                [{ tabId: 1, tabname: '岛上书店41' }, { tabId: 2, tabname: '孤独深处121' }, { tabId: 3, tabname: '好吗好的153' }, { tabId: 4, tabname: '大叔大婶4多' }, { tabId: 5, tabname: '啊啊撒56啊撒' }, { tabId: 1, tabname: '啊啊5撒啊撒' }],
            ],
        }
    },
    methods: {
        changeIndex(item) {
            this.activeIndex = item
        },
        add(item) {
            this.tabCount = 0;
            let ifHave = false;
            for (let i = 0; i < this.tabBox.length; i++) {
                console.log(this.tabBox[i].tabname)
                if (this.tabBox[i].tabname == item.tabname) {
                    ifHave = true
                }
            }
            if (!ifHave) {
                let newName = { tabname: item.tabname }
                this.tabBox.push(newName);
            }
        },
        deleteTab(item) {
            var index = this.tabBox.indexOf(item)
            this.tabBox.splice(index, 1);
        }
    },
    //计算插入tab的数量
    computed: {
        tabNum() {
            return this.tabBox.filter((num)=> {
                return !num.item
            }).length
        }
    }
}
</script>
<style lang="scss" scoped>
.active {
    background: #369;
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
</style>