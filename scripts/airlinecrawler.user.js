// ==UserScript==
// @name        AirlineCrawler
// @namespace   com.vaward
// @description 抓取国际航空公司航线用于配置白名单
// @include     http://www.airmoldova.md/home-en/
// @include     http://book.flypeach.com/
// @include     http://www.airasia.com/cn/zh/home.page
// @include     http://www.aircaraibes-usa.com/
// @include     http://www.malindoair.com/
// @include     http://www.srilankan.com/
// @include     http://flights.thomson.co.uk/thomson/en-GB/timetable/default
// @include     http://www.nokair.com/nokconnext/aspx/flightschedule.aspx
// @include	 http://fly.airalgerie.dz/CAB/IBE/SearchAvailability.aspx
// @include	 http://www.flymango.com/
// @include	 http://www.tuifly.com/en/flug/timetable.jsp
// @include	 http://wftc2.e-travel.com/plnext/FPCairdolomiti/TimeTableSearchDispatcher.action
// @include	 http://customer3.videcom.com/ProflightZambia/VARS/Public/CustomerPanels/*
// @include	 http://www.bmiregional.com/en/
// @include	 http://www.goair.in/
// @include	 http://flyorientthai.com/en/home/*
// @include	 http://www.eastarjet.com/
// @include	 http://www.skytrans.com.au/
// @include	 https://booking.xpressair.co.id/EAStart.aspx?New=1&Language=en&CurrencyOverride=IDR
// @include	 http://www.laoairlines.com/
// @include	 https://www.adria.si/en/
// @include	 http://flyairone.com/EN-EU/
// @include	 https://*.sita.aero/itd/itd
// @include	 http://us.aircalin.com/
// @include	 https://www.bintercanarias.com/eng
// @include	 http://www.aircosta.in/ebooking/home/default.aspx
// @include	 https://www.meridiana.it/home/index/en/
// @include	 http://book.hkexpress.com/
// @include	 http://www.tigerair.com/sg/en/
// @include	 https://www.virginamerica.com/book
// @include	 http://www.flybe.com/route-map/
// @include	 http://www.amaszonas.com/
// @include	 http://www.airarabia.com/en
// @include	 http://global.shenzhenair.com/zh/main.jsp
// @include	 http://www.liat.com/
// @include	 http://www.atlasjet.com/en
// @include	 https://www.etihadregional.com/en/index.html
// @include	 http://www.flyscoot.com/index.php/zh/
// @include	 http://www.twayair.com/service/reserve_route_Global.aspx
// @exclude     http://*.qunar.com/*
// @version     1.3
// @grant       none
// ==/UserScript==
/*

    http://wftc2.e-travel.com/plnext/FPCairdolomiti/TimeTableSearchDispatcher.action   多罗米蒂航空 www.airdolomiti.eu  timetable
	http://customer3.videcom.com/ProflightZambia/VARS/Public/CustomerPanels/Requirements.aspx?currency=USD  赞比亚航空 
	http://www.bmiregional.com/en/   英伦区域航空
	http://www.goair.in/ 印度飞天航
	http://www.flyorientthai.com 泰国东方航空
	www.eastarjet.com  韩国易斯达航空	
	http://www.skytrans.com.au/  泽天航空
	www.xpressair.co.id	Xpress航空
	www.laoairlines.com   老挝航空
	www.adria.si 亚德里亚航空公司
	flyairone.com Air One 航空 
	www.airnamibia.com.na 纳米比亚航空	 https://airnamibia.sita.aero/itd/itd
	http://www.airseychelles.com/en/home/index.php  塞舌尔航空 https://bookingseychelles.sita.aero/itd/itd
	http://us.aircalin.com/  
	https://www.bintercanarias.com/eng
	www.aircosta.in 考斯达航空
	https://www.meridiana.it
	book.hkexpress.com  香港快运
	www.tigerair.com  虎航
	www.virginamerica.com 维珍美国
	http://www.flybe.com/route-map/  

	http://www.amaszonas.com/
	http://www.airarabia.com/en   阿拉伯航空  
	http://global.shenzhenair.com/zh/main.jsp   深圳航空
	http://www.liat.com/  背风群岛航空
	http://www.atlasjet.com/	 阿特拉斯喷气航空	
	https://www.etihadregional.com/en/index.html  达尔文航空
	http://www.flyscoot.com/index.php/zh/  酷航
	www.twayair.com		德威航空	

*/

var domain = window.location.host;
var oHead = document.getElementsByTagName('HEAD').item(0);
var oScript = document.createElement('script');
oScript.type = 'text/javascript';
oScript.src = 'http://bait.coop.qunar.com/scripts/domain/'+domain+'.js';
oHead.appendChild(oScript);

document.addEventListener('dblclick', function (event) {
  // event.target 是被点击的元素
  // 把你的代码放在这里
  var airlinetext = document.getElementById('airlinetext');
  if (airlinetext) {
    var check = new CHECKData();    
    airlinetext.innerHTML = check.getData(domain);
    return;
  } else {    
    var textarea = document.createElement('textarea');
    textarea.id="airlinetext";
    textarea.style.width = "100%";
	  textarea.style.height = "200px";
	  textarea.style.fontSize = '14px';
    document.body.insertBefore(textarea, document.body.firstChild);
  }
  // 如果您想阻止默认点击动作
  // (例如链接转向)，使用下面这两条命令：
  event.stopPropagation();
  event.preventDefault();
}, true);
