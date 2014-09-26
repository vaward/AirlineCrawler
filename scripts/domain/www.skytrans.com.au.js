var CHECKData = function() {
	this.ajax = function(url) {
		var resp = "";
		var xmlHttp = getXmlHttpObject();
		xmlHttp.onreadystatechange = function() {			
			if (xmlHttp.readyState == 4) {
				if (xmlHttp.status == 200) {					
					if (xmlHttp.responseText.length > 0) {
						resp = xmlHttp.responseText;						
					}
				} else { 
				}
			}
		}
		xmlHttp.open('GET', url, false);
		xmlHttp.send(null);
		return resp;
	}

	this.getData = function(domain) {
		var result = "";
		if (domain == 'booking.skytrans.com.au' || domain == 'www.skytrans.com.au') {
			var deps = this.ajax("http://booking.skytrans.com.au/ResWeb2/bookingPanelAJAX.aspx?fillAirports=1").split("|");
			//alert(deps.length);
			for (var i=0; i< deps.length ; i++)
			{
				var dep = deps[i].split("-")[0].trim();
				var arrurl = "http://booking.skytrans.com.au/ResWeb2/bookingPanelAJAX.aspx?getDestinations=1&origin="+dep;
				var arrs = this.ajax(arrurl).split("|");
				for (var j = 0; j<arrs.length ;j++ )
				{
					var arr = arrs[j].split("-")[0].trim();
					result+=dep+"-"+arr+",";
				}
			}
		}
		return result;
	}
}
//alert(new CHECKData().getData(window.location.host));
