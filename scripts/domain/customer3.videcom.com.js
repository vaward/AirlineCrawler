var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'customer3.videcom.com') {
			function show(msg) {
				try {
					$("#Destination").html(msg);
				} catch(e) {}
			}
			for (var i = 0; i < $('#Origin option').length; i++) {
				var dep = $('#Origin option')[i].value;
				SendAjaxRequest("../WebServices/Airports.asmx/DestinationCityList", "{'origin':'" + dep + "'}", "html", show, null, "");
				for (var j = 0; j < $('#Destination option').length; j++) {
					arr = $('#Destination option')[j].value;
					result += dep + "-" + arr + ",";
				}
			}
		}
		return result;
	}
}
//alert(new CHECKData().getData(window.location.host));
