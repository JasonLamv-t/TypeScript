var a;
console.log(a);
a = 1;
console.log(a);
var getNum;
console.log(getNum);
function getNum() {
  a = 3;
}
console.log(getNum);
getNum = function () {
  a = 2;
};
console.log(a);
