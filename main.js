const datePicker = document.getElementById('date')
const hourPicker = document.getElementById('hour')

const mainContainer = document.getElementById('mainContainer');
const ageContainer = document.getElementById('ageContainer');

let mainDate;
let currentDate;

let date;
let hour;

let age;

function calculate() {
    main();
}

function main() {
    date = datePicker.value;
    hour = parseFloat(hourPicker.value);

    mainDate = new Date(date);

    mainDate.setHours(hour);

    console.log(mainDate);

    mainContainer.style.display = 'none';

    ageContainer.style.display = 'flex';

    activate();
}

function update() {
    console.log(date)
    console.log(hour)

    currentDate = new Date();

    let diffSec = currentDate.getTime() - mainDate.getTime();

    let diffYear = diffSec / 1000 / 60 / 60 / 24 / 365;

    ageContainer.innerHTML = diffYear.toFixed(9) + " Years Old";
}

function activate() {
    setInterval(() => {
        update();
    }, 50);
}