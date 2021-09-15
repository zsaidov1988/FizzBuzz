
const fizzBuzz = (digit) => {
  return (digit % 3 === 0 && digit % 5 === 0) ? '<span class="fizz-buzz">FizzBuzz</span>' : (digit % 3 === 0) ? '<span class="fizz">Fizz</span>' : (digit % 5 === 0) ? '<span class="buzz">Buzz</span>' : digit;
}

var elForm = document.querySelector('.form-js');

elForm.addEventListener('submit', function (e) {
  e.preventDefault();

  var digit = Number(document.querySelector('.input-ball-js').value.trim());

  var elCheck = document.querySelector('.check-js');

  var elOutput = document.querySelector('.result-js');

  var message = 'Natija: ';

  if (!isNaN(digit)) {
    if (elCheck.checked) {
      for (let i = 1; i <= digit; i++) {
        message = (i > 1) ? `${message}  *  ${fizzBuzz(i)}` : `${message}${fizzBuzz(i)}`;
      }
    }
    else {
      message = `${message}${fizzBuzz(digit)}`;
    }
  }
  else {
    message = 'Faqat raqamlarni kiritishingiz mumkin';
  }

  elOutput.innerHTML = message;
})