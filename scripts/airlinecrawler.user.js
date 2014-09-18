// ==UserScript==
// @name        AirlineCrawler
// @namespace   com.vaward
// @description 抓取国际航空公司航线用于配置白名单
// @include     http://www.airmoldova.md/home-en/
// @include     http://book.flypeach.com/
// @include     http://www.airasia.com/cn/zh/home.page
// @include     http://www.aircaraibes-usa.com/
// @include     http://www.malindoair.com/
// @exclude     http://*.qunar.com/*
// @version     1.1
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
  }
  // 如果您想阻止默认点击动作
  // (例如链接转向)，使用下面这两条命令：
  event.stopPropagation();
  event.preventDefault();
}, true);
