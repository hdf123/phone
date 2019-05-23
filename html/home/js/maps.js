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
	var arr1=[],arr2=[];
	for (var i = 0; i <coordinates.length; i ++) {
	    var p0= coordinates[i].point.lng; 
	    var p1 =coordinates[i].point.lat; //按照原数组的point格式将地图点坐标的经纬度分别提出来
	    arr2[i] = new BMap.Point(p0, p1); //循环生成新的地图点
		// 复杂的自定义覆盖物
	    function ComplexCustomOverlay(point){
	      this._point = point;
	    }
	    ComplexCustomOverlay.prototype = new BMap.Overlay();
	    ComplexCustomOverlay.prototype.initialize = function(map){
	      	this._map = map;
	      	var div = this._div = document.createElement("div");
	      	$(div).css({
	      		"box-sizing":"border-box",
	      		"width":"100px",
	      		"height":"100px",
	      		"position":"absolute",
	      		"background-image": "linear-gradient(0deg, #0099ff 1%, #52b9fd 100%)",
	      		"border-radius":"50%",
	      		"display":"flex",
	      		"flex-direction": "column",
	      		"align-items": "center",
	      		"justify-content": "center",
	      		"color":"white"
	      	})
	      	div.appendChild(document.createTextNode(coordinates[i].title));
	      	
	      	var ayy=document.createElement("span");
	      	$(ayy).css({"color":"white"})
	      	ayy.appendChild(document.createTextNode("2个"));
	      	
	      	div.appendChild(ayy);
	      	map.getPanes().labelPane.appendChild(div);
	      	return div;
	    }
	    ComplexCustomOverlay.prototype.draw = function(){
	      var map = this._map;
	      var pixel = map.pointToOverlayPixel(this._point);
	      this._div.style.left = pixel.x - 50 + "px";
	      this._div.style.top  = pixel.y - 50 + "px";
	    }
	    /**
	     * 给自定义覆盖物添加事件
	     */
		ComplexCustomOverlay.prototype.addEventListener = function(event, fun) {
			this._div['on' + event] = fun;
		}
	    var myCompOverlay = new ComplexCustomOverlay(arr2[i]);
	    arr1.push(myCompOverlay);
	    map.addOverlay(myCompOverlay);
	    //移动端使用touchstart，pc使用click，好坑啊，浪费了我好长时间
		myCompOverlay.addEventListener('touchstart', function() {
//		myCompOverlay.addEventListener('click', function() {
			var index=$(this).index();
			console.log(11111111111);
			for(var i=0;i<arr1.length;i++){
				map.removeOverlay(arr1[i]);
			}
			// 创建点坐标  
			var point = new BMap.Point(arr1[index]._point.lng,arr1[index]._point.lat); 
			// 初始化地图，设置中心点坐标和地图级别 
			map.centerAndZoom(point,13);
			var ayy=[
				[113.757367,34.737826],
				[113.787367,34.767826],
				[113.717367,34.797826]
			]
			for (var i = 0; i <ayy.length; i ++) {
				var point = new BMap.Point(ayy[i][0],ayy[i][1]);
				var marker = new BMap.Marker(point);
			  	map.addOverlay(marker);
			  	$(".pulls").animate({"top":"60%"});
			}
		});
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
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
