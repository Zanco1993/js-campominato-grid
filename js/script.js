/*
Consegna
L’utente indica un livello di difficoltà (3 pulsanti) in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

function createNewBox(container) {
    const square = document.createElement('div');
    square.className = 'box';
    container.append(square);
    square.addEventListener('click', function(){
        // this.classList.add('blue');
        this.classList.toggle('blue'); //accendi spegni colore
    })   
}


const gridContainerHtml = document.querySelector('.grid-container');

//quando creiamo la funzione, ricordarsi di cambiare il num con una variabile MAX

for (let i = 0; i < 100; i++) {
    createNewBox(gridContainerHtml);
}