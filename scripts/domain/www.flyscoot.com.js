/*
@url:http://www.flyscoot.com/index.php/zh/
@name: 酷航
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.flyscoot.com') {
			var cpd = $('#cityPairsData').text();
			eval("var cpda = " + cpd);
			for (var i = 0; i < cpda[0].length; i++) {
				var mk = cpda[0][i].markets;
				for (var j = 0; j < mk.length; j++) {
					var dep = mk[j].origin.station_code;
					var arrc = mk[j].destinations;
					for (var k = 0; k < arrc.length; k++) {
						var arrs = arrc[k].destinations;
						for (var l = 0; l < arrs.length; l++) {
							var arr = arrs[l].station_code;
							result += dep + "-" + arr + ",";
						}
					}
				}
			}
		}
		return result;
	}
}
//alert(new CHECKData().getData(window.location.host).length/8);

