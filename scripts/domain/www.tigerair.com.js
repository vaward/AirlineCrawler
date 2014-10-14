/*
@url:http://www.tigerair.com/sg/en/
@name:»¢º½
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.tigerair.com') {
			var routes_table = marketInfo.MarketList;
			for (var i = 0; i < routes_table.length; i++) {
				dep = routes_table[i].Key;
				var arrs = routes_table[i].Value;
				for (var j= 0; j < arrs.length; j++) {
					result += dep + '-' + arrs[j].code + ',';
				}
			}
		}
		return result;
	}
}
//alert(new CHECKData().getData(window.location.host));