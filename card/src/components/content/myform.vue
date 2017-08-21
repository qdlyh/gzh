<template>
    <div>
        <div class="box">
            标签<br/>
            <button @click="cancel()">取消</button><br/>

            <button @click="affirm(item)">确认</button>
            <div v-for="item in formTab">
               <span>{{ item.tabname }};</span>
            </div>


            <div class="industry">
                <span v-for="tabs in tabBox">
                <span class="active">{{ tabs.tabname }}<span @click="deleteTab(tabs)">x</span></span>
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
                    <span @click="add(item)" class="black">{{item.tabname}}</span>
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
            formTab:[],
            vendors: [{
                name: '选项1',
            }, {
                name: '选项2',
            }, {
                name: '选项3',
            }],
            tabData: [
                [{ tabname: '标签1' }, { tabname: '标签12' }, {  tabname: '好吗好的15' }, {  tabname: '大叔大婶多' }, { tabname: '啊啊撒1啊撒' }], 
                [{ tabname: '标签2' }, { tabname: '标签13' }, { tabname: '好吗好的125' }, { tabname: '大叔大婶2多' }, { tabname: '啊啊5撒啊撒' }], 
                [{ tabname: '标签3' }, { tabname: '标签14' }, {  tabname: '好吗好的153' }, { tabname: '大叔大婶4多' }, { tabname: '啊啊撒56啊撒' }], 
            ],
        }
    },
    methods: {
        changeIndex(index) {
            this.activeIndex = index
        },
        add(item) {
            let ifHave = false;
            for (let i = 0; i < this.tabBox.length; i++) {
                //console.log(this.tabBox[i].tabname)
                if (this.tabBox[i].tabname === item.tabname) {
                    ifHave = true;
                }
            }
            if(this.tabBox.length === 3){
                alert('不能超过三个')
                return false;
            }
            if (!ifHave) {
                let newName = { tabname: item.tabname }
                this.tabBox.push(newName);
                //this.formTab.push(newName);
            }
        },
        deleteTab(item) {
            var index = this.tabBox.indexOf(item)
            this.tabBox.splice(index, 1);
            this.formTab.splice(index, 1);
        },
/*         cancel(){
            this.tabBox = []
        }, */
        affirm(item) {
            for (let i = 0; i < this.tabBox.length; i++) {
                console.log(this.tabBox[i].tabname)
           }
           console.log(item)
              if (this.tabBox.length!==0) {
                let newName = { tabname: item.tabname }
                this.formTab.push(newName);  
              }
        }
    },
    //计算插入tab的数量
    computed: {
        tabCount(tabs) {
            return this.tabBox.filter((num)=> {
                return !num.tabs
            }).length
        }
    }
}
</script>
<style lang="scss" scoped>
.affirm{
    width:200px;
    height:200px;
    border: 1px solid #000;
}
.black{
    color:#000;
}
.itemTab{
    color:#369;
}
.active{
    background:#000;
    margin:15px;
    color:#fff;
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
.switchClass{
    background:#963;
}
</style>
