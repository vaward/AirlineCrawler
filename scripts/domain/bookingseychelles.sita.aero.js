/*
@url:https://bookingseychelles.sita.aero/itd/itd
@name:塞舌尔航空
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'bookingseychelles.sita.aero') {
			var das = routes.split("}");
			for (var i = 0; i < das.length; i++) {
				var da = das[i].split("{");
				if (da[0].indexOf("A") != 0) {
					continue;
				}
				var dep = da[0].slice(1);
				var arrs = da[1].split(/y|n/);
				for (var j = 0; j < arrs.length; j++) {
					if (arrs[j].indexOf("A") != 0) {
						continue;
					}
					var arr = arrs[j].slice(1);
					result += dep + "-" + arr + ",";
				}
			}
		}
		return result;
	}
} 
//alert(new CHECKData().getData(window.location.host));

