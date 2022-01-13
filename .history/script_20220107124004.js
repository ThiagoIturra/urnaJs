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
let white = false;

function showStage() {
    let stage = stages[currentStage];

    let digitsHTML = '';
    number = '';
    white = false;
    
    for(let i=0;i<stage.numbers;i++) {
        if (i === 0) {
            digitsHTML += '<div class="numbers blink"></div>';
        }else {
            digitsHTML += '<div class="numbers"></div>';
        }
    }

    yourVoteFor.style.display = 'none';
    office.innerHTML = stage.heading;
    description.innerHTML = '';
    notification.style.display = 'none';
    side.innerHTML = '';
    digits.innerHTML = digitsHTML;
}

function updateInterface() {
    let stage = stages[currentStage];
    let candidate = stage.candidates.filter((item)=>{
        if(item.number === number) {
            return true;
        }else {
            return false;
        }
    });
    if (candidate.length > 0) {
        candidate = candidate[0];
        yourVoteFor.style.display = 'block';
        notification.style.display = 'block';
        description.innerHTML = `Nome: ${candidate.name}<br/>Partido: ${candidate.party}`;

        let photoHTML = '';
        for (let i in candidate.photo) {
            photoHTML += `<div class="division-right-image"><img src="images/${candidate.photo[i].url}" alt="">${candidate.photo[i].subtitle}</div>`;
        }

        side.innerHTML = photoHTML;
    }else {
        yourVoteFor.style.display = 'block';
        notification.style.display = 'block';
        description.innerHTML = '<div class="notification--large">VOTO NULO</div>';
    }
    
    console.log("Candidato", candidate);
}

function clicou(n) {
    let elNumber = document.querySelector('.numbers.blink');
    if(elNumber !== null) {
        elNumber.innerHTML = n;
        number = `${number}${n}`;

        elNumber.classList.remove('blink');
        if(elNumber.nextElementSibling !==null) {
            elNumber.nextElementSibling.classList.add('blink');
        }else {
            updateInterface();
        }
    }
}

function branco() {
        number = '';   
        white = true;
        yourVoteFor.style.display = 'block';
        notification.style.display = 'block';
        digits.innerHTML = '';
        description.innerHTML = '<div class="notification--large blink">VOTO EM BRANCO</div>';
        side.innerHTML = '';
} 

function corrige() {
    showStage() 
}

function confirma() {
    if(white === true) {
        console.log("confirmado");
    }
}

showStage();