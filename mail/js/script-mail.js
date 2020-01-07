var mailUtente = prompt('Inserisci la tua mail');
console.log(mailUtente);

var mailDatabase = ['marco@marco.com', 'paolo@paolo.com', 'andrea@andrea.com', 'franco@franco.com'];
console.log(mailDatabase[i]);
var mailPresente = false;

for (var i = 0; i < mailDatabase.length; i++){
  if (mailUtente == mailDatabase[i]){
    mailPresente = true;
    alert('Mail presente nel database');
  }
}
console.log(mailPresente);
