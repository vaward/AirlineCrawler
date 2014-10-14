/*
@url:http://www.nokair.com/nokconnext/aspx/flightschedule.aspx
@name:飞鸟航空
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.nokair.com') {
			for (ap in routes_table) {
				dep = ap;
				for (var i = 0; i < routes_table[dep].length; i++) {
					result+= dep + "-" + routes_table[dep][i].code + ",";
				}
			}
		}
		return result;
	}
}
//alert(new CHECKData().getData(window.location.host));
