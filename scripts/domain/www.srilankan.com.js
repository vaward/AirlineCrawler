/*
@url:http://www.srilankan.com/
@name:Àπ¿Ô¿ºø®
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.srilankan.com') {
			for (var i = 0; i < departureairports.length; i++) {
				code = departureairports[i].code;
				arrs = eval("arrivalairportsfrom" + code);				
				for (var j = 0; j < arrs.length; j++) {					
					result+= code + "-" + arrs[j].code + ",";
				}				
			}
		}
		return result;
	}
}
//alert(new CHECKData().getData(window.location.host));
