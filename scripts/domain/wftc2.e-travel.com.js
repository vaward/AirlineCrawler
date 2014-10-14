/*
@url:http://wftc2.e-travel.com/plnext/FPCairdolomiti/TimeTableSearchDispatcher.action?SITE=BAPRBAPR&LANGUAGE=GB
@name:¶àÂÞÃ×µÙº½¿Õ  www.airdolomiti.eu  timetable
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'wftc2.e-travel.com') {
			var html = setAirport.toString(); 
			var data = html.match(/route = .*/g)[0]; 
			eval("var "+data); 			
			for (var dp in route.AirDolomiti) {
				var dep = dp;
                var arrs = route.AirDolomiti[dp].departure;  
				for (var ap in arrs) {
					var arr = ap;
                    result += dep + "-" + arr + ",";
                }
            }
		}
		return result;
	}
}
//alert(new CHECKData().getData(window.location.host));
