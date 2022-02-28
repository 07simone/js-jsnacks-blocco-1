const numberList = [];

for (let i = 0 ; i < 6; i++){
    const utente = parseInt (prompt("inserire il numero"));     //correzzione con inserimento del push
    if (( utente % 3 == 0) && (!isNaN (utente)) ){
        numberList.push(utente);
    
    }
}

console.log(numberList);

