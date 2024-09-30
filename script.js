let display = document.getElementById('display');
let buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('btn-danger')) {
            display.value = '';
        } else if (button.classList.contains('btn-secondary') && button.innerText === '←') {
            display.value = display.value.slice(0, -1);
        } else if (button.classList.contains('btn-success')) {
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
