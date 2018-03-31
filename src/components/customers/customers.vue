<template>
    <div class="customerContainer">
        <form class="custForm">
            <div class="searchBar">
                <input type="text"><input type="submit" value="搜索" class="search">
            </div>
            <select name="" id="">
                <option selected="true" disabled>潜在客户</option>
                <option value="45">45</option>
                <option value="6546">6546</option>
                <option value="5468">5468</option>
                <option value="564">564</option>
            </select>
            <span class="add" @click="toEdit">添加</span>
        </form>
        <customerInfo></customerInfo>
    </div>
</template>

<script>
import CustomerInfo from '../../common/customerInfo'
import Vue from 'vue'

Vue.use(CustomerInfo);
export default {
    methods:{
        toEdit(){
            this.$router.replace('/main/customerManagement/customerEdit');
        }
    }
}
</script>

<style scoped>
.customerContainer{
    height: 100%;
    width: 100%;
    padding: 100px 50px;
}
.custForm{
    height: 30px;
}
.searchBar{
    display: inline-block;
    border:1px solid #ccc;
}
.searchBar input:first-of-type{
    padding: 5px;
    margin-top: 1px;
}
.search{
    height: 28px;
    padding: 5px 10px;
    background: #a3d6ea;
}
select{
    height: 100%;
    margin-left:50px;
}
</style>