


///User Interface Logic
$(document).ready(function () {
  $("form#form").submit(function (event) {
    event.preventDefault();
    const number = ($("input#numVal").val());
    const inputResult = arrayInput(number);
    $("#result").text(inputResult);

  });
});



///Business Logic Top

function arrayInput(numbers) {
  let inputNumber = [];
  for (let index = 0; index <= numbers; index += 1) {
    const numbInput = index.toString();

    const beep = "Beep!"
    const boop = "Boop!"
    const neighbot = "Won't you be my neigh-bot?"
    
    if (numbInput.includes(3)) {
      inputNumber.push(neighbot);
    } else if (numbInput.includes(2)) {
      inputNumber.push(boop);
    } else if (numbInput.includes(1)) {
      inputNumber.push(beep);
    } else {
      inputNumber.push(numbInput);

    }
    }
    return inputNumber;

  }
