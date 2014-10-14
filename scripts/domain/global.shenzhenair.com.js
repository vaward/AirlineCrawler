/*
@url:http://global.shenzhenair.com/zh/main.jsp
@name:深圳航空
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'global.shenzhenair.com') {
			for (var i = 0; i < owOrgArray.length; i++) {
				var f = owOrgArray[i].split("|");
				var d = f[0];
				var ds = d.split(/[,\-%]/);
				if (ds.length < 5) {
					continue;
				}
				var dep = ds[3].slice( - 4, -1);
				var depc = ds[2].replace(/ /g, '');
				for (var j = 1; j < f.length; j++) {
					var as = f[j].split(/[,\-%]/);
					if (as.length < 5) continue;
					var arrc = as[2].replace(/ /g, '');
					if (depc == arrc) continue;
					var arr = as[3].slice( - 4, -1);
					result += dep + "-" + arr + ",";
				}
			}
		}
		return result;
	}
} 
//alert(new CHECKData().getData(window.location.host));

