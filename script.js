let screen = document.getElementById('screen');

function press(value) {
    screen.value += value ;   
}

function clearScreen(value) {
    screen.value = '';
}

function back () {
  screen.value = screen.value.slice(0,-1);
}

function calculate() {
    try {
        screen .value = eval(screen.value);
    } catch{
        screen.value = 'Eror'
    }
}