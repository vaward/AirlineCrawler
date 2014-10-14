/*
@url:https://www.etihadregional.com/en/index.html
@name:达尔文航空
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.etihadregional.com') {
			for (var ssw in groupDest) {
                for (var dp in groupDest[ssw]) {
                    var dep = dp;
                    var arrs = groupDest[ssw][dp];
                    for (var j = 0; j < arrs.length; j++) {
                        result += dep + "-" + arrs[j] + ",";
                    }
                }

            }
		}
		return result;
	}
}
//alert(new CHECKData().getData(window.location.host).length/8);