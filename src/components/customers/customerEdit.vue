<template>
   <div class="editContainer">
        <storeInfo></storeInfo>
   </div>   
</template>

<script>

import StoreInfo from '../../common/storeInfo'
import Vue from 'vue'

Vue.use(StoreInfo)
export default {
 
}
</script>

<style scoped>
    .editContainer{
        height: 100%;
        width: 100%;
        position: relative;
    }
</style>