$(function(){
	/**
	 * 页面渲染
	 */
	var yz_building=data[2];//转为对象
	var ska="",skb="",states="";
	for(i in yz_building.region){
		ska+='<div>'+yz_building.region[i]+'</div>';
	}
	for(i in yz_building.features){
		skb+='<div>'+yz_building.features[i]+'</div>';
	}
	if(yz_building.state=="在售"){
		states='<div class="sell">在售</div>';
	}else if(yz_building.state=="待售"){
		states='<div class="waiting">待售</div>';
	}else{
		states='<div>待售</div>';
	}
	$(".buildings_title").html('<h3>'+yz_building.name+'</h3>'
								+'<div>'+ska+'</div>'
								+'<div>'
									+states+skb
								+'</div>');
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
		onClick: function(swiper) {
			var ind=swiper.clickedSlide.attributes["ind"].nodeValue;
			console.log(ind);
			localStorage.setItem('yz_building',JSON.stringify(data[ind]));
	    	location.href="buildings.html";
		} 
	})
	var mySwiper4= new Swiper('.swiper4', {
		observer:true,
		observeParents:true,
		slidesPerView :2.2,
		spaceBetween: 16,
		onClick: function(swiper) {
			var ind=swiper.clickedSlide.attributes["ind"].nodeValue;
			console.log(ind);
			localStorage.setItem('yz_building',JSON.stringify(data[ind]));
	    	location.href="buildings.html";
		} 
	})
	/**
	 * 全部户型
	 */
	var mySwiper5 = new Swiper('.swiper5', {
		slidesPerView :2.2,
    	spaceBetween :20,
		observer:true,
    	observeParents:true,
	})
	$(".door_box>div:eq(0)").click(function(){
		location.href="door.html";
	})
	$(".swiper5").bind("click",".swiper-slide",function(){
		location.href="preview.html";
	})
//选项卡切换
	var tabIndex = 0;
	$('.mortgage_tab>li').on('click', function() {
		var tabIndex=$(this).index();
		var mm=8.5+(100/4*tabIndex);
		var oLine = $('.mortgage_tab>div');
		oLine.animate({ 'left': mm + '%' }, 300, function() {
			console.log(tabIndex);
			if(tabIndex==0){
				$(".contents").scrollTop(0);
			}else if(tabIndex==1){
				$(".contents").scrollTop(510);
			}else if(tabIndex==2){
				$(".contents").scrollTop(810);
			}else{
				$(".contents").scrollTop(1270);
			}
		});
		

	})
	/**
	 * 滚动显示
	 */
	$(".headersk").hide();
	$(".contents").scroll(function(){
		$(".headersk").show();
		var sk=$(".contents").scrollTop();
		console.log(sk);
		if(sk<450){//基础信息
			tabIndex=0;
			var mm=8.5+(100/4*tabIndex);
			var oLine = $('.mortgage_tab>div');
			oLine.stop(true,true).animate({ 'left': mm + '%' }, 300)
		}else if(sk>450&&sk<750){//户型
			tabIndex=1;
			var mm=8.5+(100/4*tabIndex);
			var oLine = $('.mortgage_tab>div');
			oLine.stop(true,true).animate({ 'left': mm + '%' }, 300)
		}else if(sk>750&&sk<1210){//周边
			tabIndex=2;
			var mm=8.5+(100/4*tabIndex);
			var oLine = $('.mortgage_tab>div');
			oLine.stop(true,true).animate({ 'left': mm + '%' }, 300)
		}else if(sk>1270){//点评
			tabIndex=3;
			var mm=8.5+(100/4*tabIndex);
			var oLine = $('.mortgage_tab>div');
			oLine.stop(true,true).animate({ 'left': mm + '%' }, 300)
		}
		
		
		if($(".contents").scrollTop()>1){
			$(".headers").hide();
			$(".headersk").stop(true,true).animate({opacity:$(".contents").scrollTop()/150});
		}else{
			$(".headersk").animate({opacity:$(".contents").scrollTop()/150},function(){
				$(".headersk").hide();
			});
			$(".headers").show();
		}
	})
	$(".conters").click(function(){
		alert(111)
	})
	/**
	 * 更多信息
	 */
	$(".situation>div:eq(1),.situation>div:eq(2),.btn1").click(function(){
		location.href="building_information.html";
	})
	/**
	 * 获取附近信息
	 */
	var near="教育";
	$(".swiper2 .swiper-slide").click(function(){
		$(this).addClass("act").siblings().removeClass("act");
		var ind=$(this).index()-1;
		if(ind>0){
			mySwiper2.slideTo(ind, 100, false);
		}else if(ind==0){
			mySwiper2.slideTo(ind, 100, false);
		}
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
	var myIcon = new BMap.Icon("../img/location.png", new BMap.Size(25,25),{
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
						ms='<div>'+juli+'km</div>'
					}else{
						ms='<div>'+juli+'m</div>'
					}
					$(".distance_box").append('<li>'
												+'<div>'
													+'<div>'
														+'<div class="titlek">'+results.getPoi(i).title+'</div>'
														+'(<div>'+results.getPoi(i).address+'</div>)'
													+'</div>'
												+'</div>'
												+ms
											+'</li>');
				    point[i] = new window. BMap . Point(results.getPoi(i).point.lng,results.getPoi(i).point.lat); //循环生成新的地图点
					// 复杂的自定义覆盖物
				    function ComplexCustomOverlay(point, text){
				      this._point = point;
				      this._text = text;
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
				      this._div.style.left = pixel.x - 90 + "px";
				      this._div.style.top  = pixel.y - 40 + "px";
				    }
				    var myCompOverlay = new ComplexCustomOverlay(point[i],results.getPoi(i).title);
				    map.addOverlay(myCompOverlay);
				}
			}
		}
	};
    var locals = new BMap.LocalSearch(map ,options);
    locals.searchNearby(near, point,2000);
	/**
	 * 最新动态
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
    $(".ul1>li").click(function(){
    	location.href="dynamic.html";
    })
    /**
     * 查看全部点评
     */
    $(".review_title").click(function(){
    	location.href="comments.html";
    })
    /**
     * 点评
     */
    $(".review_box").on("click",".praise",function(){
    	var muns=parseInt($(this).children("div:eq(0)").text());
    	if($(this).children("div:eq(0)").is(".act")){
    		$(this).children("div:eq(0)").removeClass("act");
    		$(this).find("img").attr("src","../img/aa.png");
    		$(this).children("div:eq(0)").text(muns-1);
    	}else{
    		$(this).children("div:eq(0)").addClass("act");
    		$(this).find("img").attr("src","../img/ab.png");
    		$(this).children("div:eq(0)").text(muns+1);
    	}
    })
})
