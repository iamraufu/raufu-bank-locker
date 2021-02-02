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
            document.getElementById('typed-pin').value = "";
        }
        if (digit == 'B') {
            document.getElementById('typed-pin').value = document.getElementById('typed-pin').value.slice(0, -1);
        }
    } else {
        const typedInput = document.getElementById('typed-pin');
        typedInput.value = typedInput.value + digit;
    }
})

let tryCount = 3;

function verifyPin() {
    const pin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typed-pin').value;
    if (pin == typedPin && typedPin != "") {
        displayMatchResult('block', 'none');
        tryCount--;
        submitDisplay();
        actionDisplay();
    } else {
        displayMatchResult('none', 'block');
        tryCount--;
    }
    if (tryCount < 1) {
        submitDisplay();
    }
    remainingDisplay();
}

function displayMatchResult(positive, negative) {
    document.getElementById('positive').style.display = positive;
    document.getElementById('negative').style.display = negative;
}

function submitDisplay() {
    document.getElementById("submit-match").style.display = "none";
}

function actionDisplay() {
    document.getElementById('action-left').style.display = 'none';
    document.getElementById('pin').value = "";
}

function remainingDisplay() {
    document.getElementById("try-left").innerText = tryCount;
    document.getElementById("typed-pin").value = "";
}