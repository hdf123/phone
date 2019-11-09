$(function(){
	/**
	 * 搜索
	 */
	$('.search').click(function (){
		location.href="search.html"
	});
	$(".contents").on("click",".contact>img",function(){
		$(".bounced_box").show();
	})
	$(".btns").click(function(){
		console.log($(".name").val());
		console.log($(".phone").val());
		$(".bounced_box").hide();
	})
	$(".bounced_box").click(function(event){
		$(this).hide();
		event.stopPropagation();
	})
	$(".bounced").click(function(event){
		event.stopPropagation();
	})
	
	/**
	 * 懒加载
	 */
	var page = 1,off_on = false;
	//加载数据
	var LoadingDataFn = function() {
	    var dom = '';
	    for (var i = 0; i <50; i++) {
	        dom +='<div>'+(i+1)+'</div>';
	    }
	    $('.contents').append(dom);
	    off_on = true;
	};
	//初始化， 第一次加载
	$(document).ready(function() {
	    LoadingDataFn();
	});
	$('.contents').scroll(function() {
	    //当时滚动条离底部60px时开始加载下一页的内容
	    if (($(this)[0].scrollTop + $(this).height() + 60) >= $(this)[0].scrollHeight) {
	        if (off_on) {
	            off_on = false;
	            page++;
	            console.log("第"+page+"页");
	            LoadingDataFn();
	        }
	    }
	});
})