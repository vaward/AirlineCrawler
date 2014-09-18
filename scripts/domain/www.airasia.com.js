var CHECKData = function() {	
	this.getData = function(domain) {
		var result;
		if (domain == 'www.airasia.com'){
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
