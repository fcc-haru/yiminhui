<template>
  <div class="container">
      <div class="chartItem">
          <span class="title">销售额</span>
          <div id="myChart1" :style="{width:'600px',height:'400px'}"></div>
      </div>
       <div class="chartItem">
           <span class="title">销售占比</span>
          <div id="myChart2" :style="{width:'600px',height:'400px'}"></div>
      </div>
  </div>
</template>

<script>
export default {
    mounted(){
        this.drawLine1();
        this.drawLine2();
    },
    methods: {
        drawLine1(){
            // 基于准备好的dom，初始化echarts实例
            let myChart1=this.$echarts.init(document.getElementById('myChart1'))
            // 绘制图表
            myChart1.setOption({
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                xAxis: {
                    type: 'category',
                    data: ["4.1","4.2","4.3","4.4","4.5","4.6"]
                },
                yAxis: {
                    type: 'value',
                    // splitLine: false
                },
                series: [{
                    name: '销量',
                    data: [5, 20, 36, 10, 10, 20],
                    type: 'line',
                    itemStyle : { normal:
                                    {label : {
                                        show: true,
                                        formatter: '{b}w'
                                        },
                                }
                    }, 
                }]
            });
        },
        drawLine2(){
            // 基于准备好的dom，初始化echarts实例
            let myChart2=this.$echarts.init(document.getElementById('myChart2'))
            // 绘制图表
            myChart2.setOption({
                tooltip: {},
                series : [
                    {
                        name: '销售占比',
                        type: 'pie',
                        radius: '55%',
                        data:[
                            {value:235, name:'豆丝'},
                            {value:274, name:'凉皮'},
                            {value:310, name:'河粉'},
                            {value:335, name:'宽粉'}
                        ],
                        itemStyle : { 
                             emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            },
                            normal:{ 
                                label:{ 
                                   show: true, 
                                   formatter: '{b}({d}%)' 
                                }, 
                                labelLine :{show:true}
                            } 
                        }, 
                    }
                ]
            });
        }
    }
}
</script>

<style>
.container{
    width: 100%;
    height: 100%;
    padding: 50px;
    overflow-y: auto;
}
.chartItem{
    display: flex;
    overflow: hidden;
    text-align: center;
    vertical-align: middle;
}
.chartItem .title{
    width: 80px;
    font-weight: bold;
    margin-right:50px;
}
</style>