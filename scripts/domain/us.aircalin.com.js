var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'us.aircalin.com') {		
			for (var i=0;i<city_pairs.length ;i++ )
			{
				var dep = city_pairs[i].o_code;
				var arr = city_pairs[i].d_code;
				result += dep+"-"+arr+",";
			}
		}
		return result;
	}
}
//alert(new CHECKData().getData(window.location.host));
