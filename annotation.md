###说明
1.整体页面为了协调统一，样式都有微调；
2.新增more.html页面，搜索可返回；
3.img底色全部设置为0，取消底色；


分享和浮动图标js：ajax.js；
分享和浮动图标css：layouts.css


调用：html:
	<!--浮标（section标签里的最后）-->
	<a class="floata" href="home.html">
		<img src="../img/home.png" alt="" />
	</a>

	<!--右上角分享（在body最后）-->
	<div class="share_box">
		<img src="../img/guide.png" alt="" />
	</div>


js调用：
//	拖动图标
//	1.BuyNow.html页面
	floats($(".masa"),0);//名称，0禁止，1自由移动，2上下移动，3左右移动
	floats($(".masb"),0);

//	2.其他页面（buildings.html页面禁止拖动设置为0）
	floats($(".floata"),2);	


//	分享
	share($(".rights"));


