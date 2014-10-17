/*
@url:http://www.airblue.com/sched/schedule_popup.asp
@name:空蓝航空
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.airblue.com') {
			var html = document.documentElement.outerHTML;
			var avs = html.match(/[A-Z]{3}→[A-Z]{3}/g);
			for (var i = 0; i < avs.length; i++) {				
				result += avs[i].replace(/→/,"-") + ",";
			}
		}
		return result;
	}
} 
alert(new CHECKData().getData(window.location.host));

