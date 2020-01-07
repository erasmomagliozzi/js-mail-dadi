var giocatori = ['Alessio', 'Angelo'];



giocatori[0] = Math.floor(Math.random() * 6) + 1;
console.log(giocatori[0]);

giocatori[1] = Math.floor(Math.random() * 6) + 1;
console.log(giocatori[1]);
var angeloVincente = true;
if(giocatori[0] > giocatori[1]){
  angeloVincente = false;
}
console.log(angeloVincente);
