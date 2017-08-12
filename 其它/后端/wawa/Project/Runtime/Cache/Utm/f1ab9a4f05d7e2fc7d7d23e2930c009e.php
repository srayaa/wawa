<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>欢迎登录后台管理系统</title>
<link href="/Public/Admin/css/base.css" rel="stylesheet" type="text/css" />
<link href="/Public/Admin/css/right.css" rel="stylesheet" type="text/css">
<script language="JavaScript" src="/Public/js/jquery-2.1.1.min.js"></script>
<script>
$(document).ready(function(){	
   $(function(){
      $('.rightinfo tbody tr:odd').css("backgroundColor","#f5f8fa");	
   })
   $(".btn").click(function(){
	  var uname = $("input[name='uname']").val();
	  var upass = $("input[name='upass']").val();
	  var id = $("input[name='id']").val();
	  var utype = $("input[name='utype']:checked").val();
	  if(upass == '' || uname == ''){
		 alert("填写错误");
		 return false;
      }
	   $.post("<?php echo U('usersave');?>",{uname:uname,id:id,utype:utype,upass:upass},function(data){
		   if(data == 1){
			  alert('该用户已经存在');
		   } else {
		      alert("修改成功");
		      location.href = "<?php echo U(userlist);?>";
		   }
	   });
   });
});
</script>
</head>
<body>
<div class="place"> <span>位置：</span>
  <ul class="placeul">
    <li><a href="<?php echo U('Index/center');?>">首页</a></li>
    <li><a href="<?php echo U('userlist');?>">系统用户</a></li>
    <li>编辑</li>
  </ul>
</div>
<div class="formbody">
  <div class="formtitle"><span>基本信息</span></div>
  <ul class="forminfo">
    <li>
      <label>帐号</label>
      <input name="uname" type="text" class="dfinput" value="<?php echo ($user[uname]); ?>" />
      <input name="id" type="hidden"  value="<?php echo ($user[id]); ?>" />
      <i></i></li>
    <li>
      <label>密码</label>
      <input name="upass" type="password" class="dfinput" />
      <i>不修改，请留空</i></li>
    <li>
      <label>分组</label>
      <cite> <input type="radio" name="utype" value="2" <?php if(($user['utype'] == 2) OR ($user['utype'] == '') ): ?>checked<?php endif; ?> > 用户&nbsp;<!-- 
             <input type="radio" name="utype" value="1" <?php if(($user['utype']) == "1"): ?>checked<?php endif; ?> > 管理员 --> </cite> <i></i> </li>
    <li>
      <label>&nbsp;</label>
      <input name="button" type="button" class="btn" value="确认保存"/>
    </li>
  </ul>
</div>
</body>
</html>