/*
@url:http://flyorientthai.com/en/home/?Language=Eng
@name:Ì©¹ú¶«·½º½¿Õ
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'flyorientthai.com') {
			for (var i = 1; i < $('#CityFrom option').length; i++) {
				$('#CityFrom option[selected]').removeAttr("selected");
				$('#CityFrom option:eq(' + i + ')').attr("selected", "true");
				ChangeCityTo();
				var dep = $('#CityFrom').val(); //alert(dep);
				for (var j = 0; j < $('#CityTo option').length; j++) {
					var arr = $('#CityTo option:eq(' + j + ')').val();
					result += dep + "-" + arr + ",";
				}
			}
		}
		return result;
	}
} 
//alert(new CHECKData().getData(window.location.host));

