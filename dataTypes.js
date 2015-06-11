var dataTypes = function(myValue){
  if(typeof myValue === 'string' ){
    return myValue.length;
  }
  else if(typeof myValue === null || myValue === undefined){
    return 'no value';
  }
  else if(typeof myValue == 'boolean'){
    if(myValue === true){
      return true
    }
    else return false;
  }
  else if(typeof myValue === 'number'){
    if(myValue < 100){
      return "less than 100";
    }
    else if( myValue > 100){
      return "more than 100";
    }
    else return "equal to 100";
  }
  else if(typeof myValue ==  'object' ){
    return (myValue[2]);
  }
  else if(typeof myValue ==='function'){
    return myValue(true);
  }
  
}
