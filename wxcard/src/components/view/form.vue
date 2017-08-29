<template>
    <div>
        <div class="box">
            <!--  <button @click.native="warnAlert()">取消</button><br/>
             -->
            <div class="img">
                <input type="checkbox" v-model="show"></input>
            </div>
            <div>
                <confirm v-model="show" :title="('信息还没保存')" @on-cancel="onCancel" @on-confirm="onConfirm">
                    <p style="text-align:center;">{{ ('是否需要保存信息') }}</p>
                </confirm>
            </div>
            <button @click="affirm()">确认</button>
            <div v-for="(item,index) in formTab" :key="index">
                <span>{{ item.tabname }};</span>
            </div>

            <div class="industry">
                <span v-for="(tabs,index) in tabBox" :key="index">
                    <span class="active">{{ tabs.tabname }}
                        <span @click="deleteTab(tabs)">x</span>
                    </span>
                </span>
                <i>{{tabCount}}</i>
            </div>
        </div>

        <div class="tab">
            <ul>
                <li class='ventor' v-for="(t, index) in  option" :key="index" @click="changeIndex(index)" :class="{'switchClass':activeIndex === index}">
                    <span>{{t.name}}</span>
                </li>
            </ul>
            <ul v-for="(items, index) in tabData" :key="index" v-show="index===activeIndex">
                <li v-for="(item, index) in items" :key="index" @click="add(item,index)" :class="{'tabActive':tabIndex === index}">
                    <span>{{item.tabname}}</span>
                </li>
            </ul>
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
            tabIndex:0,
            show: false,
            tabBox: [],
            formTab: [],
            option: [{ name: '选项1' }, { name: '选项2' }, { name: '选项3' }],
            tabData: [
                [{ tabname: '标签1',  }, { tabname: '标签12',  }, { tabname: '好吗好的15',  }, { tabname: '大叔大婶多',  }, { tabname: '啊啊撒1啊撒',  }],
                [{ tabname: '标签2',  }, { tabname: '标签13',  }, { tabname: '好吗好的125',  }, { tabname: '大叔大婶2多',  }, { tabname: '啊啊5撒啊撒',  }],
                [{ tabname: '标签3',  }, { tabname: '标签14',  }, { tabname: '好吗好的153',  }, { tabname: '大叔大婶4多',  }, { tabname: '啊啊撒56啊撒',  }],
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
                let newName = { tabname: item.tabname,  }
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
.on{
    color:red;
}
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
    width: 100px;
    height: 20px;
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
    color: #fff;
}
.tabActive{
    color: #963;
}
</style>