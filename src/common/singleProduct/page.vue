<template>
    <div class="singleProduct">
        <form action="">
            <input type="text" class="name" placeholder="请输入产品名称">
            <textarea name="" class="des" cols="60" rows="10" placeholder="请出入产品介绍"></textarea>
            <input type="text" class="price" placeholder="请输入产品价格">
            <input type="file" class="addPic" value="添加图片">
            <div class="btn">
                <template v-if="edit">
                    <button>编辑</button>
                </template>
                <button type="submit">保存</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            edit:"true"
        }
    }
}
</script>

 <style scoped> 
  input,textarea{
      display: block;
      margin:20px 0;
  }
  input{
      border: 1px solid #ccc;
      padding: 10px 20px;
  }
  input[type="file"]{
      border: none;
      padding: 5px 10px;
  }
  .btn button{ 
      background-color: #ccc;
      padding: 5px 20px;
      border-radius: 4px;
      margin: 0 20px;
  }
</style>
