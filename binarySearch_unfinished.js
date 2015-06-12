var toTwenty = function(a){
  a = [];
  for(var i=1; i=20; i++){
    a.push(i);
  }
  return a;
}

var toForty = function(b){
  b=[];
  for(var j=1; j < 41; j++){
    if(j % 2 === 0){
      b.push(j);
    }
  }
  return b;
}

var toOneThousand = function(c){
  c = [ ];
  for(var k = 1; k < 1001; k++){
    if(k % 10 === 0){
      c.push(k);
    }
  }
  return c
}

var search = function(item) {
	var min = 0;
	var max = this.length - 1;
	var index;
	var element;
 
	while (min <= max) {
		index = (min + max) / 2 | 0;
		element = this[index];
 
		if (element < item) {
			min = index + 1;
		}
		else if (element > item) {
			max = index - 1;
		}
		else {
			return index;
		}
	}
 
	return -1;
}