var findMissing = function(arr1, arr2){
  var num=[]; 
  var diff=[];
  if(arr1.length === arr2.length){
    return 0;
  }
  for(var i=0;i<arr1.length;i++){
    num[arr1[i]]=arr1[i];
  }
  for(var j=0; j<arr2.length; j++){
    if(num[arr2[j]]){
      delete num[arr2[j]];
    }
    else num[arr2[j]]=arr2[j];
  }
  for(var k in num){
   diff.push(num[k]);
  }
  return diff[0];
}