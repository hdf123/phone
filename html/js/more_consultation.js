$(function(){
	var nn=getRequest().index;
	state(getRequest().index);
	$(".tabBar>li").click(function(){
	    var xiabiao=$(this).index();
	    nn=xiabiao;
	    state(xiabiao)
	})
	function state(xiabiao){
		$(".preferentialk").hide();
		if(xiabiao==2){
			$(".preferentialk").show();
			$(".box").hide();
		    //最新优惠
		    for(var i=0;i<20;i++){
		    	$(".preferentialk").append('<a href="consulting.html?state='+nn+'&ind=正弘形城1号院洋房在售'+(i+1)+'号院高层优惠升级中">'
									+'<div>正弘形城1号院洋房在售'+(i+1)+'号院高层优惠升级中</div>'
									+'<div>'
										+'<span>07-21</span>'
										+'<i class="iconfont">&#xe642;</i>'
									+'</div>'
								+'</a>');
		    }
		}else{
			$(".box").show();
			//行业资讯、地产快讯
			var dom="";
			for(var i=0;i<3;i++){
				dom+='<a class="imgas" href="consulting.html?state='+nn+'&ind=正弘形城1号院洋房在售'+i+'号院高层优惠升级中">'
							+'<div>'
								+'<div>雅居乐产业扶贫第四站，1亿助力海南美丽乡村</div>'
								+'<p>2018-06-15</p>'
							+'</div>'
							+'<img src="" alt="" />'
						+'</a>'
						+'<a class="imgak" href="consulting.html?state='+nn+'&ind=正弘形城1号院洋房在售'+i+'号院高层优惠升级中">'
							+'<div>融侨悦澜庭—二期【都荟】入会享开盘钜惠！</div>'
							+'<div>优惠内容：77-124㎡（建面约）免装瞰景洋房荣耀面世首期3万起，临湖臻品轻松拥有临湖臻品轻松拥有临湖臻品轻松拥有拥...</div>'
							+'<p>2018-06-15</p>'
						+'</a>';
			}
			$(".box").html(dom);
		}
	    $(".tabBar>li").eq(xiabiao).addClass("selecteds");
	    $(".tabBar>li").eq(xiabiao).siblings().removeClass("selecteds");
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
	    	state(0);
	    }
	});
    /**
     * 上拉加载
     */
	var page = 1,off_on = false;//page：分页码;off_on：禁止重复加载
	//加载数据
	var LoadingDataFn = function(){
		console.log("上拉加载");
		var dom='';
		for(var i=0;i<30;i++){
			dom+='<div>'+(i+1)+'</div>'
		}
		$('.box').append(dom);
		off_on = true;
	};
	//初始化， 第一次加载
	$(document).ready(function() {
	    LoadingDataFn();
	});
	$('.box').scroll(function() {
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