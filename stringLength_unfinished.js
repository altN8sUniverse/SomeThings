var stringLength = function (str){
  var x = Array();
  var num = str.length;
  if(typeof str=="object") {
    for(var i=0;i<num;i++)
      x.push(str[i].length);
 } else
    x.push(str.length);
    
    return x;
}
