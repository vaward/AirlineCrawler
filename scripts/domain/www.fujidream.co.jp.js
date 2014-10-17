/*
@url:http://www.fujidream.co.jp/
@name:富士梦幻航空
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.fujidream.co.jp') {			
			for (var i = 0; i < $('select[name=departureCity] option').length; i++) {
				$('select[name=departureCity] option[selected]').removeAttr("selected");
				$('select[name=departureCity] option:eq(' + i + ')').attr("selected", "true");
				$("select[name=departureCity]").change();
				var dep = $('select[name=departureCity]').val(); 
				for (var j = 0; j < $('select[name=arrivalCity] option').length; j++) {
					var arr = $('select[name=arrivalCity] option:eq(' + j + ')').val();
					result += dep + "-" + arr + ",";
				}
			}
		}
		return result;
	}
} 
//alert(new CHECKData().getData(window.location.host));

