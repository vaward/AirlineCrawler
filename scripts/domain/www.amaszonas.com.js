/*
@url:http://www.amaszonas.com/
@name:²£ÀûÎ¬ÑÇº½¿Õ
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.amaszonas.com') {
			for (var i = 0; i < idi.length; i++) {
				for (var j = 0; j < fullentity[idi[i]].length; j++) {
					result += idi[i] + "-" + fullentity[idi[i]][j][0] + ",";
				}
			}
		}
		return result;
	}
} 
//alert(new CHECKData().getData(window.location.host));

