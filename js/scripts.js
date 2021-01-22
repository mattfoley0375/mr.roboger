///Business Logic Top
function beepBoop(number) {
  let inputtedArray = [];
  for (let i = 0, i <= number, i++) {
    inputtedArray.push([i]);
if (inputtedArray[i].toString()includes(1)) {
  inputtedArray[i]= "Beep";
  else if (inputtedArray[i].toStrong().includes(2)){
    inputtedArray[i]= "Boop"

  }
}
}
  
}










///User Interface Logic
$(document).ready(function() {
  $(#InputNumber).submit(function) {
    event.preventDefault();
    const number = parseInt($("#number")).valueOf();
    const answer = beepBoop (number);
