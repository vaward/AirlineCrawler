var CHECKData = function() {
	this.getData = function(domain) {
		var result = "";
		if (domain == 'fly.airalgerie.dz') {
			for (var d = 0; d < A.length ; d++) {
                var dep = A[d][0];
                var arrs = A[d][1].split(",");
                for (var a = 0; a < arrs.length ; a++) {
                    result += dep + "-" + arrs[a] + ",";
                }
            }
		}
		return result;
	}
}
//alert(new CHECKData().getData('fly.airalgerie.dz'));