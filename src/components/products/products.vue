<template>
  <div class="productContainer">
      <div class="header">
        <h4>在线产品:</h4>
        <span class="addNewproduct" @click="addNewproduct">添加新品</span>
      </div>
    
    <productInfo :editProduct="editProduct"></productInfo>
    <productInfo></productInfo>
    <productInfo></productInfo>
    <productInfo></productInfo>
  </div>
</template>

<script>
import ProductInfo from '../../common/productInfo'
import Vue from 'vue'

Vue.use(ProductInfo)
export default {
    methods:{
        addNewproduct(){
            this.$router.replace('/main/productManagement/addNewProduct');
        },
        editProduct(){
            this.$router.replace('/main/productManagement/editProduct');
        }
    
    }
}
</script>

<style scoped> 
    .productContainer{
        height: 100%;
        width: 100%;
        padding: 50px;
        overflow-y:auto
    }
    .header {
        overflow: hidden;
    }
    .header h4{
        float: left;
    }
    .header .addNewproduct{
        float: right;
        background-color: #ccc;
        padding: 5px 20px;
        border-radius: 4px;
    }
</style>
