var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.flymango.com') {
			var html = document.documentElement.outerHTML;
			var c = html.match(/airports:.+/g);
			var d = c[0].slice(10, -1);
			var e = eval(d);			
			for (var f = 0; f < e.length; f++) {
				dep = e[f].Code;
				var arrs = eval(e[f].Connections);
				for (var i = 0; i < arrs.length; i++) {
					result += dep + "-" + arrs[i].Code + ",";
				}
			}
		}
		return result;
	}
}
//alert(new CHECKData().getData('www.flymango.com'));
