// uri2MVC
function uri2MVC(uri,addFileName)
{var _split='/';if(!_08_ROUTE_ENTRANCE)
{var _08_ROUTE_ENTRANCE='index.php?/';}
(addFileName==undefined)&&(addFileName=true);var _uri='';if(typeof uri=='string')
{_uri=uri.replace(/&/g,_split).replace(/=/g,_split);}
else
{for(var i in uri)
{_uri+=(i+_split+uri[i]+_split);}}
var _endstr=_uri.charAt(_uri.length-1);if(_endstr==_split)
{_uri=_uri.substr(0,_uri.length-1);}
var newURI=addFileName?_08_ROUTE_ENTRANCE+_uri:_uri;if(!/domain/i.test(newURI))
{newURI+=(_split+'domain'+_split+document.domain);}
return newURI;}

// --------------返金卡 入会报名，获取验证码-------------//
//是否开启手机免费短信
$.getJSON(CMS_ABS + uri2MVC("ajax=sms_msend&mod="+isOpenMob+"&act=init&datatype=json"), function(info){
	if(info.error=='close')
		$('#sendtophone').hide();
	else
		$('#sendtophone').show();
});

//获取确认码
function sendverCode(os){
	$.getJSON(CMS_ABS + uri2MVC("ajax=sms_msend&mod="+isOpenMob+"&act=code&tel="+$("#mobinfo").val()+"&datatype=json"), function(info){
		if(info.error){
			//$.modal.tip(info.message,'error');
			alert(info.message);
		}else{
			countdown(os);
			//$.modal.tip('已发送，1分钟后可重新获取','succeed');
			$("#stampinfo").val(info.stamp);
		}
	});
}

//认证确认码
//认证确认码
function checkverCode(o,fm){
	var stamp_code = "&stamp="+$("#stampinfo").val()+"&code="+$("#confirmcode").val()+"";
	$.getJSON(CMS_ABS + uri2MVC("ajax=sms_msend&mod="+isOpenMob+"&act=check"+stamp_code+"&datatype=json"), function(info){
		if(info.error){
			//$.modal.tip(info.message,'error');
			alert(info.message);
		}else{
			if(o==1){
				//sendSMS(fm);
				var code =$("#WIDout_trade_no_two").val();
				var mid  =$("#mid").val();
				var price=$("#WIDtotal_fee").val();
				var tel  =$("#mobinfo").val();

				var stamp_code_two = "?mid="+mid+"&codes="+code+"&price="+price+"&tel="+tel;
                // var paymethods = $('input:radio[name="paymethods"]:checked').val();

                    location.href = "http://www.zyloushi.com/extended/wxpay/example/jsapi.php" + stamp_code_two + "";


			}else{
				//$.modal.tip('确认码正确！请点击立即发送，免费获取短信。','succeed');
			}
		}
	});
}

var stime;
function countdown(senconds){
	if(senconds>0){
	    senconds--;
		$("#vcode").html('<span class="fcr" id="getminut">60</span>秒后重新获取').prop("disabled","disabled").css("cursor","no-drop");
		if(senconds<10) senconds='0'+senconds;
		$("#getminut").html(senconds);
		stime=setTimeout("countdown("+senconds+")",1000);
		// $("#subsmsbnt").prop("disabled","");
	}else{
		$("#vcode").html("获得确认码").prop("disabled","").css("cursor","pointer");
		// $("#subsmsbnt").prop("disabled","disabled");
	}
}

// 支付宝

//获取确认码
function sendverCodes(os){
	$.getJSON(CMS_ABS + uri2MVC("ajax=sms_msend&mod="+isOpenMob+"&act=code&tel="+$("#mobinfos").val()+"&datatype=json"), function(info){
		if(info.error){
			//$.modal.tip(info.message,'error');
			console.log(info);
			alert(info.message);
		}else{
			countdowns(os);
			//$.modal.tip('已发送，1分钟后可重新获取','succeed');
			$("#stampinfos").val(info.stamp);
		}
	});
}

$("#confirmcodes").keyup(function(){
	if($("#mobinfos").val() && $(this).val().length>=6)
		checkverCodes();
});
//认证确认码
function checkverCodes(o,fm){
	var stamp_code = "&stamp="+$("#stampinfos").val()+"&code="+$("#confirmcodes").val()+"";
	$.getJSON(CMS_ABS + uri2MVC("ajax=sms_msend&mod="+isOpenMob+"&act=check"+stamp_code+"&datatype=json"), function(info){
		if(info.error){
			//$.modal.tip(info.message,'error');
			alert(info.message);
		}else{
			if(o==1){
				//sendSMS(fm);
				var code =$("#WIDout_trade_no_two").val();
				var mid  =$("#mids").val();
				var price=$("#WIDtotal_fees").val();
				var tel  =$("#mobinfos").val();
				var subject =$("#WIDsubjects").val();
				var url =$("#WIDshow_urls").val();
				var xingming =$("#xingming").val();
				var stamp_code_two = "?mid="+mid+"&codes="+code+"&price="+price+"&tel="+tel;
                if($("#zfb").val()=="zfb"){
                        function PostSubmit(url, data, data1, data2, data3, data4, data5, data6) {
                            var postUrl = url;//提交地址
                            var postData = data;//提交数据
                            var postData1 = data1;
                            var postData2 = data2;
                            var postData3 = data3;
                            var postData4 = data4;
                            var postData5 = data5;
                            var postData6 = data6;
                            var ExportForm = document.createElement("FORM");
                            document.body.appendChild(ExportForm);
                            ExportForm.method = "POST";
                            var newElement = document.createElement("input");
                            newElement.setAttribute("name", "WIDout_trade_no");
                            newElement.setAttribute("type", "hidden");
                            var newElement1 = document.createElement("input");
                            newElement1.setAttribute("name", "WIDsubject");
                            newElement1.setAttribute("type", "hidden");
                            var newElement2 = document.createElement("input");
                            newElement2.setAttribute("name", "WIDtotal_fee");
                            newElement2.setAttribute("type", "hidden");
                            var newElement3 = document.createElement("input");
                            newElement3.setAttribute("name", "WIDshow_url");
                            newElement3.setAttribute("type", "hidden");
                            var newElement4 = document.createElement("input");
                            newElement4.setAttribute("name", "mid");
                            newElement4.setAttribute("type", "hidden");
                            var newElement5 = document.createElement("input");
                            newElement5.setAttribute("name", "tel");
                            newElement5.setAttribute("type", "hidden");
                            var newElement6 = document.createElement("input");
                            newElement6.setAttribute("name", "xingming");
                            newElement6.setAttribute("type", "hidden");
                            ExportForm.appendChild(newElement);
                            ExportForm.appendChild(newElement1);
                            ExportForm.appendChild(newElement2);
                            ExportForm.appendChild(newElement3);
                            ExportForm.appendChild(newElement4);
                            ExportForm.appendChild(newElement5);
                            ExportForm.appendChild(newElement6);
                            newElement.value = postData;
                            newElement1.value = postData1;
                            newElement2.value = postData2;
                            newElement3.value = postData3;
                            newElement4.value = postData4;
                            newElement5.value = postData5;
                            newElement6.value = postData6;
                            ExportForm.action = postUrl;
                            ExportForm.submit();
                        };

                    PostSubmit('http://www.zyloushi.com/extended/mobpay.php',code,subject,price,url,mid,tel,xingming);
				}else {
                    location.href = "http://www.zyloushi.com/extended/wxpay/example/jsapi.php" + stamp_code_two + "";
				}




			}else{
				//$.modal.tip('确认码正确！请点击立即发送，免费获取短信。','succeed');
			}
		}
	});
}


// 验证码时间
var stimes;
function countdowns(senconds){
	if(senconds>0){
	    senconds--;
		$("#vcodes").html('<span class="fcr" id="getminut">60</span>秒后重新获取').prop("disabled","disabled").css("cursor","no-drop");
		if(senconds<10) senconds='0'+senconds;
		$("#getminut").html(senconds);
		stimes=setTimeout("countdowns("+senconds+")",1000);
		// $("#subsmsbnt").prop("disabled","");
	}else{
		$("#vcodes").html("获得确认码").prop("disabled","").css("cursor","pointer");
		// $("#subsmsbnt").prop("disabled","disabled");
	}
}

//点击报名按钮，判断是否提交
function sendSMSphones(fm){
	if($("#confirmcodes").val()){
		checkverCodes(1,fm);
	}else if($("#confirmcode").val()) {
		checkverCode(1,fm);
	}else{
		alert('确认码不能为空');
	}
	return false;
}


