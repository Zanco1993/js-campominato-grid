/*
Consegna
L’utente indica un livello di difficoltà (3 pulsanti) in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

function createGrillEasy(max){
   
        for (let i = 1; i <= max; i++) {
            createNewBox(gridContainerHtml, i);
        }
    }


function createGrillMedium(max){
        for (let i = 1; i <= max; i++) {
            createNewBox(gridContainerHtml, i);
        }

}

function createGrillHard(max){
        for (let i = 1; i <= max; i++) {
            createNewBox(gridContainerHtml, i);
        }
    
}

function createNewBox(container, n) {
    const square = document.createElement('div');
    square.className = 'box';
    container.append(square);
    square.innerHTML = n;
    square.addEventListener('click', function(){
        // this.classList.add('blue');
        this.classList.toggle('blue'); //accendi spegni colore

    })   
}


const gridContainerHtml = document.querySelector('.grid-container');
const buttonEasy = document.querySelector('.easy-difficult');
const buttonMedium = document.querySelector('.medium-difficult');
const buttonHard = document.querySelector('.hard-difficult');

buttonEasy.addEventListener('click', function(){
    gridContainerHtml.innerHTML = "";
    gridContainerHtml.classList.add("easy");
    gridContainerHtml.classList.remove("medium");
    gridContainerHtml.classList.remove("hard");
    createGrillEasy(100);
})

buttonMedium.addEventListener('click', function(){
    gridContainerHtml.innerHTML = "";
    gridContainerHtml.classList.add("medium");
    gridContainerHtml.classList.remove("easy");
    gridContainerHtml.classList.remove("hard");
    createGrillMedium(81);
})

buttonHard.addEventListener('click', function(){
    gridContainerHtml.innerHTML = "";
    gridContainerHtml.classList.add("hard");
    gridContainerHtml.classList.remove("medium");
    gridContainerHtml.classList.remove("easy");
    createGrillHard(49);
})
