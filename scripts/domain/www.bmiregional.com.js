var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.bmiregional.com') {
			$.ajax({
				type: "POST",
				url: "/Webservices/Airport.asmx/GetOriginAirports",
				dataType: "json",
				data: JSON.stringify({}),
				contentType: "application/json; charset=utf-8",
				success: function(g) {
					if (g.d) g = g.d;
					jQuery.each(g.Airports,
					function(z, a) {
						$.ajax({
							type: "POST",
							url: "/Webservices/Airport.asmx/GetDestinationAirports",
							data: JSON.stringify({
								airportcode: a.Code
							}),
							dataType: "json",
							contentType: "application/json; charset=utf-8",
							success: function(b) {
								if (b.d) b = b.d;
								jQuery.each(b.Airports,
								function(c, x) {
									result += a.Code + "-" + x.Code + ",";
								});
							},
							async: false
						})
					});
				},
				async: false
			});
		}
		return result;
	}
}
//alert(new CHECKData().getData(window.location.host));
