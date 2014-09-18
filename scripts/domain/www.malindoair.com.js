var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'www.malindoair.com') {
			var ports = document.getElementsByClassName("port");
      for(var i = 0 ; i < ports.length ; i++){
      	var dep = ports[i].getAttribute("data-port-code");
      	if(dep == "-1"){
      		continue;
      	}
      	var arrs =  ports[i].getAttribute("data-allowed-ports").split(",")
      	for(var j = 0 ; j < arrs.length ;j++){
      		result+=dep+"-"+arrs[j]+",";
      	}
      }
		}
		return result;
	}
}
