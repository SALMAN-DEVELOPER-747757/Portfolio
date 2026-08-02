const input = document.querySelector('.input');
const buttons = document.querySelectorAll('.button');

let string = "";

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const value = e.target.innerHTML;

    if (value === '=') {
      try {
        string = eval(string);
        input.value = string;
      } catch (err) {
        input.value = "Error";
        string = "";
      }
    } else if (value === 'AC') {
      string = "";
      input.value = string;
    } else {
      string += value;
      input.value = string;
    }
  });
});
