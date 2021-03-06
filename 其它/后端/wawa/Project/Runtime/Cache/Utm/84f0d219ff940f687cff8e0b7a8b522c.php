<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>欢迎登录后台管理系统</title>
<link href="/Public/Admin/css/base.css" rel="stylesheet" type="text/css" />
<link href="/Public/Admin/css/right.css" rel="stylesheet" type="text/css">
<script src="/Public/js/jquery-2.1.1.min.js"></script>
<script src="/Public/js/echarts.common.min.js"></script>
</head>
<body>
<div class="place"> <span>位置：</span>
  <ul class="placeul">
    <li><a href="<?php echo U('Index/center');?>">首页</a></li>
    <li>数据中心</li>
  </ul>
</div>
<div class="formbody">
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td width="60%"><div id="graph1" style="width: 100%;height:300px;"></div></td>
    <td width="40%" valign="top">&nbsp;</td>
  </tr>
</table>
<table width="100%" border="0" cellspacing="0" cellpadding="0" style="line-height:30px;">
  <tr>
    <td><font color="#CC6600"><strong>数据汇总</strong></font></td>
  </tr>
  <tr>
    <td>用户充值：<?php echo ($chongzong/100); ?><br>
        发出娃娃：<?php echo ($fazong/100); ?><br>
        发出佣金：<?php echo ($dailifa/100); ?><br>
        未发佣金：<?php echo ($dailiweifa/100); ?><br>
        扣量佣金：<?php echo ($dailikou/100); ?></td>
  </tr>
</table>
</div>
<script>
$(document).ready(function () {    
   var myChart1 = echarts.init(document.getElementById('graph1'));
      $.post("<?php echo U('ajaxtubiao');?>",{date:7},function(data){
	   myChart1.setOption({
  	   title: {
  	         text: '整体数据图(最近7日)'
 	      },
 	   tooltip: {
 	          trigger: 'axis'
 	      },
 	   legend: {
  	         data:['充值额','发出额']
 	      },
 	    grid: {
	           left: '3%',
    	       right: '4%',
  	           bottom: '3%',
    	       containLabel: true
   	    },
   	    toolbox: {
    	       feature: {
     	          saveAsImage: {}
     	      }
  	     },
  	     xAxis: {
   	        type: 'category',
  	         boundaryGap: false,
  	         data: data.date
 	      },
  	     yAxis: {
  	         type: 'value'
  	     },
  	     series: [
   	        {
     	        name:'充值',
   	            type:'line',
    	        stack: '总量',
				areaStyle: {normal: {}},
   	            data:data.chongzhi
    	    },
    	    {
    	        name:'发出',
       	        type:'line',
    	        stack: '总量',
				areaStyle: {normal: {}},
    	        data:data.fachu
     	    }]
	  });
   },'json');
});
</script></body>
</html>