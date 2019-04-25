//ajax封装调用
var urs="";
function ajaxs(url,type,data,suFn,erFn,params){
 	var token= JSON.parse(localStorage.getItem('tokens'));//获取token
	$.ajax(Object.assign({
		url:urs+url,
		headers:{"Authorization":token},
		type:type,
        dataType : "json",
        data:data,
		success: function(data){
			suFn(data);
		},error: function(error){
            erFn(error);
        }
	},params||{}));
}

//地址栏传参
//getRequest();//全部参数
function getRequest(){
	var url=window.location.search; //获取url中"?"符后的字串
	var theRequest = new Object();
	if (url.indexOf("?") != -1){
		var str = url.substr(1);
		strs = str.split("&");
		for(var i = 0; i < strs.length; i ++) {
  			theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}

//loading
function loading(){
	return html = '<div id="loading" style="width:100%;height:100%;background:rgba(238,238,238,0.9);z-index:1;text-align:center;position:absolute;left:0px;top:0px;"><div style="width:32px;height:32px;position:fixed;top:45%;left:50%;margin-left:-16px;z-index:1000;"><img src="../../img/loadings.gif" /></div></div>';
}

//图片加载失败时，动态添加也包含在内
function imgks(){
	document.addEventListener("error", function (e) {
	  var elem = e.target;
	  if (elem.tagName.toLowerCase() == 'img') {
	    elem.src ="";
	  }
	}, true);
}

//基础布局
function funkr(){
	var ss=$(document.body).outerHeight(true);
	var he=$(".heads").outerHeight();
	var ft=$(".foots").outerHeight();
	he==undefined?he=0:he=he;
	ft==undefined?ft=0:ft=ft;
	var bod=ss-(he+ft);
	$(".sets").css({"height":bod+"px"});
}

//弹窗(1秒后自动隐藏)，待改善
function popups(contents,address){//contents：内容；address：地址
	$("#wdows").remove();
	$("body").append(`<div id="wdows">
						<div>${contents}</div>
					</div>`);
	$("#wdows").hide();//初始化异常弹窗
	$("#wdows").fadeIn(500,function(){
		setTimeout(function(){
			$("#wdows").fadeOut(1000,function(){
				console.log(address);
				address==""||address==undefined||address==null?location.reload():wode(address);//有传地址跳转，没有就刷新当前页面.
				function wode(address){
					address!="no"?location.href=address:console.log("什么也不做");
				}
			});
		},1000);
	});
}
//弹窗（需要手动确认或取消），待完善




































