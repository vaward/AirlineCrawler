/*
@url:http://www.eastarjet.com   
@name:韩国易斯达航空
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.eastarjet.com') {
			var stations = getStations();
			for( var i = 0 ; i < stations.length;i++){
				var dep = stations[i].stationCode;
				var arrs = stations[i].targetStations.split(";");
				for(var j = 0 ; j < arrs.length;j++){
					result += dep + "-" + arrs[j] + ",";
				}
			}
		}
		return result;
	}
} 
//alert(new CHECKData().getData(window.location.host).length/8);

