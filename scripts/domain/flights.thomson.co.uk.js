var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'flights.thomson.co.uk') {
			for (var d = 0; d < tt_destinationArray.length - 1; d++) {
                var aarr = tt_connectionArray[d];
                if (aarr.length == 0) {                   
                    continue;
                }
                for (var a = 0; a < aarr.length - 1; a++) {
                    result += tt_destinationArray[d] + "-" + aarr[a] + ",";
                }
            }
		}
		return result;
	}
}
//alert(new CHECKData().getData('flights.thomson.co.uk'));