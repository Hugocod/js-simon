let numbersContainer = document.getElementById("numbers-container"); /* prendo il container dei numeri */
let numbers = createRandomNumberList(); /* Numeri indicati dal pc*/
let userNumbers = []; /* numeri indicati dall'utente */
let equalNumbers = []; /* numeri indovinati dall'utente */

displayElements(); /* mostro i numeri in pagina */

/* fa scomparire numbers dopo 10secondi */
setTimeout(() => {
    numbersContainer.innerHTML = "";
    document.getElementById("game-rule").remove();
}, 1000 * 10);

/* chiede i numeri */
setTimeout(() => {
    while (userNumbers.length < 5) {
        userInput = parseInt(prompt("Inserisci i numeri che ti ricordi"));

        /*  inserisce solo valori univoci */
        !userNumbers.includes(userInput) ? userNumbers.push(userInput) : null;

        /* fa l'array dei numeri indovinati dall'utente */
        numbers.includes(userInput) ? equalNumbers.push(userInput) : null;
    }

    /*   inserisce il risultato nell'html */
    numbersContainer.innerHTML += `<h1>Hai indovinato ${equalNumbers.length} numeri</h1>`;
    equalNumbers.forEach((element) => {
        numbersContainer.innerHTML += `<h2>${element}</h2>`;
    });
}, 1000 * 10.2);

/* 
------------------------------------------------------------------
------------------------------------------------------------------
------------------------------------------------------------------
------------------------------------------------------------------
------------------------------------------------------------------
------------------------------------------------------------------
FUNZIONI------------------------------------------------------- */

/* mostro gli elementi */
function displayElements() {
    /*   let numbers = createRandomNumberList(); */

    for (let index = 0; index < numbers.length; index++) {
        numbersContainer.innerHTML += `<h1>${numbers[index]}</h1>`;
    }
}

/* creo 5 numeri random */
function createRandomNumberList() {
    let numberList = [];

    while (numberList.length < 5) {
        let randomNumber = Math.floor(Math.random() * 100 + 1);

        /* Se il numero è diverso dai precedenti lo inserisco nella lista, se è un doppione NO. Questo genera numeri univoci nella lista */
        !numberList.includes(randomNumber) ? numberList.push(randomNumber) : null;
    }

    return numberList;
}
