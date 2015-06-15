var words = function(str){
	var input1 = str.replace(/(\r\n|\n|\r)/gm," ").replace(/\s+/g, ' ');
	var arr = input.split(" ");
	var result = {} ;
	var string1 ;
	arr.forEach(function(word){
		if(word.length > 0){
			if(result[word]){
				string1 = result[word] ;
				if(typeof string1 === 'number'){
					result[word] = string1 + 1 ;
				}
				else{
					result[word] = 1 ;
				}
			}
			else{
				result[word] = 1 ;
			}
		}
	});
	return result ;
};
