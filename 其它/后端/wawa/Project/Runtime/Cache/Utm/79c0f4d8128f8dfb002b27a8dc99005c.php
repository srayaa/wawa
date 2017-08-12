<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>欢迎登录后台管理系统</title>
<link href="/Public/Admin/css/base.css" rel="stylesheet" type="text/css" />
<link href="/Public/Admin/css/right.css" rel="stylesheet" type="text/css">
<script src="/Public/js/jquery-2.1.1.min.js"></script>
<script>
$(document).ready(function(){	
   $(function(){
      $('.rightinfo tbody tr:odd').css("backgroundColor","#f5f8fa");	
   })
   $(".btn").click(function(){
	  var upass1 = $("input[name='upass1']").val();
	  var upass2 = $("input[name='upass2']").val();
	  var upass3 = $("input[name='upass3']").val();
	  if(upass1 == ''){
		 alert("原密码填写错误");
		 return false;
      }
	  if(upass2 != upass3 || upass2 == ''){
		 alert("新密码填写错误");
		 return false;
      }
	  $.post("<?php echo U('Sysuser/passsave');?>",{upass1:upass1,upass2:upass2},function(res){
		  if(res.code == 1){
		     alert("原密码输入错误");
			 return false;
		  }
		  if(res.code == 2){
		     alert("修改成功");
			 return false;
		  }
	  },'json');
   });
});
</script>
</head>
<body>
<div class="place"> <span>位置：</span>
  <ul class="placeul">
    <li><a href="<?php echo U('Index/center');?>">首页</a></li>
    <li>帐号设置</li>
  </ul>
</div>
<div class="formbody">
  <div class="formtitle"><span>基本信息</span></div>
  <ul class="forminfo">
    <li>
      <label>帐号</label>
      <cite><?php echo (session('uname')); ?></cite><i></i></li>
    <li>
      <label>原密码</label>
      <input name="upass1" type="password" class="dfinput" />
      <i></i></li>
    <li>
      <label>新设密码</label>
      <input name="upass2" type="password" class="dfinput" />
      <i></i></li>
    <li>
      <label>确认密码</label>
      <input name="upass3" type="password" class="dfinput" />
      <i></i></li>
    <li>
      <label>&nbsp;</label>
      <input name="button" type="button" class="btn" value="确认保存"/>
    </li>
  </ul>
</div>
</body>
</html>