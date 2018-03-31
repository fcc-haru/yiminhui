<template>
        <div class="formContainer">
            <form class="editForm">
                <div class="editItems">
                    <label for="name">店铺名称</label>
                    <div class="inputItem">
                        <input type="text" id="name">
                    </div>
                </div>
                <div class="editItems">
                    <label for="people">联系人</label>
                    <div class="inputItem">
                        <input type="text" id="people">
                    </div>
                </div>
                <div class="editItems">
                    <label for="wechat">微信号</label>
                    <div class="inputItem">
                        <input type="text" id="wechat">
                    </div>
                </div>
                <div class="editItems">
                    <label for="tel">联系电话</label>
                    <div class="inputItem">
                        <input type="tel" id="tel">
                    </div>
                </div>
                <div class="editItems">
                    <label for="adress">送货地址</label>
                    <div class="inputItem">
                        <input type="text" id="adress">
                    </div>
                </div>
                <div class="editItems">
                    <label for="name">所属区域</label>
                    <div class="inputItem">
                        <input type="radio" name="line">1号线
                        <input type="radio" name="line">2号线
                        <input type="radio" name="line">3号线
                        <input type="radio" name="line">4号线
                    </div>
                </div>
                <div class="submit">
                    <button type="submit">保 存</button>
                </div>
            </form>
        </div>
</template>

<script>
export default {
 
}
</script>

<style scoped>
    .formContainer{
        text-align: center;
        width: 800px;
        height: 600px;
        background: #ccc;
        padding: 50px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%)
    }
    .editForm{
       margin: 50px;
        

    }
    .editItems{
        width: 100%;
        height: 60px;
        line-height: 60px;
    }
    label{
        display: inline-block;
        width: 65px;
        text-align: right;
    }
    .inputItem{
        display: inline-block;
        text-align: left;
        margin:0 20px;
        width: 60%;
    }
    .inputItem input{
        padding: 10px;
        border-radius: 4px;
        width: 100%;
    }
    input[type="radio"]{
        width: 3%;
    }
    .submit{
        margin-top: 40px;
        text-align: center;
    }
    button[type="submit"]{
        padding: 10px 30px;
        text-align: center;
        font-weight: bold;
        font-size: 16px;
    }
</style>