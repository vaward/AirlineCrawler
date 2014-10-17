/*
@url:http://www.spirit.com/Default.aspx
@name:精神航空
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.spirit.com') {
			for (var i = 1; i < $('#departCityCodeSelect option').length; i++) {
				$('#departCityCodeSelect option[selected]').removeAttr("selected");
				$('#departCityCodeSelect option:eq(' + i + ')').attr("selected", "true");
				$('#departCityCodeSelect').change();
				var dep = $('#departCityCodeSelect').val(); //alert(dep);
				for (var j = 1; j < $('#destCityCodeSelect option').length; j++) {
					var arr = $('#destCityCodeSelect option:eq(' + j + ')').val();
					result += dep + "-" + arr + ",";
				}
			}
		}
		return result;
	}
} 
//alert(new CHECKData().getData(window.location.host));

