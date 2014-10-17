/*
@url:http://www.gmairlines.com/
@name:缅甸 金色 航空
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.gmairlines.com') {
			for (var i = 1; i < $('select[name=departurePort] option').length; i++) {
				$('select[name=departurePort] option[selected]').removeAttr("selected");
				$('select[name=departurePort] option:eq(' + i + ')').attr("selected", "true");
				 $('select[name=departurePort]').change();
				var dep = $('select[name=departurePort]').val(); //alert(dep);
				for (var j = 1; j < $('select[name=arrivalPort] option').length; j++) {
					var arr = $('select[name=arrivalPort] option:eq(' + j + ')').val();
					result += dep + "-" + arr + ",";
				}
			}
		}
		return result;
	}
} 
//alert(new CHECKData().getData(window.location.host));

