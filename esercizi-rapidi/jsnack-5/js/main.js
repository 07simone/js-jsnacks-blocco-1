const userNumber = prompt("inserire un numero di 7 cifre");

let sum = 0;

for ( let i = 0; i < userNumber.length; i++) {     //correzzione completa dell'esercizio 
    sum += parseInt(userNumber.charAt(i));
}
console.log(sum);