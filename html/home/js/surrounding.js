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
	/**
	 * 查看更多
	 */
	$(".more").click(function(){
		if($(this).find(".iconfont").is(".icon-shang")){
			$(this).find(".iconfont").removeClass("icon-shang");
			$(this).find(".iconfont").addClass("icon-shang-copy");
			$(".distance_box").css({"height":"auto"});
		}else{
			$(this).find(".iconfont").removeClass("icon-shang-copy");
			$(this).find(".iconfont").addClass("icon-shang");
			$(".distance_box").css({"height":"7.46rem"});
		}
	})
	/**
	 * 分页
	 */
	var page = 1,off_on = false;//page：分页码;off_on：禁止重复加载
	//加载数据
	var LoadingDataFn = function() {
	    var dom = '';
	    for (var i = 0; i <10; i++) {
	        dom +=`<a href="" class="building_box">
					<img src="" class="imgks" alt="" />
					<div>
						<div class="titls">
							<h3>${i+1}中岳俪景湾</h3>
							<div>住宅</div>
						</div>
						<div class="environment">
							<div>
								<div>住宅</div>
								<div>管城回族区</div>
								<div>管南区域</div>
							</div>
							<div>建面73-124㎡</div>
						</div>
						<div class="situation">
							<div>小户型</div>
							<div>车位充足</div>
							<div>绿化率高</div>
						</div>
						<div>14000元/平</div>
					</div>
				</a>`;
	    }
	  $('.surrounding_building').append(dom);
	    off_on = true;
	};
	//初始化， 第一次加载
	$(document).ready(function() {
	    LoadingDataFn();
	});
	$('.contents').scroll(function() {
	    //当时滚动条离底部60px时开始加载下一页的内容
	    if (($(this)[0].scrollTop + $(this).height() + 60) >= $(this)[0].scrollHeight) {
	        //这里用 [ off_on ] 来控制是否加载 （这样就解决了 当上页的条件满足时，一下子加载多次的问题啦）
	        if (off_on) {
	              off_on = false;
	              page++;
	              console.log("第"+page+"页");
	              LoadingDataFn();  //调用执行上面的加载方法
	        }
	    }
	});
})
