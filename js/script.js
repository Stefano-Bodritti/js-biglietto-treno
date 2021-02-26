//Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.

// 1. chiedo i km da percorrere
var km = prompt("Quanti chilometri devi percorrere?");

// 2. chiedo l'età
var eta = prompt("Quanti anni hai?");

// 2bis. controllo che i dati inseriti siano corretti
if (isNaN(km) || isNaN(eta)) {
  alert("Devi inserire dei numeri! Ricarica la pagina!")
}

// 3. calcolo il costo
var costo = km * 0.21;

// 4. applico l'eventuale sconto
if (eta >= 65) {
  costo = costo / 100 * 60;
} else if (eta < 18) {
  costo = costo / 100 * 80;
}

// 5. stampo il risultato
document.getElementById('prezzo').innerHTML = costo.toFixed(2);
