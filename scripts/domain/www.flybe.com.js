var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.flybe.com') {
			$.ajax({
				type: "GET",
				url: '../cam/routesRouteInformation.action',
				datatype: 'json',
				success: function(data) {			
					eval("var da="+data);
					for (var dp in da) {
						var dep = dp;
						for (var i = 0; i < da[dp].length; i++) {
							var arr = da[dp][i].arvAirportCode;
							result += dep + "-" + arr + ",";
						}
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
