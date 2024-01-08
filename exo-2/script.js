// you can write js here
const myDate = new Date();
const hourCurrent = myDate.getHours();

const WeekEnd = hourCurrent > 17 && Day >= 5 ;
const Week = hourCurrent > 9 && Day <= 5;


var isTesting = Boolean();
var jourFictif = prompt("ecrivez un jour ficitf:");

if (isTesting == true, jourFictif){
    
    var Day = jourFictif;
    console.log("Jour", Day);

} else {
    var Day = myDate.getDay(); 
}


console.log(jourFictif)
console.log("heur", hourCurrent);
console.log("Jour", Day);
console.log("week", Week);
console.log("weekend", WeekEnd);
console.log('exo-2');