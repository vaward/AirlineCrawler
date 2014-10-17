/*
@url:http://wowair.co.uk/
@name:WOW航空
*/
var CHECKData = function() {
	this.getData = function(domain) {		
		if (domain == 'wowair.co.uk') {
			jQuery.ajax({
				type: "GET",
				url: 'https://api.wowair.com/api/v1/routes.json',
				data: {},
				dataType: "jsonp",
				jsonp: "callback",
				contentType: "application/json; charset=utf-8",
				success: function(deps) {					
					for (var i = 0; i < deps.length; i++) {
						jQuery.ajax({
							type: "GET",
							url: 'https://api.wowair.com/api/v1/routes.json',
							data: {
								origin: deps[i].origin
							},
							dataType: "jsonp",
							jsonp: "callback",
							contentType: "application/json; charset=utf-8",
							success: function(route) {	
									alert(route.length);
								for (var j = 0; j < route.length; j++) {
									var result = "";									
									var dep = route[j].origin;
									var arr = route[j].destination;
									result += dep + "-" + arr + ",";
									$("#airlinetext").append(result);
								}
							},							
							async: false
						});
					}
				},				
				async: false
			});
		}
		return "";
	}
}
//alert(new CHECKData().getData(window.location.host));
