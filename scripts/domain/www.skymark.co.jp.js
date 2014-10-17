/*
@url:http://www.skymark.co.jp/ja/
@name:日本天马航空
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.skymark.co.jp') {
			for (var i = 0; i < $('select[name=departure] option').length; i++) {
				$('select[name=departure] option[selected]').removeAttr("selected");
				$('select[name=departure] option:eq(' + i + ')').attr("selected", "true");
				$('select[name=departure]').change();
				var dep = $('select[name=departure]').val();
				for (var j = 0; j < $('select[name=arrival] option').length; j++) {
					var arr = $('select[name=arrival] option:eq(' + j + ')').val();
					result += dep + "-" + arr + ",";
				}
			}
		}
		return result;
	}
} 
//alert(new CHECKData().getData(window.location.host));

