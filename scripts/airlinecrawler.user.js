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
// @include	 http://wftc2.e-travel.com/plnext/FPCairdolomiti/TimeTableSearchDispatcher.action*
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
// @include	 https://bookingseychelles.sita.aero/itd/itd*
// @include	 https://airnamibia.sita.aero/itd/itd*
// @include	 http://us.aircalin.com/billet-noumea.php?cc=USA*
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
// @include	 http://www.spirit.com/Default.aspx
// @include	 http://www.skymark.co.jp/ja/
// @include	 http://www.nordavia.ru/en/
// @include	 http://www.malmoaviation.se/en
// @include	 http://www.luxair.lu/cms/*
// @include	 http://www.gmairlines.com/
// @include	 http://www.fujidream.co.jp/
// @include	 http://www.buddhaair.com/
// @include	 http://www.blueairweb.com/destinations/destinations-map
// @include	 http://www.airnorth.com.au/
// @include	 http://www.airblue.com/sched/schedule_popup.asp
// @include	 http://wowair.co.uk/
// @include	 https://primeraair.com/searchFlights.do?lang=en
// @include	 http://montenegroairlines.com/
// @exclude     http://*.qunar.com/*
// @version     1.5
// @grant       none
// ==/UserScript==

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
	if(document.location.protocol=="https:"){
		textarea.innerHTML="该网站是https的，chrome 用户不支持，firefox 用户，注意地址栏左边提示，可能需要点击选择【临时解除保护此页】";
	}
  }
  // 如果您想阻止默认点击动作
  // (例如链接转向)，使用下面这两条命令：
  event.stopPropagation();
  event.preventDefault();
}, true);
