// 問題1
const array = [2, 4, 7, 5, 4, 3, 8];
const result = array.filter(function (value, index, self) {
  return self.indexOf(value) === index;
});
console.log(result);

// 問題2
function leapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  } return false;
  }

const checkYear = [2020, 2021];
checkYear.map(function (name,index){
  if (leapYear(index)) {
  console.log(name + 'はうるう年です');
} else {
  console.log(name + 'はうるう年ではありません');
}
});


