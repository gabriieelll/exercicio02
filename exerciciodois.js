let raceNumber = Math.floor(Math.random() * 1000);

let registroCedo = false;
let idadeCorredor = 30; // Altere esta idade para testar diferentes condições de corredor

if (idadeCorredor > 18 && registroCedo) {
  raceNumber += 1000;
}

if (idadeCorredor > 18 && registroCedo) {
  console.log(`Corredor com número de corrida ${raceNumber} correrá às 9h30.`);
} else if (idadeCorredor > 18 && !registroCedo) {
  console.log(`Corredor com número de corrida ${raceNumber} correrá às 11h00.`);
} else if (idadeCorredor < 18) {
  console.log(`Corredor com número de corrida ${raceNumber} correrá às 12h30.`);
} else {
  console.log(`Corredor com 18 anos de idade deve verificar a mesa de registro.`);
}
