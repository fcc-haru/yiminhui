<template>
  <div class="container">添加新品
    <singleProduct></singleProduct>
  </div>
</template>

<script>
import SingleProduct from '../../common/singleProduct'
import Vue from 'vue'

Vue.use(SingleProduct)
export default {

}
</script>

<style>
  .container{
    width: 100%;
    height: 100%;
    padding: 100px;
  }
</style>
