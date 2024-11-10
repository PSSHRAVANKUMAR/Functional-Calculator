let display = ''; 


function press(value) {
    display += value;
    document.getElementById('screen').innerText = display;
}


function clearScreen() {
    display = '';
    document.getElementById('screen').innerText = '0';
}


function calculate() {
    try {
        
        display = eval(display).toString(); 
        document.getElementById('screen').innerText = display;
    } catch {
        document.getElementById('screen').innerText = 'Error';
        display = '';
    }
}
