<template>
    <div id="container"> 
        <div id="title">亿民惠食品厂</div>
    <ul>
      <li><a href="">客户管理</a></li>
      <li><a href="">订单管理</a></li>
      <li><a href="">产品管理</a></li>
      <li><a href="">数据分析</a></li>
    </ul>
     </div> 
</template>


<script>
  export default {
    methods: {
     
    }
  }
</script>

<style>
#container{
    height: 100%;
    font-size: 30px;
    color:#333;
}
#title{
    width: 100%;
    height: 15%;
    display: inline-block;
    vertical-align: middle;
}
ul{
    width: 20%;
    height: 84%;
    text-align: center;
    margin:0;
    padding: 0;
}
li{
    width: 100%;
    height: 25%;
    list-style: none;
    border: 1px solid #ccc;
    margin-bottom: -1px;
     line-height: 150px; 
}
li a{
    display: inline-block;
    height: 100%;
    width: 100%;
    text-decoration: none;
}
</style>
