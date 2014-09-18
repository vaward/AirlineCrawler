var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.aircaraibes-usa.com') {
			for (var i = 0; i < routesList.data.length; i++) {
				dep = routesList.data[i].iataOrigine;
				arr = routesList.data[i].iataDestination;
				result += dep + '-' + arr + ',';
			}
		}
		return result;
	}
}
//alert(new CHECKData().getData('www.aircaraibes-usa.com'));