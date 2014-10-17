/*
@url:http://www.luxair.lu/cms/Luxair-Luxembourg-Airlines?p=EN,17652,461,,1,,
@name:卢森堡航空
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.luxair.lu') {
			$.ajax({
				type: "GET",
				url: '../iws/rest/routeSite/listRouteFromSite/FLIGHTS_LUXAIR_LU/en',
				datatype: 'json',
				success: function(data) {
					if (data) data = data.List
					for (var i = 0; i < data.length; i++) {
						var dep = data[i].origin.iata;
						var arr = data[i].destination.iata;
						result += dep + "-" + arr + ",";
					}
				},
				error: function(data) {},
				async: false
			});
		}
		return result;
	}
} 
//alert(new CHECKData().getData(window.location.host));

