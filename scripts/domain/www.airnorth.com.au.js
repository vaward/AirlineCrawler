/*
@url:http://www.airnorth.com.au/
@name:澳大利亚北部航空
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.airnorth.com.au') {
			for (var i = 1; i < $('#ddlOrigin option').length; i++) {
				$('#ddlOrigin option[selected]').removeAttr("selected");
				$('#ddlOrigin option:eq(' + i + ')').attr("selected", "true");
				$('#ddlOrigin').change();
				var dep = $('#ddlOrigin').val(); //alert(dep);
				for (var j = 1; j < $('#ddlDestination option').length; j++) {
					var arr = $('#ddlDestination option:eq(' + j + ')').val();
					result += dep + "-" + arr + ",";
				}
			}
		}
		return result;
	}
} 
//alert(new CHECKData().getData(window.location.host));

