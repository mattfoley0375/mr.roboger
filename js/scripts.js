///Business Logic Top

function arrayInput(number) {
  let inputNumber = [];
  for (let i = 0; i <= number; i += 1) {
    const numberInput = i.toString();
    const boop = "Boop!"
    const neighbot = "Won't you be my neigh-bot?"
    const beep = "Beep!"
    const none = "Enter a number bigger than 0 silly human!"
  
  
    if (numberInput.includes(3)) {
      inputNumber.push(neighbot);
    } else if (numberInput.includes(2)) {
      inputNumber.push(boop);
    } else if (numberInput.includes(1)) {
      inputNumber.push(beep);
    } else {
      inputNumber.push(numberInput);
    }
    }
    return inputNumber;
  }

///User Interface Logic
$(document).ready(function () {
  $("form#NumberInputForm").submit(function (event) {
    event.preventDefault();
    const number = ($("input#numVal").val());
    const inputResult = arrayInput(number);
    $("#result").text(inputResult);

  });
});



