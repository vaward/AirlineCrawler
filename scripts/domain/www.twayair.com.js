var CHECKData = function() {
	this.init = function() {
		var t = "var aps = [];\n";
		$.each($("option"),
		function(a, b) {
			t += "aps['" + b.text + "']='" + b.value + "';\n";
		});
		console.info(t);
	}
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.twayair.com') {
			var aps = [];
			aps['Incheon'] = 'ICN';
			aps['Fukuoka'] = 'FUK';
			aps['Bangkok'] = 'BKK';
			aps['Gimpo'] = 'GMP';
			aps['Taipei'] = 'TSA';
			aps['Saga'] = 'HSG';
			aps['Sapporo'] = 'CTS';
			aps['Jinan'] = 'TNA';
			aps['Oita'] = 'OIT';
			aps['Okinawa'] = 'OKA';
			aps['Haikou'] = 'HAK';
			aps['Gimpo'] = 'GMP';
			aps['Jeju'] = 'CJU';
			aps['Daegu'] = 'TAE';
			aps['Gwangju'] = 'KWJ';
			aps['Fukuoka'] = 'FUK';
			aps['Bangkok'] = 'BKK';
			aps['Saga'] = 'HSG';
			aps['Sapporo'] = 'CTS';
			aps['Jinan'] = 'TNA';
			aps['Oita'] = 'OIT';
			aps['Okinawa'] = 'OKA';
			aps['Haikou'] = 'HAK';
			aps['Gimpo'] = 'GMP';
			aps['Daegu'] = 'TAE';
			aps['Gwangju'] = 'KWJ';

			var count = $("td:contains('Scheduled')").attr("rowspan");
			count++;
			$.each($("td:contains('->')"),
			function(a, b) {
				if (a < count) {
					var da = $(b).text().replace(/\(.*\)/g, '').split("->");
					if (aps[da[0]] && aps[da[1]]) {
						result += aps[da[0]] + "-" + aps[da[1]] + ",";
					} else {
						alert($(b).text());
					}
				}
			});
		}
		return result;
	}
} 
//alert(new CHECKData().getData(window.location.host).length/8);

