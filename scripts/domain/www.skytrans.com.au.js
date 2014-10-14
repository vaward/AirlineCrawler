/*
@url:http://www.skytrans.com.au/
@name:泽天航空
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.skytrans.com.au') {			
			for (var i=1; i< FromList.length ; i++)
			{
				var dep = FromList[i];
				var arrs =eval("From"+dep);
				for (var j = 0; j<arrs.length ;j++ )
				{
					var arr = arrs[j];
					result+=dep+"-"+arr+",";
				}
			}
		}
		return result;
	}	
}
//alert(new CHECKData().getData(window.location.host));
