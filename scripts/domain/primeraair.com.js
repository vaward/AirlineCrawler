/*
@url:https://primeraair.com/searchFlights.do?lang=en
@name:西甲航空公司
*/
var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'primeraair.com') {			
			result = $("#airlinetext").text();
			var dep =  $("input[name=from]").val();
			$(".suggestions:eq(1) span").each(function(i,e){
				arr=($(this).attr("data-info").slice(0,3));
				result += dep + "-" + arr + ",";
			});
		}
		return result;
	}
} 
//alert(new CHECKData().getData(window.location.host));

