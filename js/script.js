function getPin() {
    const random = Math.random() * 1000000;
    const pin = (random + ' ').split('.')[0];
    if (pin.length == 6) {
        return pin;
    } else {
        return getPin();
    }
}

function generatePin() {
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
}

const buttonContainer = document.getElementById('digits-container');
buttonContainer.addEventListener('click', function(event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        if (digit == 'C') {
            document.getElementById('typed-pin').value = '';
        }
    } else {
        const typedInput = document.getElementById('typed-pin');
        typedInput.value = typedInput.value + digit;
    }
})

function verifyPin() {
    const pin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typed-pin').value;
    if (pin == typedPin) {
        displayMatchResult('block', 'none');
    } else {
        displayMatchResult('none', 'block');
    }
    //     confirm("Thanks for Banking With Raufu Prezens");
    //     location.reload();
}

function displayMatchResult(positive, negative) {
    document.getElementById('positive').style.display = positive;
    document.getElementById('negative').style.display = negative;
}