let display = document.getElementById('display');
let buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('clear')) {
            display.value = '';
        } else if (button.classList.contains('delete')) {
            display.value = display.value.slice(0, -1);
        } else if (button.classList.contains('equals')) {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            display.value += button.innerText;
        }
    });
});
