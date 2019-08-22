$(function(){
	$(".contents>h3").html(getRequest().ind);
	$(".uus li").click(function(){
		location.reload();
	})
	for (i in data) {
		var aa='',as='',region=data[i].region;
		for(j in region){
			if(j==region.length-1){
				aa+=`${region[j]}`;
			}else{
				aa+=`${region[j]}&nbsp;`;
			}
		}
		if(data[i].state=="在售"){
			as=`<div class="state sell">${data[i].state}</div>`;
		}else if(data[i].state=="待售"){
			as=`<div class="state waiting">${data[i].state}</div>`;
		}else{
			as=`<div class="state">${data[i].state}</div>`;
		}
		$(".uuk").append(`<li class="kys">
				<img src=${data[i].img} alt="" />
				<div class="recommended_con">
					<div>${data[i].name}</div>
					<div>
						<div>${aa}</div>
						<div>${data[i].area}</div>
					</div>
					<div>
						${as}
						<div>南北通透</div>
						<div>配套成熟</div>
					</div>
					<div>售价待定</div>
				</div>
			</li>`);
	}
	$(".uuk").on("click",".kys",function(){
		localStorage.setItem('yz_building',JSON.stringify(data[$(this).index()]));//转为json字符串
		location.href="buildings.html";
	})
})