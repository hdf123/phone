$(function(){
	var mySwiper1 = new Swiper('.swiper1', {
		observer:true,//修改swiper自己或子元素时，自动初始化swiper
		observeParents:true,//修改swiper的父元素时，自动初始化swiper
		pagination : '.swiper-pagination',
		paginationType : 'fraction',
	})
	var mySwiper2 = new Swiper('.swiper2', {
		slidesPerView :4,
		observer:true,
		observeParents:true,
		onSlideChangeStart:function(swiper){
        	var xiabiao=swiper.activeIndex;
	   }
	})
	var mySwiper3 = new Swiper('.swiper3', {
		observer:true,
		observeParents:true,
		slidesPerView :2.2,
		spaceBetween: 16,
	})
	var mySwiper4= new Swiper('.swiper4', {
		observer:true,
		observeParents:true,
		slidesPerView :2.2,
		spaceBetween: 16,
	})
	/**
	 * 更多信息
	 */
	$(".btn1").click(function(){
		location.href="building_information.html";
	})
	/**
	 * 全部户型
	 */
	$(".door_box>div:eq(0)").click(function(){
		location.href="door.html";
	})
	$(".doors").bind("click",function(){
		location.href="preview.html";
	})
	/**
	 * 获取附近信息
	 */
	var near="公交";
	$(".swiper2 .swiper-slide").click(function(){
		$(this).addClass("act").siblings().removeClass("act");
		var near=$(this).text();
		map.clearOverlays();//清除地图覆盖物
        map.addOverlay(marker);// 将标注添加到地图中
	    var locals = new BMap.LocalSearch(map ,options);
	    locals.searchNearby(near, point,2000);
	})
	/**
	 * 地图
	 */
	var map = new BMap.Map("container");
	var point = new BMap.Point(113.775754,34.767689); 
	map.centerAndZoom(point, 15);
	var myIcon = new BMap.Icon("../../img/location.png", new BMap.Size(25,25),{
			imageSize: new BMap.Size(25,25), // 引用图片实际大小
			imageOffset:new BMap.Size(0,0)  // 图片相对视窗的偏移
		}
	);
	var marker= new BMap.Marker(point,{icon:myIcon});  // 创建标注
	map.addOverlay(marker);              // 将标注添加到地图中
	
	
	var arr1= [],arr2= [],arr3= [];
	var options = {//获取检索到的返回结果
		onSearchComplete: function(results){
			// 判断状态是否正确
			if (locals.getStatus() == BMAP_STATUS_SUCCESS){
				$(".distance_box").empty();
				for (var i = 0; i < results.getCurrentNumPois(); i ++){
					var pointB = new BMap.Point(results.getPoi(i).point.lng,results.getPoi(i).point.lat);
					var juli=Math.round(map.getDistance(point,pointB));
					var ms='';
					if(juli>=1000){
						juli=(juli/1000).toFixed(3);
						ms=`<div>${juli}km</div>`
					}else{
						ms=`<div>${juli}m</div>`
					}
					$(".distance_box").append(`<li>
												<div>
													<div>
														<div class="titlek">${results.getPoi(i).title}</div>
														(<div>${results.getPoi(i).address}</div>
													</div>
												</div>
												${ms}
											</li>`);
					var aa=$(".titlek").eq(i).width();
					var as=$(".titlek").parent().parent().width();
					if(aa<=as-20){
						$(".titlek").eq(i).parent().parent().append(")");
					}
				    point[i] = new window. BMap . Point(results.getPoi(i).point.lng,results.getPoi(i).point.lat); //循环生成新的地图点
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
				      	$(div).css({
				      		"box-sizing":"border-box",
				      		"position":"absolute",
				      		"display":"inline-block",
				      		"padding":"10px 30px",
				      		"white-space":"nowrap",
				      		"background":"url(../../img/qipao.png) no-repeat",
				      		"background-size":"100% 100%"
				      	})
				      	div.appendChild(document.createTextNode(this._text));
				      map.getPanes().labelPane.appendChild(div);
				      return div;
				    }
				    ComplexCustomOverlay.prototype.draw = function(){
				      var map = this._map;
				      var pixel = map.pointToOverlayPixel(this._point);
				      this._div.style.left = pixel.x - 90 + "px";
				      this._div.style.top  = pixel.y - 40 + "px";
				    }
				    var myCompOverlay = new ComplexCustomOverlay(point[i],results.getPoi(i).title,results.getPoi(i).title);
				    map.addOverlay(myCompOverlay);
				}
			}
		}
	};
    var locals = new BMap.LocalSearch(map ,options);
    locals.searchNearby(near, point,2000);
    
	$(".assort:eq(0)").click(function(){
		location.href="surrounding.html"
	})
	/**
	 * 滚动通知
	 */
    var num=$(".ul1").find("li").length;
    if (num>1) {
        setInterval(function(){ 
        	$('.ul1').animate({
            	marginTop:"-1.1rem"
        	},300,function(){
            	$(this).css({marginTop : "0"}).find("li:first").appendTo(this);
        	});
    	},2000);
    }
    for(var i=0;i<num;i++){
    	$(".beyond").text($(".ul1>li").eq(i).text());
    	if($(".beyond").width() >= $(".ul1>li").eq(i).width()){
    		$(".ul1>li").eq(i).addClass("yincangs");
    	}else{
    		$(".ul1>li").eq(i).addClass("flexk");
    	}
    }
    /**
     * 点评
     */
    $(".review_box").on("click",".praise",function(){
    	var muns=parseInt($(this).children("div:eq(0)").text());
    	if($(this).children("div:eq(0)").is(".act")){
    		$(this).children("div:eq(0)").removeClass("act");
    		$(this).find("img").attr("src","../../img/aa.png");
    		$(this).children("div:eq(0)").text(muns-1);
    	}else{
    		$(this).children("div:eq(0)").addClass("act");
    		$(this).find("img").attr("src","../../img/ab.png");
    		$(this).children("div:eq(0)").text(muns+1);
    	}
    })
})
