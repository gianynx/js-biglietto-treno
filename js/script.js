/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */



/* The program must ask to user the number of kilometers he wishes to travel and the passenger's age.
I've realized two 'const' variables bacause aren't reassignagles and I've assigned each 'const' variable to the prompt method, which shows a dialogue window asking the user for input. */

const kilometersNumber = prompt('Quanti km vuoi percorrere?');
const passengerAge = prompt('Qual è la tua età?');
