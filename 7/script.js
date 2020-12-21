let circles;
let start;
let counter;
let count;
let currentCircle;
let refreshCircles;

window.onload = function() {
    circles = document.getElementById('circles');
    initCircles();
    for (let i = 1; i < 9; i++) {
        document.getElementById(`circle_${i}`).addEventListener('click', e => {
            checkCircle(e);
        });
    }
    start = document.getElementById('start');
    start.addEventListener('click', () => {
        counter = document.getElementById('counter');
        count = 0;
        counter.innerHTML = `Счет: ${count}`;
        if (refreshCircles != null) {
            clearInterval(refreshCircles);
        }
        activeCircle();
        refreshCircles = setInterval(() => {
            activeCircle();
        }, 1500);
    });
}

function initCircles() {
    for (let i = 1; i < 9; i++) {
        circles.innerHTML += `<div class="circle" id="circle_${i}"></div>`;
    }
}

function activeCircle() {
    if (currentCircle != null) {
        currentCircle.classList.remove('active');
    }
    let randomID = Math.floor(Math.random() * 8) + 1;
    let circleActive = document.getElementById(`circle_${randomID}`);
    currentCircle = circleActive;
    circleActive.classList.add('active');
}

function checkCircle(e) {
    if (counter != null) {
        if (e.target.classList.contains('active')) {
            count++;
            if (refreshCircles != null) {
                clearInterval(refreshCircles);
            }
            activeCircle();
            refreshCircles = setInterval(() => {
                activeCircle();
            }, 1500);
        } else {
            count--;
        }
        counter.innerHTML = `Счет: ${count}`;
    }
}