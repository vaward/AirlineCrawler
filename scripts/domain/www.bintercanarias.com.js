/*
@url:https://www.bintercanarias.com/eng
@name:加那利航空公司
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.bintercanarias.com') {
			for (var i = 0; i < origins.length; i++) {				
				var dep = origins[i];
				var arrs = destinations[dep].split(",");
				for (var j = 0; j < arrs.length; j++) {
					var arr = arrs[j];
					result += dep + "-" + arr + ",";
				}
			}
		}
		return result;
	}
} 
//alert(new CHECKData().getData(window.location.host));

