// JavaScript для отображения текущей даты
const currentDateElement = document.getElementById('currentDate');
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const currentDateString = new Date().toLocaleDateString('ru-RU', options);
currentDateElement.textContent = currentDateString;

// JavaScript для переключения между чётной и нечётной неделями
const tabs = document.querySelectorAll('.tab');
const tables = document.querySelectorAll('table');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const week = tab.getAttribute('data-week');
        tables.forEach(table => {
            table.style.display = 'none';
        });
        document.querySelector(`table.${week}`).style.display = 'table';
    });
})
// Создание звукового объекта
var clickSound = new Audio('t1.mp3');

// Кликер
var click = 0;
var clickRange = 1;

function clicker() {
    click += clickRange;
    let a = document.getElementById("aboba").innerHTML = click;

    // Воспроизведение звука
    clickSound.play();
}
