let cards = ['unicornparrot', 'tripletsparrot', 'revertitparrot', 'metalparrot', 'fiestaparrot', 'explodyparrot', 'bobrossparrot' ];
let numberOfCards = [];
let initialLetters;
let letterNumberOne;
let letterNumberTwo;
let numberOfMoves;
let clickedLetter;



function startinAgmount (){
    initialLetters = Number(prompt("Insira o número de cartas que deseja jogar!"));

while (initialLetters % 2 || initialLetters < 4 || initialLetters > 14 ) 
    initialLetters = prompt("Insira um número válido que seja par entre 4 e 14")}


    function createDeck (){
        for (let i = 0; i < (initialLetters / 2 ); i++){
            const card = cards[i];
            numberOfCards.push(card);
            numberOfCards.push(card);
        }
        numberOfCards.sort(validateLuck)
        generatedLetters ()
    }
    function validateLuck (){
        return Math.random () - 0.5
    }

    function generatedLetters (){
        const gameBody = document.querySelector(".gameBody")

        for (let i = 0; i < numberOfCards.length; i++ ){
           let cardRenderer =
            `<li class="frontLetter" onclick="rotateLetter(this)">
            <div class='front-face face'>
            <img src='imagens/front.png'>
            </div>
            <div class='back-face face'>
            <img src='imagens/${numberOfCards[i]}.gif'>
            </div>
            </li>`
            gameBody.innerHTML += cardRenderer;
        }
        
    }
function rotateLetter (elemento){
    elemento.classList.toggle("rotation")
}
    startinAgmount ()
    createDeck ()