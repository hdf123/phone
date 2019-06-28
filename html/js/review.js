$(function(){
	/**
	 * 登录状态
	 */
	var yz_logins=JSON.parse(localStorage.getItem('yz_logins'));//转为对象
	if(!yz_logins){
		location.href="home.html";
	}
	//输入数量限制
	var len=0,total=200,states=false;
	$(".review_box>div").html(len+'/'+total);
	$('.puba').on('input propertychange', function (e){
	    var texts=$(this).val();
		if(texts.length>total){
			len=total;
		}else{
			len=texts.length;
		}
	    $(".review_box>div").html(len+'/'+total);
		numks();
	});
	function numks(){
		if($(".image_box .imgs").length<=0&&len==0){
			$(".rights").css({"color":"#333333"});
		}else{
			states=true;
			$(".rights").css({"color":"#0099ff"});
		}
	}
	/**
	 * 上传图片
	 */
	$(".imgFile").change(function () {
	   	//获取上传文件的数量
	   	var countFiles = $(this)[0].files.length;
	   	if(countFiles>9){
	   		alert("最多只能上传9张图片");
	   	}else{
	   		console.log(countFiles);
		   	var imgPath = $(this)[0].value;
		   	var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
		   	var image_holder = $(".images");
		   	if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
		   	    if (typeof (FileReader) != "undefined") {
		   	        // 循环所有要上传的图片
		   	        for (var i = 0; i < countFiles; i++) {
		   	        	var index=i;
		   	            var reader = new FileReader();
		   	            reader.onload = function (e) {
		   	            	$(".images").before(`<div class="imgs">
									<img src=${e.target.result} class="imgas" alt="" />
									<img src="../../img/delete.png" class="deletes" alt="" />
								</div>`);
							numks();
		   	            }
		   	            reader.readAsDataURL($(this)[0].files[i]);
		   	        }
		   	    } else {
		   	        alert("你的浏览器不支持FileReader！");
		   	    }
		   	} else {
		   	    alert("请选择图像文件。");
		   	}
	   	}
	});
	//删除图片
	$(".image_box").on("click",".deletes",function(){
		$(this).parent().remove();
		numks();
	})
	/**
	 * 发表
	 */
	$(".rights").click(function(){
		if(!states){
			return alert("发表内容不可为空");
		}
		console.log($(".puba").val());
		console.log($(".image_box .imgas").length);
	})
})
