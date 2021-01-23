///Business Logic Top
function beepBoop(number) {
  let answer = [];
  for (i = 0; i <= number; i++) {
    if (i.toString().includes(3)) {
      answer.push("Won't you be my neigh-bot?");
    } else if (i.toString().includes(2)) {
      answer.push("Boop!")
    } else if (i.toString().includes(1)) {
      answer.push("Beep!")
    } else {
      answer.push(i);
    }
    return answer;
  };

}



///User Interface Logic
$(document).ready(function () {
  $("#InputNumber").submit(function (event) {
    event.preventDefault();
    let numberInput = $("#numVal").val();
    let ArrayTwo = beepBoop(numberInput);
    let combinedArray = [];
    combinedArray.push(ArrayTwo.join(" "));

    $(".result").show();
    $("#RobogerSays").text(combinedArray);
    $("#RobogerSays").show();
  }
