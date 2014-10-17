/*
@url:http://www.buddhaair.com/
@name:佛陀航空
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.buddhaair.com') {
			for (var i = 1; i < $('#depart option').length; i++) {
				var dep = $('#depart option:eq(' + i + ')').val();
				$.ajax({
					type: "POST",
					url: '/booking/ajax/ajaxdestination',
					data: 'code=' + dep,
					datatype: 'html',
					success: function(data) {
						var avs = data.match(/value="[A-Z]{3}"/g);
						for (var i = 0; i < avs.length; i++) {
							var arr = avs[i].slice( - 4, -1);
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

