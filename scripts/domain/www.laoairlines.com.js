var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.laoairlines.com') {		
			$.ajax({
				type: "POST",
				url: 'ajaxdata.php',
				data: 'tsk=getinter',
				datatype: 'html',
				success: function(data) {
					var dvs = data.match(/value="[A-Z]{3}"/g);
					for (var i = 0; i < dvs.length; i++) {
						var dep = dvs[i].slice( - 4, -1); //alert(dep);
						$.ajax({
							type: "POST",
							url: 'ajaxdata.php',
							data: 'tsk=getdestinter&code='+dep,
							datatype: 'html',
							success: function(dataa) {
								var avs = dataa.match(/value="[A-Z]{3}"/g);
								for (var i = 0; i < avs.length; i++) {
									var arr = avs[i].slice( - 4, -1); 
									result+=dep+"-"+arr+",";
								}
							},
							error: function(data) {},
							async: false
						});
					}
				},
				error: function(data) {},
				async: false
			});
			$('#Type').val("Dem");
			$.ajax({
				type: "POST",
				url: 'ajaxdata.php',
				data: 'tsk=getcountry',
				datatype: 'html',
				success: function(data) {
					var dvs = data.match(/value="[A-Z]{3}"/g);
					for (var i = 0; i < dvs.length; i++) {
						var dep = dvs[i].slice( - 4, -1); //alert(dep);
						$.ajax({
							type: "POST",
							url: 'ajaxdata.php',
							data: 'tsk=getlocal&code='+dep,
							datatype: 'html',
							success: function(dataa) {
								var avs = dataa.match(/value="[A-Z]{3}"/g);
								for (var i = 0; i < avs.length; i++) {
									var arr = avs[i].slice( - 4, -1); 
									result+=dep+"-"+arr+",";
								}
							},
							error: function(data) {},
							async: false
						});
					}
				},
				error: function(data) {},
				async: false
			});
		}
		return result;
	}
}
alert(new CHECKData().getData(window.location.host));
