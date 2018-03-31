<template>
    <div class="orderContainer">
      <div class="message">
        <span class="delMes">x</span>
        <span>提醒信息</span>
      </div>
      <div class="operate">
        <span @click="addOrder" class="addOrder">添加订单</span>
        <span class="download">导出订单列表</span>
      </div>
        <table id="ordeDetail">
            <colgroup>
                <col width="8%">
                <col width="9%">
                <col width="7%">
                <col width="7%">
                <col width="7%">
                <col width="7%">
                <col width="7%">
                <col width="7%">
                <col width="8%">
                <col width="8%">
                <col width="12%">
                <col width="7%">
            </colgroup>
            <tr>
              <td class="filterBar"></td>
              <td class="filterBar"><input placeholder="客户名称"></td>
              <td class="filterBar"></td>
              <td class="filterBar"></td>
              <td class="filterBar"></td>
              <td class="filterBar"></td>
              <td class="filterBar"></td>
              <td class="filterBar"><input placeholder="支付状态"></td>
              <td class="filterBar"><input ></td>
              <td class="filterBar"><input ></td>
              <td class="filterBar"></td>
              <td class="filterBar"><input placeholder="所属区域"></td>
            </tr> 
            <tr class="orderTitle">
                <td>订单编号</td>
                <td>店铺名称</td>
                <td>
                  <span>河粉</span><br>
                  <span>(20斤装)</span>
                </td>
                <td>
                   <span>豆丝</span><br>
                  <span>(20斤装)</span>
                </td>
                <td>
                   <span>凉皮</span><br>
                  <span>(20斤装)</span>
                </td>
                <td>
                   <span>宽粉</span><br>
                  <span>(20斤装)</span>
                </td>
                <td>金额</td>
                <td>支付状态</td>
                <td>下单时间</td>
                <td>配送时间</td>
                <td>送货地址</td>
                <td>所属区域</td>
            </tr>
            <tr>
                <td>0002</td>
                <td>王五早餐店</td>
                <td>1</td>
                <td>0</td>
                <td>2</td>
                <td>0</td>
                <td>¥60</td>
                <td>已付款</td>
                <td>2018.6.10 12:33</td>
                <td>2018.6.10 18:33</td>
                <td>硚口区古田四路</td>
                <td>2号线</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    methods:{
        addOrder(){
            this.$router.replace('/main/orderManagement/addOrder');
        }
    }
}
</script>

<style scoped>
.orderContainer{
  height: 100%;
  width: 100%;
  padding: 100px 50px;
  position: relative;
}
.operate{
  width: 100%;
  overflow: hidden;
  text-align: center;
  margin-bottom: 20px;
}
.operate span{
  float: right;
  background: #ccc;
  padding: 5px 10px;
  border-radius: 4px;
  margin-left:10px;

}
.message{
  display: inline-block;
  width: 200px;
  height: 50px;
  position: absolute;
  top: 0;
  right: 0px;
  background: #ccc;
  padding: 5px;
}
.message .delMes{
  position: absolute;
  top: 5px;
  right: 5px;
  border:1px solid #888;
  width: 15px;
  height: 15px;
  font-size: 23px;
  line-height: 10px;
  text-align: center;
  font-family:consolas;
  cursor: pointer;
}
.op span{
  float:right;
}
td{
  border:1px solid #ccc;
  text-align: center;
}
.filterBar{
  border:none;
  margin-bottom: 10px;
  padding: 0;
}
.filterBar input{
  width: 90%;
  border:1px solid #ccc;
  padding: 5px 0 5px 2px;
  margin-bottom: 5px;
  
}
#ordeDetail .orderTitle{
  background-color:#bbb;
  font-weight:bold;
}
</style>
