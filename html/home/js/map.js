$(function(){
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(113.775754,34.767689); 
	map.centerAndZoom(point, 15);
	function showInfo(e){
		alert(e.point.lng + ", " + e.point.lat);
	}
	map.addEventListener("click", showInfo);
	/**
	 * 上下滑动
	 */
	var contH = $(".pulls").height();
	var startY, sY, moveY;
	var winH = $(".contents").height();
	var pulls = $(".pulls").height();
	$(".pulls").on({ //绑定事件
		touchstart: function(e) {
			startY = e.originalEvent.targetTouches[0].pageY; //获取点击点的Y坐标
			sY = $(this).offset().top; //相对于当前窗口Y轴的偏移量
			console.log("startY="+startY);
			console.log("sY="+sY);
			topY = startY - sY + pulls; //鼠标所能移动最上端是当前鼠标距div上边距的位置
			console.log("topY="+topY);
			bottomY = winH - contH + topY; //鼠标所能移动最下端是当前窗口距离减去鼠标距div最下端位置        
			console.log("bottomY="+bottomY);
		},
		touchmove: function(e) {
			e.preventDefault();
			moveY = e.originalEvent.targetTouches[0].pageY - 100; //移动过程中Y轴的坐标
			console.log("moveY="+moveY);
//			if(moveY < topY) {
//				moveY = topY;
//			}
			
//			if(moveY > bottomY) {
//				moveY = bottomY;
//			}
			$(this).css({
				"top": moveY + sY - startY,
			})
		}
	})
})
