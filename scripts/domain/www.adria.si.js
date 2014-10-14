/*
@url:https://www.adria.si/en/
@name:亚德里亚航空公司 需要临时关闭ssl 错误
*/
var CHECKData = function() {
	this.getData = function(domain) {
		document.getElementById("backgrounds").remove();
		var result = "";
		if (domain == 'www.adria.si') {
			var html = document.documentElement.outerHTML;
			var c = html.match(/cns =.+/g);
			eval("var " + c);
			for (var dp in cns) {
				var dep = dp;
				for (var i = 0; i < cns[dp].length; i++) {
					var arr = cns[dp][i][0];
					result += dep + "-" + arr + ",";
				}
			}
		}
		return result;
	}
} 
//alert(new CHECKData().getData(window.location.host));

