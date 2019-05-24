/**
 * 咨询
 */
var consulting=[{
	title:"10强房企年内拿地3514亿，海外融资同比翻倍",
	time:"2018年5月9日",
	img:"../../img/carda.png"
},{
	title:"11强房企年内拿地3514亿，海外融资同比翻倍",
	time:"2018年5月9日",
	img:"../../img/carda.png"
},{
	title:"12强房企年内拿地3514亿，海外融资同比翻倍",
	time:"2018年5月9日",
	img:"../../img/carda.png"
},{
	title:"13强房企年内拿地3514亿，海外融资同比翻倍",
	time:"2018年5月9日",
	img:"../../img/carda.png"
}]
/**
 * 楼盘
 */
var data=[{
	img:'../../img/carda.png',
	name:'郑地美景东望1',
	region:['住宅','郑东新区'],
	mianji:'建面107-400㎡',
	state:"在售",
	features:['小户型','南北通透','配套成熟'],
	price:'售价待定',
	address:"金岱产业园区临近在建地铁4号线",
	area:"建面71-124㎡"
	
},{
	img:'../../img/carda.png',
	name:'正商善水上镜2',
	region:['郑东新区','郑东新区'],
	mianji:'建面180-203㎡',
	state:"待售",
	features:['绿化率高','车位充足'],
	price:'32000元/㎡',
	address:"金岱产业园区临近在建地铁4号线",
	area:"建面72-124㎡"
},{
	img:'../../img/carda.png',
	name:'世茂云尚城3',
	region:['住宅','管城回族区'],
	mianji:'建面43-133㎡',
	state:"售罄",
	features:['小户型','车位充足','近地铁'],
	price:'14000元/㎡',
	address:"金岱产业园区临近在建地铁4号线",
	area:"建面73-124㎡"
},{
	img:'../../img/carda.png',
	name:'亚新茉莉公馆4',
	region:['郑东新区','郑东新区'],
	mianji:'建面130-220㎡',
	state:"售罄",
	features:['品牌房企','配套成熟','绿化率高'],
	price:'37000元/㎡',
	address:"金岱产业园区临近在建地铁4号线",
	area:"建面74-124㎡"
},{
	img:'../../img/carda.png',
	name:'亚新茉莉公馆5',
	region:['郑东新区','郑东新区'],
	mianji:'建面130-220㎡',
	state:"售罄",
	features:['品牌房企','配套成熟','绿化率高'],
	price:'37000元/㎡',
	address:"金岱产业园区临近在建地铁4号线",
	area:"建面75-124㎡"
},{
	img:'../../img/carda.png',
	name:'亚新茉莉公馆6',
	region:['郑东新区','郑东新区'],
	mianji:'建面130-220㎡',
	state:"售罄",
	features:['品牌房企','配套成熟','绿化率高'],
	price:'37000元/㎡',
	address:"金岱产业园区临近在建地铁4号线",
	area:"建面76-124㎡"
}]
/**
 * 地图标记
 */
var coordinates=[{
	title: "商鼎路心怡路",
	province: "河南省",
	city: "郑州市",
	point:{lng: 113.777119,lat: 34.761241}
},{
	title: "郑州高铁汽车枢纽站",
	province: "河南省",
	city: "郑州市",
	point:{lng: 113.787367, lat: 34.767826}
},{
	title:"金水东路心怡路",
	province: "河南省",
	city: "郑州市",
	point:{lng: 113.77547, lat: 34.775194}
},{
	title:"康平路康宁街",
	province: "河南省",
	city: "郑州市",
	point:{lng: 113.768604, lat: 34.757379}
},{
	title: "郑州高铁长途汽车枢纽站",
	province: "河南省",
	city: "郑州市",
	point:{lng: 113.787614, lat: 34.767582}
},{
	title: "东风南路公交站",
	province: "河南省",
	city: "郑州市",
	point:{lng: 113.77341, lat: 34.770666}
},{
	title: "东风南路熊儿河路",
	province: "河南省",
	city: "郑州市",
	point:{lng: 113.768269, lat: 34.781789}
},{
	title: "高铁汽车站",
	province: "河南省",
	city: "郑州市",
	point:{lng: 113.790527, lat: 34.768235}
},{
	title: "熊儿河路众旺路",
	province: "河南省",
	city: "郑州市",
	point:{lng: 113.763213, lat: 34.781053}
},{
	title: "郑州东站",
	province: "河南省",
	city: "郑州市",
	point:{lng: 113.776981, lat: 34.766224}
}]
/**
 * 
 */
var region=[{
	title:"二七区",
	province: "河南省",
	city: "郑州市",
	point:{lng:113.648709, lat:34.730333}
},{
	title:"中原区",
	province: "河南省",
	city: "郑州市",
	point:{lng:113.619478,lat:34.754322}
},{
	title: "郑东新区",
	province: "河南省",
	city: "郑州市",
	point:{lng:113.767007, lat:34.750909}
},{
	title: "管城区",
	province: "河南省",
	city: "郑州市",
	point:{lng:113.69445,lat:34.767976}
},{
	title: "金水区",
	province: "河南省",
	city: "郑州市",
	point:{lng:113.668462,lat:34.802987}
},{
	title: "中牟县",
	province: "河南省",
	city: "郑州市",
	point:{lng:113.982366, lat:34.723276}
},{
	title: "惠济区",
	province: "河南省",
	city: "郑州市",
	point:{lng:113.621157, lat:34.873284}
},{
	title: "航空港区",
	province: "河南省",
	city: "郑州市",
	point:{lng:113.835949, lat:34.563851}
},{
	title: "高新区",
	province: "河南省",
	city: "郑州市",
	point:{lng:113.568393, lat:34.811359}
},{
	title: "经开区",
	province: "河南省",
	city: "郑州市",
	point:{lng:113.749332, lat:34.728195}
},{
	title: "荥阳市",
	province: "河南省",
	city: "郑州市",
	point:{lng:113.388271, lat:34.794048}
},{
	title: "新郑市",
	province: "河南省",
	city: "郑州市",
	point:{lng:113.744135,lat:34.402005}
},{
	title: "上街市",
	province: "河南省",
	city: "郑州市",
	point:{lng:113.315325,lat:34.809171}
},{
	title: "周边地区",
	province: "河南省",
	city: "郑州市",
	point:{lng:113.281867,lat:34.62783}
},{
	title: "平原地区",
	province: "河南省",
	city: "郑州市",
	point:{lng:113.716503,lat:34.996275}
}]
