//controle de interface
let yourVoteFor = document.querySelector('.d1 span');
let office = document.querySelector('.d1-2 span');
let description = document.querySelector('.d1-4');
let notification = document.querySelector('.division-2');
let side = document.querySelector('.division-right');
let digits = document.querySelector('.d1-3');

//controle de ambiente
let currentStage = 0;
let number = '';

function showStage() {
    let stage = stages[currentStage];

    let digitsHTML = '';
    
    for(let i=0;i<stage.numbers;i++) {
        digitsHTML += '<div class="numbers"></div>';
    }

    yourVoteFor.style.display = 'none';
    office.innerHTML = stage.heading;
    description.innerHTML = '';
    notification.style.display = 'none';
    side.innerHTML = '';
    digits.innerHTML = digitsHTML;
}

function updateInterface() {

}

function clicou(n) {
    let number = document.querySelector('.numbers.blink');
}

function branco() {
    alert("Clicou em Branco!");
}

function corrige() {
    alert("Clicou em Corrige!");
}

function confirma() {
    alert("Clicou em Confirma!");
}

showStage();