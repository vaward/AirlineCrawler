/*
@url:http://www.airarabia.com/en
@name:°¢À­²®º½¿Õ
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.airarabia.com') {
			for (var i = 0; i < origins.length; i++) {
				if(!origins[i]){					
					continue;
				}
				var dep = airports[i].code;
				for (var j = 0; j < origins[i].length; j++) {
					var arrindex = origins[i][j][0];
					arr = airports[arrindex].code;
					result += dep + "-" + arr + ",";
				}
			}
		}
		return result;
	}
}
//alert(new CHECKData().getData(window.location.host));
