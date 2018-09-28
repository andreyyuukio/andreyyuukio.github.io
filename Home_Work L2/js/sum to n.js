function sum() {
var n = +prompt('Write your number', '13');
function sumTo(n) {

  for(i = 1; i <= n; i++) {
    return n + sumTo(n - 1);
  }
  return n;

};
alert(sumTo(n));
}	
	