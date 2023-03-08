/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */



/* The program must ask to user the number of kilometers he wishes to travel and the passenger's age.
I've realized two 'const' variables bacause aren't reassignables and I've assigned each 'const' variable to the prompt method, which shows a dialogue window asking the user for input.
I've added the method parseInt because I want the result to be an integer!*/
const kilometersNumber = parseInt(prompt('Quanti km vuoi percorrere?'));
const passengerAge = parseInt(prompt('Qual è la tua età?'));

/* With these informations the program must calculate the total price of journey, according to these rules:
the ticket price is defined by km (0.21 € per km).
I've created a 'const' variable to calculate the multiplication of the ticket price! */
const ticketPrice = kilometersNumber * 0.21;

/* Total price of journey!
I've realized a 'let' variable because I want to realize a variable without assigning a value! */
let totalPrice = ticketPrice;

/* There is a 20% discount for minors!
I've created a 'const' variable to realize the percentage operations! */
const discount_20 = (ticketPrice * 20) / 100;

/* There is a 40% discount for over 65!
I've created a 'const' variable to realize the percentage operations! */
const discount_40 = (ticketPrice * 40) / 100;

// Total price of journey for minors with conditional statement if!
if (passengerAge < 18) {
    totalPrice = ticketPrice - discount_20;
}

// Total price of journey for over 65 with conditional statement if!
if (passengerAge >= 65) {
    totalPrice = ticketPrice - discount_40;
}

/* The output of the final price should be put out in human form (with maximum two decimals, to indicate cents on the price).
I've used document.getElementById("id").innerHTML to access <h1> title of index.html!
I've used the method toFixed to converte the number of the total price to a string with two decimals! */
document.getElementById("total_price").innerHTML = 'Il prezzo totale del biglietto è di ' + totalPrice.toFixed(2) + '€ !';