/*
@url:http://www.airmoldova.md/home-en/
@name:摩尔多瓦航空
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.airmoldova.md') {
			for (dep in dest_data) {
				var arrobj = (dest_data[dep].dest);
				for (arr in arrobj) {
					result += dep + '-' + arr + ',';
				}
			}
		}
		return result;
	}
}
//alert(new CHECKData().getData(window.location.host));