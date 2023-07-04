let arr = [1, 2, 3, 4];
let total = arr.reduce((sum, item) => sum += item, 0); //es6 
//for es5
let tottal5 = arr.reduce(function(sum, item) {
  return sum += item;
}, 0);
