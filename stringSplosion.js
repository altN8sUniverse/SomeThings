function StringSplosion (str) {
	this.aString = str ;
	this.manipulate = function(){
	var strArr = this.aString.split('');
	var aString = this.aString ;
	var output = [];
	var strPart;
	var i = 1 ;
	strArr.forEach(function(item){
	strPart = aString.substring(0, i);
	output.push(strPart);
	i++;
	});
	return output.join('');
	};
}
