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
        !userNumbers.includes(userInput) ? userNumbers.push(userInput) : console.log("non includere" + userInput);

        /* fa l'array dei numeri indovinati dall'utente */
        numbers.includes(userInput) ? equalNumbers.push(userInput) : console.log("non c'è corrispondenza" + userInput);
    }

    /*   inserisce il risultato nell'html */
    numbersContainer.innerHTML += `<h1>Hai indovinato ${equalNumbers.length} numeri</h1>`;
    equalNumbers.forEach((element) => {
        numbersContainer.innerHTML += `<h2>${element}</h2>`;
    });
}, 1000 * 11);

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

        if (!numberList.includes(randomNumber)) {
            numberList.push(randomNumber);
        }
    }

    return numberList;
}
