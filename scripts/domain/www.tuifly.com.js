/*
@url:http://www.tuifly.com/en/flug/timetable.jsp 
@name:途易飞航空
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.tuifly.com') {
			for (var d = 0; d < destinationArray.length - 1; d++) {
                var aarr = connectionArray[d];
                if (aarr.length == 0) {                   
                    continue;
                }
                for (var a = 0; a < aarr.length - 1; a++) {
                    result += destinationArray[d] + "-" + aarr[a] + ",";
                }
            }
		}
		return result;
	}
}
//alert(new CHECKData().getData(window.location.host));