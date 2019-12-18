$(function(){
	/**
	 * 拖动
	 */
	floats($(".floata"),2);
//	分享
	share($(".rights"));
//选项卡切换
	var inds=0;
	$('.list_tab>li').on('click', function() {
		$(this).addClass("act").siblings().removeClass("act");
		inds = $(this).index();
		var mm=10+(100/4*inds);
		$('.list_tab>div').animate({ 'left': mm + '%' }, 300, function() {
			funk(inds,0);
		});
	})
	if(getRequest().region==undefined||getRequest().region==null){
		$(".region span").html("区域");
	}else{
		$(".region span").html(getRequest().region);
	}
	/**
	 * 分页
	 */
	var page = 1,off_on = false;//page：分页码;off_on：禁止重复加载
	//加载数据
	var LoadingDataFn = function(){
		funk(inds,1);
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
	
	
	function funk(ind,sta){
		console.log(ind);
		var ksk='',ks='';
		for(i in data){
			if(i<3){
				ksk='<div class="lead">'+(Number(i)+1)+'</div>';
			}else if(i<10){
				ksk='<div class="befores">'+(Number(i)+1)+'</div>';
			}else{
				ksk='';
			}
			ks+='<a class="building_box" href="javascript:;">'
									+'<div>'
										+'<img src='+data[i].img+' alt="" />'
										+ksk
									+'</div>'
									+'<div>'
										+'<h4>'+ind+data[i].name+'</h4>'
										+'<ul>'
											+'<li>'+data[i].region[1]+'</li>'
											+'<li>'+data[i].area+'</li>'
										+'</ul>'
										+'<p>热门指数: '+data[i].heat+'</p>'
										+'<p>'+data[i].price+'</p>'
									+'</div>'
								+'</a>';
		}
		if(sta==0){
			$(".contents").html(ks);
		}else{
			$(".contents").append(ks);
		}
	}
})
