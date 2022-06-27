let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if (buttonText == "Del") {
            screen.value = screenValue.slice(0, -1)
            screenValue = screen.value
        } 
        else if (buttonText == "%") {
            var x = screen.value;
            x = (x/100).toFixed(2);
            screen.value=x;
            screenValue = screen.value
          }  
          
        else if (buttonText == "sin") {
            var x = screen.value;
            x = x * 0.0174533;
            screen.value = Math.sin(x);
            screenValue = screen.value
        }
        else if (buttonText == "cos") {
            var x = screen.value;
            x = x * 0.0174533;
            screen.value = Math.cos(x);
            screenValue = screen.value
        }
        else if (buttonText == "tan") {
            var x = screen.value;
            x = x * 0.0174533;
            screen.value = Math.tan(x);
            screenValue = screen.value
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

