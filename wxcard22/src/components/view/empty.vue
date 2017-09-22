<template>
    <div>
        <div class="page-top">

        </div>
        <div class="empty">
            <img src="../../images/41485156.png" alt="">
            <p>尚未填写您的名片信息</p>
            <div class="btn-blue">
                <router-link to='/myForm'>完善资料</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {

        }
    },
    /*     created() {
            axios.get('')
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                    alert('网络错误，不能访问');
                })
        }, */
}
</script>
<style lang="scss" scoped>
.empty {
    img {
        display: block;
        width: 425px;
        margin: 0 auto;
        margin-top: 100px;
        margin-bottom: 100px;
    }
    p {
        text-align: center;
        font-family: 'pingfang sc regular';
        font-size: 28px;
        color: #D3D3D3;
    }
}
</style>


