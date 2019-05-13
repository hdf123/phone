$(function(){
	var mySwiper1 = new Swiper('.swiper1', {
		slidesPerView :4,
		onSlideChangeStart:function(swiper){//swiper3中使用
        	var xiabiao=swiper.activeIndex;
	   }
	})
	$(".swiper1 .swiper-slide").click(function(){
		$(this).addClass("act").siblings().removeClass("act");
	})
	/**
	 * 地图
	 */
	var map = new BMap.Map("container");
	var point = new BMap.Point(113.775754,34.767689); 
	map.centerAndZoom(point, 15);

	var myIcon = new BMap.Icon("../../img/location.png", new BMap.Size(25,25),
		{
			imageSize: new BMap.Size(25,25), // 引用图片实际大小
			imageOffset:new BMap.Size(0,0)  // 图片相对视窗的偏移
		}
	);
	var marker= new BMap.Marker(point,{icon:myIcon});  // 创建标注
	map.addOverlay(marker);              // 将标注添加到地图中
	
})
