$(function(){
	$(".popup_box").hide();
	$(".rights>i:eq(1)").click(function(){
		$(".popup_box").animate({"width":"100%"},300);
		$(".popup_box").show();
	})
	/**
	 * 地图标记
	 */
	
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(113.775754,34.767689); 
	map.centerAndZoom(point,12);
	//给地图添加点击事件
	function showInfo(e){
		alert(e.point.lng + ", " + e.point.lat);
	}
	map.addEventListener("click", showInfo);
	/**
	 * 筛选
	 */
	$(".screening_box li").click(function(){
		console.log($(this).index());
		var _this=$(this);
		if($(this).is(".act")){
			_this.removeClass("act");
		}else{
			_this.addClass("act");
		}
	})
	$(".btn").click(function(){
		$(".popup_box").animate({"width":"0"},300,function(){
			$(".popup_box").hide();
		});
	})
	/**
	 * 上下拖动
	 */
	var contH = $(".pulls").height();
	var startY, sY, moveY;
	var winH = $(".contents").height();
	var headers = $(".headers").height();
	$(".pulls").on({ //绑定事件
		touchstart: function(e) {
			startY = e.originalEvent.targetTouches[0].pageY; //获取点击点的Y坐标
			sY = $(this).offset().top; //相对于当前窗口Y轴的偏移量
			topY = startY - sY; //鼠标所能移动最上端是当前鼠标距div上边距的位置
			bottomY = winH + topY;              
		},
		touchmove: function(e){
			e.preventDefault();
			moveY = e.originalEvent.targetTouches[0].pageY - headers; //移动过程中Y轴的坐标
			console.log("moveY="+moveY);
			
			if(moveY <bottomY-contH) {
				moveY =bottomY-contH;
			}
			if(moveY > bottomY) {
				moveY = bottomY;
			}
			$(this).css({
				"top": moveY + sY - startY,
			})
		}
	})
})
