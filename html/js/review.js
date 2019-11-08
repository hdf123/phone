$(function(){
	/**
	 * 登录状态
	 */
	var yz_logins=JSON.parse(localStorage.getItem('yz_logins'));//转为对象
	if(!yz_logins){
		location.href="home.html";
	}
	//输入数量限制
	var len=0,total=200;
	$(".review_box>div").html(len+'/'+total);
	$('.puba').on('input propertychange', function (e){
	    var texts=$(this).val();
		if(texts.length>total){
			len=total;
		}else{
			len=texts.length;
		}
	    $(".review_box>div").html(len+'/'+total);
	    if(len==0){
	    	$(".rights").css({"color":"#333333"});
	    }else{
	    	$(".rights").css({"color":"#0099ff"});
	    }
	});
	/**
	 * 发表
	 */
//	$(document).on('click','.rights',function(){
	$(".rights").click(function(){
		if(len==0){
			return alert("发表内容不可为空2");
		}else{
			alert("提交成功2")
		}
		console.log($(".puba").val());
	}
})
