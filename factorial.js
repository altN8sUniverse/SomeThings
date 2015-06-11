
var factorial = function (number) {
       if(number === 0) {
           return 1;
       }
       if(number < 0 ) {
           return undefined;
       }
       for(var i = number; --i; ) {
           number *= i;
       }
       return number;
}