/*
@url:http://www.atlasjet.com/en
@name:阿特拉斯喷气航空
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.atlasjet.com') {
			$.ajax({
				type: "GET",
				url: '/OnlineService/FromList2',
				datatype: 'html',
				success: function(da) {					
					for (var i = 0; i < da.length; i++) {
						var dep = da[i].code;						
						$.ajax({
							type: "GET",
							url: '/OnlineService/ToList_en?FromCode=' + dep,
							datatype: 'html',
							success: function(aa) {
								//eval("var aa=" + adata);
								for (var i = 0; i < aa.length; i++) {
									var arr = aa[i].code;
									result += dep + "-" + arr + ",";
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
//alert(new CHECKData().getData(window.location.host));
