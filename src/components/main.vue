<template>
    <div class="mainContainer">
        <div class="title">
            <span>亿民惠食品厂</span>
        </div>
        <div class="content">
            <div class="sideBar">
                <div @click="linkTest('/main/customerManagement')"><span class="item">客户管理</span></div>
                <div @click="linkTest('/main/orderManagement')"><span class="item">订单管理</span></div>
                <div @click="linkTest('/main/productManagement')"><span class="item">产品管理</span></div>
                <div @click="linkTest('/main/DataAnalysis')"><span class="item">数据分析</span></div>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        linkTest(url){
             this.$router.replace(url);
        }
    }
}
</script>

<style scoped>
.mainContainer{
    height:100%;
    min-width: 990px;
}
.title{
    height:10%;
    width:100%;
    line-height:1;
    z-index:999;
    font-size:30px;
    background-color:#eee;
    display:flex;
    align-items:center;    
    -webkit-align-items:center;
}
.content{
    height:90%;
    display: flex;
}
.sideBar{
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    width:10%;
    height:100%;
}
.sideBar div{
    height:24%;
    background-color:#ccc;
    display:flex;
    align-items:center;    
    -webkit-align-items:center;
}
.sideBar div .item{
    flex-grow:1;
    text-align:center;
}
router-view{
    flex: 1;
}
</style>