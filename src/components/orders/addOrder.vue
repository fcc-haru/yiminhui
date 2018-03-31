
<template>
    <div class="addOrderContainer">
      <h3>未下单用户列表</h3>
      <customerInfo></customerInfo>
    </div>
</template>

<script>
import CustomerInfo from '../../common/customerInfo'
import Vue from 'vue'

Vue.use(CustomerInfo);
export default {
    data:function(){
      return {
        showDel:"false"
      }
    },
    methods:{
        addOrder(){
            this.$router.replace('/main/orderManagement/addOrder');
        }
    }
}
</script>

<style scoped>
.addOrderContainer{
  height: 100%;
  width: 100%;
  padding: 100px 50px;
  position: relative;
}
</style>