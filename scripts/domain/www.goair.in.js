var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.goair.in') {
			for (var i = 1; i < $('#cmbOriginHome option').length; i++) {
				$('#cmbOriginHome option[selected]').removeAttr("selected");
				$('#cmbOriginHome option:eq(' + i + ')').attr("selected", "true");
				fillDestinations('normal', 'grow');
				var dep = $('#cmbOriginHome').val();
				for (var j = 1; j < $('#cmbDestHome option').length; j++) {
					var arr = $('#cmbDestHome option:eq(' + j + ')').val();
					result += dep + "-" + arr + ",";
				}
			}
		}
		return result;
	}
}
//alert(new CHECKData().getData(window.location.host));