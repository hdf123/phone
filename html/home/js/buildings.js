$(function(){
	var mySwiper1 = new Swiper('.swiper1', {
		pagination : '.swiper-pagination',
		paginationType : 'fraction',
	})
	var mySwiper2 = new Swiper('.swiper2', {
		slidesPerView :4,
		onSlideChangeStart:function(swiper){//swiper3中使用
        	var xiabiao=swiper.activeIndex;
	   }
	})
	var mySwiper3 = new Swiper('.swiper3', {
		slidesPerView :2.2,
		spaceBetween: 16,
	})
	var mySwiper4= new Swiper('.swiper4', {
		slidesPerView :2.2,
		spaceBetween: 16,
	})
	$(".swiper2 .swiper-slide").click(function(){
		$(this).addClass("act").siblings().removeClass("act");
	})
	/**
	 * 地图
	 */
	var map = new BMap.Map("container");
	var point = new BMap.Point(116.404, 39.915); 
	map.centerAndZoom(point, 15);

	
	
	
	
	
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
    for(var i=0;i<$(".ul1>li").length;i++){
    	$(".beyond").text($(".ul1>li").eq(i).text());
    	if($(".beyond").width() >= $(".ul1>li").eq(i).width()){
    		$(".ul1>li").eq(i).addClass("yincangs");
    	}else{
    		console.log(222);
    		$(".ul1>li").eq(i).addClass("flexk");
    	}
    }
    
})
