/*
@url:http://www.blueairweb.com/destinations/destinations-map
@name:蓝色航空
*/
var CHECKData = function() {
	this.show = function(page) {
		{
			var testwin = open("", "testwin", "status=no,menubar=yes,toolbar=no");
			testwin.document.open();
			testwin.document.write(page);
			testwin.document.close();
		}
	}
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.blueairweb.com') {
			$.ajax({
				url: '/swf/blue_map.xml',
				dataType: 'xml',
				success: function(data) {
					$(data).find("blueair").find("oras").each(function(index, ele) {
						var dep = $(ele).find("id").text();
						var arrs = $(ele).find("destinatii").text().split("|");
						for (var i = 0; i < arrs.length; i++) {
							var arr = arrs[i];
							result += dep + "-" + arr + ",";
						}
					});
				},
				async: false
			});
		}
		return result;
	}
}
//alert(new CHECKData().getData(window.location.host));
//var cda = new CHECKData();
//cda.show(cda.getData(window.location.host));
