var mailUtente = prompt('Inserisci la tua mail');
console.log(mailUtente);

var mailDatabase = ['marco@marco.com', 'paolo@paolo.com', 'andrea@andrea.com', 'franco@franco.com'];

for (var i = 0; i < mailDatabase.length; i++){
  console.log(mailDatabase[i]);
  if (mailUtente == mailDatabase[i]){
    alert('email presente nel database');
  }
}
// else {
//   alert ('email assente dal database');
// }
