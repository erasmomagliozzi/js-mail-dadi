var alessio = Math.floor(Math.random() * 6) + 1;
console.log(alessio);

var angelo = Math.floor(Math.random() * 6) + 1;
console.log(angelo);

var messaggio = '';
if (alessio > angelo) {
  messaggio = 'Ha vinto Alessio';
} else if (alessio < angelo) {
  messaggio = 'Ha vinto Angelo';
} else {
  messaggio = 'il risultato è pari';
}

console.log(messaggio);
