/*
@url:http://book.flypeach.com/
@name:¿÷Ã“∫Ωø’
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'book.flypeach.com') {
			for (e = 0; e < arrDestination.length; e++) {
				var a = arrDestination[e].split('|');
				result += a[0] + '-' + a[2] + ',';
			}
		}
		return result;
	}
}
//alert(new CHECKData().getData(window.location.host));
