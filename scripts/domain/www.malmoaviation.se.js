/*
@url:http://www.malmoaviation.se/en
@name:马尔默航空
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = '';
		if (domain == 'www.malmoaviation.se') {
			for (var i = 1; i < $('#edit-from option').length; i++) {
				$('#edit-from option[selected]').removeAttr('selected');
				$('#edit-from option:eq(' + i + ')').attr('selected', 'true');
				$('#edit-from').change();
				var dep = $('#edit-from').val();
				for (var j = 1; j < $('#edit-to option').length; j++) {
					var arr = $('#edit-to option:eq(' + j + ')').val();
					result += dep + '-' + arr + ',';
				}
			}
		}
		return result;
	}
} 
//alert(new CHECKData().getData(window.location.host));
