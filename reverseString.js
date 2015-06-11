var reverseString = function(string)
{
  if (string.length === 0){
    return null;
  }
	else {
	  word = string.split('').reverse().join('')
	  if (word === string){
	    return true
	  }
	  else return word 
	  }
}



