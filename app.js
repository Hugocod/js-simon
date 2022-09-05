let numbersContainer = document.getElementById("numbers-container"); /* prendo il container dei numeri */
let numbers = createRandomNumberList(); /* lista dei 5 numeri */
let userNumbers = [];
let equalNumbers = []; /* numeri indicati dall'utente */

displayElements(); /* mostro i numeri in pagina */

/* fa scomparire numbers dopo 30secondi */
setTimeout(() => {
    numbersContainer.innerHTML = "";
}, 1000 * 2);

/* chiede i numeri */
setTimeout(() => {
    while (userNumbers.length < 5) {
        userInput = parseInt(prompt("inserisci i numeri che ti ricordi"));

        /*  inserisce solo valori univoci */
        if (!userNumbers.includes(userInput)) {
            userNumbers.push(userInput);
        } else {
            console.log("non includere");
        }

        /* fa l'array dei numeri indovinati dall'utente */
        if (numbers.includes(userInput)) {
            equalNumbers.push(userInput);
        }
    }

    /*   inserisce il risultato nell'html */
    numbersContainer.innerHTML += `<h1>Hai indovinato ${equalNumbers.length} numeri</h1>`;
    equalNumbers.forEach((element) => {
        numbersContainer.innerHTML += `<div>${element}</div>`;
    });
}, 1000 * 6);

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
