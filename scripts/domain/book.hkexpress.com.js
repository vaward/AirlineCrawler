/*
@url:http://book.hkexpress.com/
@name:œ„∏€øÏ‘À
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'book.hkexpress.com') {		
			for (var i=0;i<myVar.routes.length ;i++ )
			{
				var dep = myVar.routes[i].ori;
				var arr = myVar.routes[i].dest;
				result += dep+"-"+arr+",";
			}
		}
		return result;
	}
}
//alert(new CHECKData().getData(window.location.host));
