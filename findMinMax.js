var arr = Array();
var findMinMax = function (arr){	
	var maxi = Math.max.apply(null, arr);
	var mini = Math.min.apply(null, arr);
	var result = [mini, maxi];
	var res = [mini];
	if (maxi === mini){
		return res;
	}
	else return result;
}

findMinMax(arr1);
