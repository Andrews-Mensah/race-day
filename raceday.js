let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false

const ageOfRunner = 18;
if (ageOfRunner > 18 && registeredEarly=== true){
  raceNumber+= 1000
}

console.log (raceNumber)

if (ageOfRunner > 18 && registeredEarly === true){
  console.log (`${raceNumber} will race at 9:30 am`)} 
else if (ageOfRunner >18 &&registeredEarly !== true){
console.log (`${raceNumber} will raise at 11:00 am`)} else if (ageOfRunner < 18){
console.log (`${raceNumber} will race at 12:30 pm`)} else {
console.log (`See Personnel at Registration Desk`)
}

