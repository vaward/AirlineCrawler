/*
@url:https://flyairone.com/EN-EU/
@name: Air One 航空  过期|不支持
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'flyairone.com') {
			/*var routes_table = skySalesJson.marketInfo.MarketList;
			for (ap in routes_table) {
				dep = ap;
				for (var i = 0; i < routes_table[dep].length; i++) {
					result += dep + '-' + routes_table[dep][i].code + ',';
				}
			}*/
			result = "搜索很多航司数据组合，无法获得suggest";
		}
		return result;
	}
}
//alert(new CHECKData().getData(window.location.host));