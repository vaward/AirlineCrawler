/*
@url:http://montenegroairlines.com/
@name:黑山航空
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'montenegroairlines.com') {			
			for (var i = 1; i < $('select[name=fromCity] option').length; i++) {
				$('select[name=fromCity] option[selected]').removeAttr("selected");
				$('select[name=fromCity] option:eq(' + i + ')').attr("selected", "true");
				$("select[name=fromCity]").change();
				var dep = $('select[name=fromCity]').val(); 
				for (var j = 1; j < $('select[name=toCity] option').length; j++) {
					var arr = $('select[name=toCity] option:eq(' + j + ')').val();
					result += dep + "-" + arr + ",";
				}
			}
		}
		return result;
	}
} 
//alert(new CHECKData().getData(window.location.host));

