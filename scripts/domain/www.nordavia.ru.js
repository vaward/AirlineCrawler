/*
@url:http://www.nordavia.ru/en/
@name:诺达维亚航空
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.nordavia.ru') {
			for (var i = 1; i < $('#origin option').length; i++) {
				$('#origin option[selected]').removeAttr("selected");
				$('#origin option:eq(' + i + ')').attr("selected", "true");
				$('#origin').change();
				var dep = $('#origin').val(); 
				for (var j = 1; j < $('#destination option').length; j++) {
					var arr = $('#destination option:eq(' + j + ')').val();
					result += dep + "-" + arr + ",";
				}
			}
		}
		return result;
	}
} 
//alert(new CHECKData().getData(window.location.host));

