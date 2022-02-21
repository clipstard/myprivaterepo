var count = 0;
const colors = [
    'red', 'blue', 'green', 'yellow', 'brown', 'black', 'gray', 'cyan', 'purple', 'pink',
];
var transport = [];
const len = colors.length;
const element = document.getElementById('div1');
const myButton = document.getElementById('myButton');
const myHeading = document.getElementById('myHeading');

function increment () {
    count++;
}

function incrementText () {
    increment();
    myHeading.innerHTML = `Count = ${count}`;
}

function changeMyText() {
    incrementText();
    myButton.innerText = `click me (${count})`;
}

document.getElementById('changeColorButton').addEventListener('click', function () {
    incrementText();
    myHeading.style.color = generageColor();
});

function addBrakeFunction() {
    myHeading.innerHTML = '<br />' + myHeading.innerHTML ;
}

document.getElementById('addBreak').addEventListener('click', addBrakeFunction);

const checkboxes = document.getElementsByTagName('input');

function getTransport(num) {
    if (num === 0) {
        return 'Bicileta';
    }

    if (num === 1) {
        return 'Masina';
    }

    if (num === 2) {
        return 'Avion';
    }

    return 'Tren';
}

for ( let i = 0; i < checkboxes.length; i++) {
    const checkbox = checkboxes.item(i);
    if (checkbox.type === 'checkbox') {
        checkbox.addEventListener('input', function () {
            if (checkbox.checked) {
                transport.push(i)
            } else {
                transport = transport.filter((item) => item !== i);
            }

            let str = '';
            transport.forEach(transportType => {
                str += getTransport(transportType);
            });
            myHeading.innerHTML = 'Tipul de transport: ' + str;
        });
    }
}

document.getElementById('myRange').addEventListener('input', function () {
const value = document.getElementById('myRange').value;
myHeading.style.fontSize = value + 'px';
myHeading.style.opacity = value - 1 + '%';
});



function generageColor() {
    const red = Math.random() * 255;
    const green = Math.random() * 255;
    const blue = Math.random() * 255;

    return `rgb(${red}, ${green}, ${blue})`;
}