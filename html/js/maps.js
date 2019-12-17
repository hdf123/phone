$(function(){
	/**
	 * 拖动
	 */
	floats($(".floata"),2);
	$(".popup_box").hide();
	$(".rights>i:eq(0)").click(function(){
		location.href="search.html";
	})
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
	
	for (var i = 0; i <region.length; i ++){
		$(".area>ul").append('<li>'+region[i].title+'</li>');
	    var p0= region[i].point.lng;
	    var p1 =region[i].point.lat; //按照原数组的point格式将地图点坐标的经纬度分别提出来
	    arr2[i] = new BMap.Point(p0, p1); //循环生成新的地图点
		// 复杂的自定义覆盖物
	    function ComplexCustomOverlay(point,texts){
	      this._point = point;
	      this._texts = texts;
	    }
	    ComplexCustomOverlay.prototype = new BMap.Overlay();
	    ComplexCustomOverlay.prototype.initialize = function(map){
	      	this._map = map;
	      	var div = this._div = document.createElement("div");
	      	$(div).addClass("markks");
	      	
	      	var as=document.createElement("a");
			as.setAttribute('href', "");
	      	var divs=document.createElement("div");
	      	divs.appendChild(document.createTextNode(region[i].title));
	      	
	      	var spns=document.createElement("span");
	      	spns.appendChild(document.createTextNode(this._texts));
	      	
	      	as.appendChild(divs);
	      	as.appendChild(spns);
	      	div.appendChild(as);
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
	    var myCompOverlay = new ComplexCustomOverlay(arr2[i],region[i].nums);
	    arr1.push(myCompOverlay);
	    map.addOverlay(myCompOverlay);
	    //移动端使用touchstart，pc使用click，好坑啊，浪费了我好长时间
		myCompOverlay.addEventListener('touchstart',function(){
			var index=$(this).index();
			console.log(index);
			maps(index);
			$(".screening_box li").eq(index).addClass("act").siblings("li").removeClass("act");
		});
	}
	function maps(index){
		console.log(index);
		map.clearOverlays();
		for(var i=0;i<arr1.length;i++){
			map.removeOverlay(arr1[i]);
		}
		// 创建点坐标  
		var point = new BMap.Point(arr1[index]._point.lng,arr1[index]._point.lat); 
		// 初始化地图，设置中心点坐标和地图级别 
		map.centerAndZoom(point,13);
		var marker = new BMap.Marker(point);
		map.addOverlay(marker);
		var ayy=[
			[113.757367,34.737826,"一号"],
			[113.787367,34.767826,"二号"],
			[113.717367,34.797826,"三号"],
			[113.720367,34.788826,"四号"],
			[113.731367,34.771826,"五号"],
			[113.742467,34.762826,"六号"],
			[113.753567,34.753826,"七号"],
			[113.764667,34.744826,"八号"],
			[113.775767,34.735826,"九号"],
			[113.786867,34.726826,"十号"],
			[113.798967,34.717826,"十一号"],
			[113.709067,34.700826,"十二号"]
		]
		for (var i = 0; i <ayy.length; i ++) {
			point[i] = new window. BMap . Point(ayy[i][0],ayy[i][1]); //循环生成新的地图点
			// 复杂的自定义覆盖物
		    function ComplexCustomOverlay(point, text, mouseoverText){
		      this._point = point;
		      this._text = text;
		      this._overText = mouseoverText;
		    }
		    ComplexCustomOverlay.prototype = new BMap.Overlay();
		    ComplexCustomOverlay.prototype.initialize = function(map){
		      	this._map = map;
		      	var div = this._div = document.createElement("div");
		      	$(div).addClass("bubbles");
		      	div.appendChild(document.createTextNode(this._text));
		      map.getPanes().labelPane.appendChild(div);
		      return div;
		    }
		    ComplexCustomOverlay.prototype.draw = function(){
		      var map = this._map;
		      var pixel = map.pointToOverlayPixel(this._point);
		      this._div.style.left = pixel.x - 10 + "px";
		      this._div.style.top  = pixel.y - 40 + "px";
		    }
			ComplexCustomOverlay.prototype.addEventListener = function(event, fun) {
				this._div['on' + event] = fun;
			}
		    var myCompOverlay = new ComplexCustomOverlay(point[i],ayy[i][2]);
		    map.addOverlay(myCompOverlay);
			myCompOverlay.addEventListener('touchstart', function() {
				var index=$(this).index();
				$(".bubbles").css({
					"background":"url(../img/bubbles_a.png) no-repeat",
					"background-size":"100% 100%"
				});
				$(this).css({
					"background":"url(../img/bubbles_b.png) no-repeat",
					"background-size":"100% 100%"
				});
				$(".pulls").animate({"top":"60%"});
			});
		    
		}
	}
	/**
	 * 筛选
	 */
	var inds="";
	$(".screening_box li").click(function(){
		inds=$(this).index();
		var _this=$(this);
		if($(this).is(".act")){
			_this.removeClass("act");
		}else{
			_this.addClass("act").siblings("li").removeClass("act");
		}
	})
	
	$(".btn").click(function(){
		$(".popup_box").animate({"width":"0"},300,function(){
			console.log(inds);
			maps(inds);
			$(".popup_box").hide();
			$(".pulls").animate({"top":"100%"});
		});
	})
	$(".screening_box").click(function(event){
		event.stopPropagation();
	})
	$(".popup_box").click(function(){
		$(".popup_box").hide();
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
