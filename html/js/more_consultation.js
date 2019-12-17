$(function(){
	/**
	 * 拖动
	 */
	floats($(".floata"),2);
	var inds=getRequest().index;
	if(inds==undefined){
		inds=0;
	}
	$(".box>li").eq(inds).css("display","block");
	$(".tabBar>li").click(function(){
	    var xiabiao=$(this).index();
	    $(".box>li").eq(xiabiao).css("display","block").siblings().css("display","none");
	    $(".tabBar>li").eq(xiabiao).addClass("selecteds");
	    $(".tabBar>li").eq(xiabiao).siblings().removeClass("selecteds");
	})
	function fun1(xiabiao){
		for(var i=0;i<3;i++){
			$(".industry").append('<a class="imgas" href="consulting.html?state='+xiabiao+'&ind=正弘形城1号院洋房在售'+i+'号院高层优惠升级中">'
									+'<div>'
										+'<div>'+xiabiao+'雅居乐产业扶贫第四站，1亿助力海南美丽乡村</div>'
										+'<p>2018-06-15</p>'
									+'</div>'
									+'<img src="" alt="" />'
								+'</a>'
								+'<a class="imgak" href="consulting.html?state='+xiabiao+'&ind=正弘形城1号院洋房在售'+i+'号院高层优惠升级中">'
									+'<div>融侨悦澜庭—二期【都荟】入会享开盘钜惠！</div>'
									+'<div>优惠内容：77-124㎡（建面约）免装瞰景洋房荣耀面世首期3万起，临湖臻品轻松拥有临湖臻品轻松拥有临湖臻品轻松拥有拥...</div>'
									+'<p>2018-06-15</p>'
								+'</a>');
		}
	}
	function fun2(xiabiao){
		for(var i=0;i<3;i++){
			$(".estate").append('<a class="imgas" href="consulting.html?state='+xiabiao+'&ind=正弘形城1号院洋房在售'+i+'号院高层优惠升级中">'
									+'<div>'
										+'<div>'+xiabiao+'雅居乐产业扶贫第四站，1亿助力海南美丽乡村</div>'
										+'<p>2018-06-15</p>'
									+'</div>'
									+'<img src="" alt="" />'
								+'</a>'
								+'<a class="imgak" href="consulting.html?state='+xiabiao+'&ind=正弘形城1号院洋房在售'+i+'号院高层优惠升级中">'
									+'<div>融侨悦澜庭—二期【都荟】入会享开盘钜惠！</div>'
									+'<div>优惠内容：77-124㎡（建面约）免装瞰景洋房荣耀面世首期3万起，临湖臻品轻松拥有临湖臻品轻松拥有临湖臻品轻松拥有拥...</div>'
									+'<p>2018-06-15</p>'
								+'</a>');
		}
	}
	function fun3(xiabiao){
	    for(var i=0;i<20;i++){
	    	$(".preferential").append('<a href="consulting.html?state='+xiabiao+'&ind=正弘形城1号院洋房在售'+(i+1)+'号院高层优惠升级中">'
										+'<div>'+xiabiao+'正弘形城1号院洋房在售'+(i+1)+'号院高层优惠升级中</div>'
										+'<div>'
											+'<span>07-21</span>'
											+'<i class="iconfont">&#xe642;</i>'
										+'</div>'
									+'</a>');
	    }
	}
	/**
	 * 搜索
	 */
	$('.search').on('keypress', function (e){
	    var keycode = e.keyCode;
	    var texts=$(this).val();
	　　//keycode是键码，13也是电脑物理键盘的 enter 
	    if(keycode == '13') {
	    	e.preventDefault();
	    	$('.search').blur();
	    	console.log("texts="+texts);
	    	$(".tabBar").hide();
	    	//根据搜索返回结果定义类型并渲染到页面
	    	$(".box>li").eq(xiabiao).css("display","block").siblings().css("display","none");
	    }
	});
    /**
     * 上拉加载
     */
     $(document).ready(function() {
     	LoadingDataFn1();
     	LoadingDataFn2();
     	LoadingDataFn3();
     });
     var page1=1,page2=1,page3=1;//分页码
     var off_on1=false,off_on2=false,off_on3=false;//禁止重复加载
	//加载数据1
	var LoadingDataFn1 = function(){
		console.log("上拉加载");
		fun1(0);
		off_on1 = true;
	};
	//初始化， 第一次加载
	$('.industry').scroll(function() {
	    //当时滚动条离底部60px时开始加载下一页的内容
	    if (($(this)[0].scrollTop + $(this).height() + 60) >= $(this)[0].scrollHeight) {
	        //这里用 [ off_on1 ] 来控制是否加载 （这样就解决了 当上页的条件满足时，一下子加载多次的问题啦）
	        if (off_on1) {
	              off_on1 = false;
	              page1++;
	              console.log("第"+page1+"页");
	              LoadingDataFn1();  //调用执行上面的加载方法
	        }
	    }
	});
	//加载数据2
	var LoadingDataFn2 = function(){
		console.log("上拉加载");
		fun2(1);
		off_on2 = true;
	};
	$('.estate').scroll(function() {
	    if (($(this)[0].scrollTop + $(this).height() + 60) >= $(this)[0].scrollHeight) {
	        if (off_on2) {
	              off_on2 = false;
	              page2++;
	              console.log("第"+page2+"页");
	              LoadingDataFn2();
	        }
	    }
	});
	//加载数据3
	var LoadingDataFn3 = function(){
		console.log("上拉加载");
		fun3(2);
		off_on3 = true;
	};
	$('.preferential').scroll(function() {
	    if (($(this)[0].scrollTop + $(this).height() + 60) >= $(this)[0].scrollHeight) {
	        if (off_on3) {
	              off_on3 = false;
	              page3++;
	              console.log("第"+page3+"页");
	              LoadingDataFn3();
	        }
	    }
	});
})