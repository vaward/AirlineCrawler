/*
@url:https://www.meridiana.it/home/index/en/
@name:×ÓÎçº½¿Õ
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.meridiana.it') {
			$.ajax({
				type: "GET",
				url: '../../GetMappa',
				datatype: 'json',
				success: function(data) {
					var da = (data.Cities);
					for (var i = 0; i < da.length; i++) {
						if (da[i].Airports) {
							for (var j = 0; j < da[i].Airports.length; j++) {
								if (da[i].Airports[j].Routes.length != 0) {
									for (var k = 0; k < da[i].Airports[j].Routes.length; k++) {
										var dao = da[i].Airports[j].Routes[k];
										result += dao.DepAptCode + "-" + dao.ArrAptCode + ",";
									}
								} else { //alert(da[i].Airports[j].IATACode);
								}
							}
						} else { //alert(da[i]);
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

