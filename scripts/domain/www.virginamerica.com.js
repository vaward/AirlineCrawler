/*
@url:https://www.virginamerica.com/book
@name:Œ¨’‰√¿π˙∫Ωø’
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.virginamerica.com') {
			$.ajax({
				type: "GET",
				url: '/cms/config.json',
				datatype: 'json',
				success: function(data) {
					var da = (data.airportMapping);
					for (var dp in da) {
						var dep = dp;
						var arrs = da[dp].to;
						for(var ap in arrs){
							var arr = ap;
							result += dep + "-"+ arr+",";
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