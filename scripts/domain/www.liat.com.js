var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.liat.com') {
			var routes_table = SKYSALES.Resource.marketInfo.MarketList;
			for (ap in routes_table) {
				dep = ap;
				for (var i = 0; i < routes_table[dep].length; i++) {
					result += dep + '-' + routes_table[dep][i].code + ',';
				}
			}
		}
		return result;
	}
}
//alert(new CHECKData().getData('www.liat.com'));