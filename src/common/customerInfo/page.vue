<template>
    <div class="productInfo">
        <table>
            <colgroup>
                <col style="10%">
                <col style="10%">
                <col style="10%">
                <col style="10%">
                <col style="10%">
                <col style="10%">
                <col style="10%">
                <col style="10%">
            </colgroup>
            <thead>
                <tr>
                    <th>客户编号</th>
                    <th>店铺名称</th>
                    <th>联系人</th>
                    <th>微信号</th>
                    <th>联系电话</th>
                    <th>送货地址</th>
                    <th>所属区域</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>0001</td>
                    <td>李四的小铺</td>
                    <td>李四</td>
                    <td>lisi</td>
                    <td>13636467867</td>
                    <td>硚口区古田</td>
                    <td>1号线</td>
                    <td>
                        <template v-if="showDel">
                            <a href="#">删除</a> 
                            <span>/</span>
                        </template>
                        
                        <router-link to="customerManagement/customerDetail">详情</router-link>
                    </td>
                </tr>
                <tr>
                    <td>0002</td>
                    <td>王五早餐店</td>
                    <td>王五</td>
                    <td>[未绑定]</td>
                    <td>13636568787</td>
                    <td>东西湖田园</td>
                    <td>3号线</td>
                    <td>
                        <a href="#">删除</a> /
                        <a href="#">详情</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name:'productInfo',
    props:{
        
    },
    data: function(){
        return {
            showDel:"true"
        }
    },
    methods:{
        toEdit(){
            this.$router.replace('/main/customerManagement/customerEdit');
        }
    }
}
</script>

<style>
table{
    margin-top:15px;
    width: 100%;
    text-align: center;
}
th{
    background-color: #bbb;
}
th,td{
    border:1px solid #ccc;
    padding: 8px 10px;
}
.add{
    height: 30px;
    line-height: 30px;
    padding: 0 30px;
    float: right;
    background: #a3d6ea;
}
</style>