var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'booking.xpressair.co.id') {
			var map = [];
			var opt = document.getElementById("ctl00_ContentPlaceHolder1_Origin").options;
			for (var i = 1; i < opt.length; i++) {
				var key = opt[i].value;
				var value = opt[i].text.slice( - 3);
				map[key] = value;
			}
			for (var i = 0; i < routes.length; i++) {
				var da = routes[i].split("-");
				var dep = map[da[0]];
				var arr = map[da[1]];
				if (dep && arr) result += dep + "-" + arr + ",";
			}
		}
		return result;
	}
}
alert(new CHECKData().getData(window.location.host));
