$(function(){
	/**
	 * 拖动
	 */
	floats($(".floata"),2);
//	分享
	share($(".rights"));
	
	if(getRequest().state==0){
		$(".centers").html("行业资讯");
	}else if(getRequest().state==1){
		$(".centers").html("地产快讯");
	}else{
		$(".centers").html("最新优惠");
	}
	console.log(getRequest());
	
	$(".contents>h3:eq(0)").html(getRequest().ind);
	
	$(".uus li").click(function(){
		location.reload();
	})
	for (i in data) {
		var aa='',as='',region=data[i].region;
		for(j in region){
			if(j==region.length-1){
				aa+=region[j];
			}else{
				aa+=region[j]+'&nbsp;';
			}
		}
		if(data[i].state=="在售"){
			as='<div class="state sell">'+data[i].state+'</div>';
		}else if(data[i].state=="待售"){
			as='<div class="state waiting">'+data[i].state+'</div>';
		}else{
			as='<div class="state">'+data[i].state+'</div>';
		}
		$(".uuk").append('<li class="kys">'
				+'<img src='+data[i].img+' alt="" />'
				+'<div class="recommended_con">'
					+'<div>'+data[i].name+'</div>'
					+'<div>'
						+'<div>'+aa+'</div>'
						+'<div>'+data[i].area+'</div>'
					+'</div>'
					+'<div>'
						+as
						+'<div>南北通透</div>'
						+'<div>配套成熟</div>'
					+'</div>'
					+'<div>售价待定</div>'
				+'</div>'
			+'</li>');
	}
	$(".uuk").on("click",".kys",function(){
		localStorage.setItem('yz_building',JSON.stringify(data[$(this).index()]));//转为json字符串
		location.href="buildings.html";
	})
	
	var mySwiper6 = new Swiper('.swiper6', {
		//loop : true,
		observer:true,//修改swiper自己或子元素时，自动初始化swiper
		observeParents:true,//修改swiper的父元素时，自动初始化swiper
		pagination : '.swiper-pagination',
		paginationType : 'fraction',
    	
	})
	
})