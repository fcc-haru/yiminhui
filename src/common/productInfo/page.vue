<template>
    <div class="productDetail">
        <div class="pic">
            <img src="{{}}" alt="">
        </div>
        <div class="des">
            <p class="title">河粉20斤</p>
            <p class="info">这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一
                段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这
                是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一
                段描述</p>
            <p class="price">¥20.00</p>
        </div>
        <div class="ope">
            <p class="del">删除</p>
            <p>编辑</p>
        </div>
    </div>
</template>

<script>
export default {
    // methoes:{
    //     editProduct(){
    //         this.$router.replace('/main/productManagement/editProduct');
    //     }
    // }
}
</script>

<style scoped> 
    .productDetail{
     border-bottom: 1px solid #ccc; 
     padding: 10px;  
     display: flex;
     margin-top: 20px;
     vertical-align: middle;
    }
    .pic{
        width: 100px;
        height: 100px;
        border: 1px solid #ccc;
    }
    .pic,.des,.ope{
        float: left;
    }
    .des{
        flex: 1;
        padding: 0 10px;
    }
    .des .title{
        font-weight: bold;
        font-size: 16px;
    }
    .des .info{
        margin:5px 0;
        color:#bbb;
    }
    .des .price{
        color:salmon;
        font-style: initial;
    }
    .ope{
        width: 100px;
        vertical-align: middle;
        text-align: center;
    }
    .ope p{
        background-color:#ccc;
        padding: 5px 15px;
        margin:15px 0;
        border-radius: 4px;
    }
</style>
