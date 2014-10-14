/*
@url:http://www.aircosta.in/ebooking/home/default.aspx
@name:¿¼Ë¹´ïº½¿Õ
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.aircosta.in') {
			for (var i = 1; i < $('#drpOrigin option').length; i++) {
				var dep = $('#drpOrigin option:eq(' + i + ')').val();
				$.ajax({
					type: "POST",
					url: '../Ajax/GetDestinationRoutes.ashx',
					data: 'Action=D&SelectedOrigin=' + dep,
					datatype: 'html',
					success: function(data) {
						eval("var arrs = " + data);
						for (var i = 0; i < arrs.length; i++) {
							var arr = arrs[i].Code;
							result += dep + "-" + arr + ",";
						}
					},
					error: function(data) {},
					async: false
				});
			}
		}
		return result;
	}
}
//alert(new CHECKData().getData(window.location.host));
