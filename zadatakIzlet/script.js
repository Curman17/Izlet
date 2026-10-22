// Unos podataka
let korisnickoIme = prompt("Unesite vaše ime:");
let cijenaUlaznice = Number(prompt("Unesite cijenu jedne ulaznice:"));
let brojUlaznica = Number(prompt("Unesite broj ulaznica:"));
let raspoloziviBudzet = Number(prompt("Unesite budžet:"));

// Izračun i usporedbe
let ukupniTrošak = cijenaUlaznice * brojUlaznica;
let preostaliIznos = raspoloziviBudzet - ukupniTrošak;
let dovoljanBudzet = raspoloziviBudzet >= ukupniTrošak;
let jednakBudzet = raspoloziviBudzet === ukupniTrošak;

// Ispis rezultata
let nastavakIzleta = confirm("Želite li nastaviti s planiranjem izleta?");
alert("Ime: " + korisnickoIme + 
    "\nUkupni trošak: " + ukupniTrošak + " EUR" +
    "\nPreostali iznos: " + preostaliIznos + " EUR" +
    "\nDovoljno novca: " + dovoljanBudzet + 
    "\nTočan iznos: " + jednakBudzet + 
    "\nNastavak planiranja: " + nastavakIzleta);