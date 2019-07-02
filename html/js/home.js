$(function(){
	var yz_logins=true;//登录状态
	localStorage.setItem('yz_logins',JSON.stringify(yz_logins));//转为json字符串
	var headers=$("header")[0].getBoundingClientRect().height;
	var tabBark=$(".tabBars").outerHeight(true);
	var tabBars=$(".tabBars").offset().top;
	var heights=tabBars-headers;
	var bodyHeight=$(window).height();
	var khk=bodyHeight-(headers+tabBark);
	$(".swiper3").css({"height":khk});
	/**
	 * 加载动画
	 */
	$("body").mLoading("show");
	setTimeout(function() {
        $("body").mLoading("hide");
    },500)
	$(document).ajaxStop(function(){
		console.log("所有 AJAX 请求已完成");
		setTimeout(function() {
	        $("body").mLoading("hide");
	    }, 1000)
	});
	$(".swiper3>.swiper-wrapper>.swiper-slide").css({"height":bodyHeight});
	var mySwiper1 = new Swiper('.swiper1', {
		loop : true,
		autoplay: 2000,//可选选项，自动滑动
		pagination : '.swiper-pagination',
		observer:true,//修改swiper自己或子元素时，自动初始化swiper
    	observeParents:true,//修改swiper的父元素时，自动初始化swiper
    	
	})
	var mySwiper2=new Swiper(".swiper2",{
		loop:true,//循环
		observer:true,
    	observeParents:true,
		onSlideChangeStart:function(swiper){//swiper3中使用
	        var xiabiao=swiper.realIndex;//循环状态下获取下标
	        $(".tabBar>li").eq(xiabiao).addClass("selecteds");
	        $(".tabBar>li").eq(xiabiao).siblings().removeClass("selecteds");
	   }
	})
	$(".tabBar>li").click(function(){
	    var zuobiao=$(this).index();
	    $(".tabBar>li").eq(zuobiao).addClass("selecteds");
	    $(".tabBar>li").eq(zuobiao).siblings().removeClass("selecteds");
	    mySwiper2.slideTo(zuobiao+1,500,false);
	})
	var mySwiper3=new Swiper(".swiper3",{
		loop:true,//循环
		observer:true,
    	observeParents:true,
		onSlideChangeStart:function(swiper){
	        var xiabiao=swiper.realIndex;
	        $(".tabBars>li").eq(xiabiao).addClass("selecteds");
	        $(".tabBars>li").eq(xiabiao).siblings().removeClass("selecteds");
	   }
	})
	$(".tabBars>li").click(function(){
	    var zuobiao=$(this).index();
	    $(".tabBars>li").eq(zuobiao).addClass("selecteds");
	    $(".tabBars>li").eq(zuobiao).siblings().removeClass("selecteds");
	    mySwiper3.slideTo(zuobiao+1,500,false);
	})
	/**
	 * 搜索
	 */
	$('.search').click(function (){
		location.href="search.html"
	});
	/*
	$('.search').on('keypress', function (e){
	    var keycode = e.keyCode;
	    if(keycode == '13') {
	    	e.preventDefault();
	    	location.href="search.html"
	    }
	});
	*/
	/**
	 * 咨询
	 */
	var dom="";
	for(i in consulting){
		dom+=`<div class="information">
							<div>
								<div>${consulting[i].title}</div>
								<p>${consulting[i].time}</p>
							</div>
							<img src=${consulting[i].img} alt="" />
						</div>`;
	}
	$(".consulting").append(dom);
	$(".alerts").append(dom);
	$(".preferentialk").append(dom);
    $(".swiper2").on("click",".information",function(){
    	localStorage.setItem('yz_consulting',JSON.stringify(1));
    	location.href="consulting.html";
    })
	//刷新
	$(".updates>div:eq(0)").click(function(){
		$("body").mLoading({
            text:"内容加载中，请稍后~",
		});
		setTimeout(function() {
	        $("body").mLoading("hide");
	    }, 1000)
	})
	//查看更多
	$(".updates>div:eq(1)").click(function(){
		location.href="more_consultation.html";
	})
	/**
	 * 楼盘
	 */
	var sws="";
	var sw1=data.slice(0,5);
	for(i in sw1){
		var sk="";
		for(j in sw1[i].region){
			sk+=sw1[i].region[j]+" ";
		}
		sws+=`<div class="swiper-slide" ind=${i}>
				<img src=${sw1[i].img} alt="" />
				<p>${sw1[i].name}</p>
				<p>${sk}</p>
			</div>`;
	}
	$(".swiper4 .swiper-wrapper").append(sws);
	$(".swiper5 .swiper-wrapper").append(sws);
	var mySwiper4 = new Swiper('.swiper4', {
		slidesPerView :2.6,
    	spaceBetween :10,
		observer:true,
    	observeParents:true,
		onClick: function(swiper) {
			var ind=swiper.clickedSlide.attributes["ind"].nodeValue;
		} 
	})
	var mySwiper5 = new Swiper('.swiper5', {
		slidesPerView :2.6,
		observer:true,
    	observeParents:true,
    	spaceBetween :10,
	})
	//分页
	var page1 = 1,page2 = 1, //分页码
    off_on = false; //分页开关
	//加载数据
	var LoadingDataFn = function(ars) {
		//var menu=6;//每次加载几条数据
		//var start=(page-1)*menu;//从哪里开始
		//var end=page*menu;//到哪里结束
	    var dom = '';
	    for (var i =0; i <6; i++) {
	    //for (var i =start; i <end; i++) {
	    	if(data[i]==undefined){
	    		alert("没有数据了");
	    		return ;
	    	}
			var aa='',as='',region=data[i].region;
			for(j in region){
				if(j==region.length-1){
					aa+=`${region[j]}`;
				}else{
					aa+=`${region[j]}&nbsp;`;
				}
			}
			if(data[i].state=="在售"){
				as=`<div class="state statea">${data[i].state}</div>`;
			}else if(data[i].state=="待售"){
				as=`<div class="state stateb">${data[i].state}</div>`;
			}else{
				as=`<div class="state">${data[i].state}</div>`;
			}
			dom+=`<div class="buildings">
									<img src=${data[i].img} alt="" />
									<div>
										<div>${data[i].name}</div>
										<div class="region">
											<div>${aa}</div>
											<div>${data[i].area}</div>
										</div>
										<div class="features">
											${as}
											<div>南北通透</div>
											<div>配套成熟</div>
										</div>
										<div>售价待定</div>
									</div>
								</div>`;
	    }
	    if(ars==1){
	    	$(".box1").append(dom);
	    }else if(ars==2){
	    	$(".box2").append(dom);
	    }
	    off_on = true;
	    //off():移除box1上的所有点击事件，防止触发两次
	    $(".swiper3").off('click').on("click",".buildings",function(){
	    	localStorage.setItem('yz_building',JSON.stringify(data[$(this).index()]));//转为json字符串
	    	location.href="buildings.html";
	    })
	};
	LoadingDataFn(1);
	LoadingDataFn(2);
	$('.recommended').scroll(function() {
	    //当时滚动条离底部60px时开始加载下一页的内容
	    if (($(this)[0].scrollTop + $(this).height() + 60) >= $(this)[0].scrollHeight) {
	        //这里用 [ off_on ] 来控制是否加载 （这样就解决了 当上页的条件满足时，一下子加载多次的问题啦）
	        if (off_on) {
	            off_on = false;
	            page1++;
	            console.log("第"+page1+"页");
	            LoadingDataFn(1);
	        }
	    }
	});
	$('.BridalChamber').scroll(function(){
	    //当时滚动条离底部60px时开始加载下一页的内容
	    if (($(this)[0].scrollTop + $(this).height() + 60) >= $(this)[0].scrollHeight) {
	        //这里用 [ off_on ] 来控制是否加载 （这样就解决了 当上页的条件满足时，一下子加载多次的问题啦）
	        if (off_on) {
	            off_on = false;
	            page2++;
	            console.log("第"+page2+"页");
	            LoadingDataFn(2);
	        }
	    }
	});
	function fixed(num) {
        var nys= navigator.userAgent;
        var isAndroid = nys.indexOf('Android') > -1 || nys.indexOf('Adr') > -1; 
        var isIOS = !!nys.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 
        if(isAndroid){
            document.body.onscroll = function(e){
                var scrollT = document.body.scrollTop;
                if (scrollT > num) {
                    $('.tabBars').addClass('fixed-top');
                    $(".swiper3>.swiper-wrapper>.swiper-slide>div").css({"overflow":"auto"});
                }else {
                    $('.tabBars').removeClass('fixed-top');
                    $(".swiper3>.swiper-wrapper>.swiper-slide>div").scrollTop(0);//滚动条回到顶部
                    $(".swiper3>.swiper-wrapper>.swiper-slide>div").css({"overflow":"hidden"});
                }
            };
        }else if(isIOS) {
            $('.tabBars').addClass('sticky');
        }
    }
    fixed(heights);
})
